// DOM elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const suggestionsDiv = document.getElementById('suggestions');
const resultsContainer = document.getElementById('resultsContainer');
const notFound = document.getElementById('notFound');
const searchTypeRadios = document.getElementsByName('searchType');

// Search function
function searchMedicine() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const searchType = document.querySelector('input[name="searchType"]:checked').value;
    
    // Hide previous results
    suggestionsDiv.classList.add('d-none');
    notFound.classList.add('d-none');
    resultsContainer.innerHTML = '';
    
    if (!searchTerm) return;
    
    let matches = [];
    
    if (searchType === 'all') {
        matches = medicineData.filter(med => 
            med.Medicine_Name.toLowerCase().includes(searchTerm) ||
            med.Generic_Name.toLowerCase().includes(searchTerm) ||
            med.Usage.toLowerCase().includes(searchTerm)
        );
    } else if (searchType === 'medicine') {
        matches = medicineData.filter(med => 
            med.Medicine_Name.toLowerCase().includes(searchTerm)
        );
    } else if (searchType === 'generic') {
        matches = medicineData.filter(med => 
            med.Generic_Name.toLowerCase().includes(searchTerm)
        );
    } else if (searchType === 'usage') {
        matches = medicineData.filter(med => 
            med.Usage.toLowerCase().includes(searchTerm)
        );
    }
    
    if (matches.length > 0) {
        displayResults(matches);
    } else {
        // No matches found - try fuzzy search
        const fuzzyMatches = fuzzySearch(searchTerm, searchType);
        if (fuzzyMatches.length > 0) {
            displayResults(fuzzyMatches);
        } else {
            notFound.classList.remove('d-none');
        }
    }
}

// Display search results
function displayResults(medicines) {
    resultsContainer.innerHTML = '';
    
    medicines.forEach(medicine => {
        const medicineCard = document.createElement('div');
        medicineCard.className = 'col-md-6';
        medicineCard.innerHTML = `
            <div class="medicine-card">
                <div class="card-header">
                    <h3 class="mb-0">${medicine.Medicine_Name}</h3>
                    <span class="badge-category position-absolute" style="top: 15px; right: 15px;">${medicine.Category}</span>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <p><strong><i class="fas fa-dna me-2"></i>Generic Name:</strong> ${medicine.Generic_Name}</p>
                            <p><strong><i class="fas fa-prescription-bottle-alt me-2"></i>Dosage:</strong> ${medicine.Dosage}</p>
                        </div>
                        <div class="col-md-6">
                            <p><strong><i class="fas fa-heartbeat me-2"></i>Usage:</strong> ${medicine.Usage}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <p><strong><i class="fas fa-exclamation-triangle me-2"></i>Side Effects:</strong> ${medicine.Side_Effects}</p>
                        </div>
                        <div class="col-md-6">
                            <p><strong><i class="fas fa-shield-alt me-2"></i>Precautions:</strong> ${medicine.Precautions}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        resultsContainer.appendChild(medicineCard);
    });
}

// Show suggestions
function showSuggestions(matches) {
    suggestionsDiv.innerHTML = '';
    matches.slice(0, 5).forEach(med => {
        const suggestion = document.createElement('a');
        suggestion.className = 'list-group-item list-group-item-action';
        
        // Show different suggestion text based on what matched
        let suggestionText = med.Medicine_Name;
        let icon = '<i class="fas fa-tag me-2"></i>';
        
        if (med.Generic_Name.toLowerCase().includes(searchInput.value.trim().toLowerCase())) {
            suggestionText = `${med.Medicine_Name} (${med.Generic_Name})`;
            icon = '<i class="fas fa-dna me-2"></i>';
        } else if (med.Usage.toLowerCase().includes(searchInput.value.trim().toLowerCase())) {
            suggestionText = `${med.Medicine_Name} - ${med.Usage.substring(0, 30)}...`;
            icon = '<i class="fas fa-heartbeat me-2"></i>';
        }
        
        suggestion.innerHTML = `${icon}${suggestionText}`;
        suggestion.addEventListener('click', () => {
            searchInput.value = med.Medicine_Name;
            displayResults([med]);
            suggestionsDiv.classList.add('d-none');
        });
        suggestionsDiv.appendChild(suggestion);
    });
    suggestionsDiv.classList.remove('d-none');
}

// Fuzzy search implementation
function fuzzySearch(searchTerm, searchType) {
    const MAX_DISTANCE = 3;
    
    return medicineData.filter(med => {
        if (searchType === 'all') {
            return (
                calculateEditDistance(searchTerm, med.Medicine_Name.toLowerCase()) <= MAX_DISTANCE ||
                calculateEditDistance(searchTerm, med.Generic_Name.toLowerCase()) <= MAX_DISTANCE ||
                calculateEditDistance(searchTerm, med.Usage.toLowerCase()) <= MAX_DISTANCE
            );
        } else if (searchType === 'medicine') {
            return calculateEditDistance(searchTerm, med.Medicine_Name.toLowerCase()) <= MAX_DISTANCE;
        } else if (searchType === 'generic') {
            return calculateEditDistance(searchTerm, med.Generic_Name.toLowerCase()) <= MAX_DISTANCE;
        } else if (searchType === 'usage') {
            return calculateEditDistance(searchTerm, med.Usage.toLowerCase()) <= MAX_DISTANCE;
        }
        return false;
    }).sort((a, b) => {
        const distA = Math.min(
            calculateEditDistance(searchTerm, a.Medicine_Name.toLowerCase()),
            calculateEditDistance(searchTerm, a.Generic_Name.toLowerCase()),
            calculateEditDistance(searchTerm, a.Usage.toLowerCase())
        );
        const distB = Math.min(
            calculateEditDistance(searchTerm, b.Medicine_Name.toLowerCase()),
            calculateEditDistance(searchTerm, b.Generic_Name.toLowerCase()),
            calculateEditDistance(searchTerm, b.Usage.toLowerCase())
        );
        return distA - distB;
    });
}

// Calculate Levenshtein distance between two strings
function calculateEditDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    
    const matrix = [];
    
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i-1) === a.charAt(j-1)) {
                matrix[i][j] = matrix[i-1][j-1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i-1][j-1] + 1,
                    matrix[i][j-1] + 1,
                    matrix[i-1][j] + 1
                );
            }
        }
    }
    
    return matrix[b.length][a.length];
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    searchBtn.addEventListener('click', searchMedicine);
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchMedicine();
        } else if (searchInput.value.trim().length > 2) {
            const searchTerm = searchInput.value.trim().toLowerCase();
            const searchType = document.querySelector('input[name="searchType"]:checked').value;
            
            let matches = [];
            if (searchType === 'all') {
                matches = medicineData.filter(med => 
                    med.Medicine_Name.toLowerCase().includes(searchTerm) ||
                    med.Generic_Name.toLowerCase().includes(searchTerm) ||
                    med.Usage.toLowerCase().includes(searchTerm)
                );
            } else if (searchType === 'medicine') {
                matches = medicineData.filter(med => 
                    med.Medicine_Name.toLowerCase().includes(searchTerm)
                );
            } else if (searchType === 'generic') {
                matches = medicineData.filter(med => 
                    med.Generic_Name.toLowerCase().includes(searchTerm)
                );
            } else if (searchType === 'usage') {
                matches = medicineData.filter(med => 
                    med.Usage.toLowerCase().includes(searchTerm)
                );
            }
            
            if (matches.length > 0) {
                showSuggestions(matches);
            } else {
                suggestionsDiv.classList.add('d-none');
            }
        } else {
            suggestionsDiv.classList.add('d-none');
        }
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsDiv.contains(e.target)) {
            suggestionsDiv.classList.add('d-none');
        }
    });
    
    // Update suggestions when search type changes
    searchTypeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (searchInput.value.trim().length > 2) {
                const event = new KeyboardEvent('keyup');
                searchInput.dispatchEvent(event);
            }
        });
    });
});