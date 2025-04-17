// medicines.js - Complete medicine dataset
const medicineData = [
    {
        "Medicine_Name": "Dolo 650",
        "Generic_Name": "Paracetamol",
        "Dosage": "650mg",
        "Usage": "Fever and pain relief",
        "Side_Effects": "Nausea, skin rash",
        "Precautions": "Do not exceed 4000mg per day",
        "Category": "Analgesic"
    },
    {
        "Medicine_Name": "Crocin Advance",
        "Generic_Name": "Paracetamol",
        "Dosage": "500mg",
        "Usage": "Fever and pain relief",
        "Side_Effects": "Nausea, liver problems in overdose",
        "Precautions": "Do not exceed recommended dose",
        "Category": "Analgesic"
    },
    {
        "Medicine_Name": "Combiflam",
        "Generic_Name": "Ibuprofen + Paracetamol",
        "Dosage": "400mg + 325mg",
        "Usage": "Pain and inflammation",
        "Side_Effects": "Stomach upset, dizziness",
        "Precautions": "Take with food",
        "Category": "NSAID"
    },
    {
        "Medicine_Name": "Disprin",
        "Generic_Name": "Aspirin",
        "Dosage": "300mg",
        "Usage": "Pain and fever relief",
        "Side_Effects": "Stomach irritation",
        "Precautions": "Avoid in gastric problems",
        "Category": "NSAID"
    },
    {
        "Medicine_Name": "Meftal Forte",
        "Generic_Name": "Mefenamic Acid",
        "Dosage": "500mg",
        "Usage": "Pain and fever relief",
        "Side_Effects": "Stomach upset, dizziness",
        "Precautions": "Take with food",
        "Category": "NSAID"
    },
    {
        "Medicine_Name": "Voveran",
        "Generic_Name": "Diclofenac",
        "Dosage": "50mg",
        "Usage": "Pain and inflammation",
        "Side_Effects": "Stomach upset, headache",
        "Precautions": "Take with food",
        "Category": "NSAID"
    },
    {
        "Medicine_Name": "Augmentin 625",
        "Generic_Name": "Amoxicillin + Clavulanic Acid",
        "Dosage": "500mg + 125mg",
        "Usage": "Bacterial infections",
        "Side_Effects": "Diarrhea, nausea",
        "Precautions": "Complete full course",
        "Category": "Antibiotic"
    },
    {
        "Medicine_Name": "Azithral 500",
        "Generic_Name": "Azithromycin",
        "Dosage": "500mg",
        "Usage": "Bacterial infections",
        "Side_Effects": "Stomach upset, diarrhea",
        "Precautions": "Take on empty stomach",
        "Category": "Antibiotic"
    },
    {
        "Medicine_Name": "Cifran 500",
        "Generic_Name": "Ciprofloxacin",
        "Dosage": "500mg",
        "Usage": "Urinary tract infections",
        "Side_Effects": "Tendon problems, nausea",
        "Precautions": "Avoid in pregnancy",
        "Category": "Antibiotic"
    },
    {
        "Medicine_Name": "Monocef",
        "Generic_Name": "Cefpodoxime",
        "Dosage": "200mg",
        "Usage": "Bacterial infections",
        "Side_Effects": "Diarrhea, nausea",
        "Precautions": "Complete full course",
        "Category": "Antibiotic"
    },
    {
        "Medicine_Name": "Roxid",
        "Generic_Name": "Roxithromycin",
        "Dosage": "150mg",
        "Usage": "Bacterial infections",
        "Side_Effects": "Stomach upset, diarrhea",
        "Precautions": "Take with food",
        "Category": "Antibiotic"
    },
    {
        "Medicine_Name": "Glycomet 500",
        "Generic_Name": "Metformin",
        "Dosage": "500mg",
        "Usage": "Type 2 diabetes",
        "Side_Effects": "Nausea, diarrhea",
        "Precautions": "Take with meals",
        "Category": "Antidiabetic"
    },
    {
        "Medicine_Name": "Januvia",
        "Generic_Name": "Sitagliptin",
        "Dosage": "100mg",
        "Usage": "Type 2 diabetes",
        "Side_Effects": "Upper respiratory infection",
        "Precautions": "Monitor kidney function",
        "Category": "Antidiabetic"
    },
    {
        "Medicine_Name": "Gemer",
        "Generic_Name": "Glimepiride",
        "Dosage": "1mg",
        "Usage": "Type 2 diabetes",
        "Side_Effects": "Low blood sugar",
        "Precautions": "Take with breakfast",
        "Category": "Antidiabetic"
    },
    {
        "Medicine_Name": "Glizid",
        "Generic_Name": "Gliclazide",
        "Dosage": "80mg",
        "Usage": "Type 2 diabetes",
        "Side_Effects": "Low blood sugar",
        "Precautions": "Take with breakfast",
        "Category": "Antidiabetic"
    },
    {
        "Medicine_Name": "Telma 40",
        "Generic_Name": "Telmisartan",
        "Dosage": "40mg",
        "Usage": "High blood pressure",
        "Side_Effects": "Dizziness, back pain",
        "Precautions": "Regular BP monitoring",
        "Category": "Antihypertensive"
    },
    {
        "Medicine_Name": "Amlodac 5",
        "Generic_Name": "Amlodipine",
        "Dosage": "5mg",
        "Usage": "High blood pressure",
        "Side_Effects": "Swelling in ankles",
        "Precautions": "Take at same time daily",
        "Category": "Antihypertensive"
    },
    {
        "Medicine_Name": "Cardace",
        "Generic_Name": "Ramipril",
        "Dosage": "5mg",
        "Usage": "High blood pressure",
        "Side_Effects": "Cough, dizziness",
        "Precautions": "Regular BP monitoring",
        "Category": "Antihypertensive"
    },
    {
        "Medicine_Name": "Nebistar",
        "Generic_Name": "Nebivolol",
        "Dosage": "5mg",
        "Usage": "High blood pressure",
        "Side_Effects": "Fatigue, dizziness",
        "Precautions": "Do not stop abruptly",
        "Category": "Antihypertensive"
    },
    {
        "Medicine_Name": "Allegra 120",
        "Generic_Name": "Fexofenadine",
        "Dosage": "120mg",
        "Usage": "Allergies, hay fever",
        "Side_Effects": "Headache, drowsiness",
        "Precautions": "Avoid alcohol",
        "Category": "Antihistamine"
    },
    {
        "Medicine_Name": "Cetrizine",
        "Generic_Name": "Cetirizine",
        "Dosage": "10mg",
        "Usage": "Allergies",
        "Side_Effects": "Drowsiness",
        "Precautions": "Do not drive after taking",
        "Category": "Antihistamine"
    },
    {
        "Medicine_Name": "Levocet",
        "Generic_Name": "Levocetirizine",
        "Dosage": "5mg",
        "Usage": "Allergies",
        "Side_Effects": "Drowsiness",
        "Precautions": "Do not drive after taking",
        "Category": "Antihistamine"
    },
    {
        "Medicine_Name": "Pantop 40",
        "Generic_Name": "Pantoprazole",
        "Dosage": "40mg",
        "Usage": "Acid reflux, ulcers",
        "Side_Effects": "Headache, diarrhea",
        "Precautions": "Take before meals",
        "Category": "PPI"
    },
    {
        "Medicine_Name": "Rantac 150",
        "Generic_Name": "Ranitidine",
        "Dosage": "150mg",
        "Usage": "Acid reflux",
        "Side_Effects": "Headache, constipation",
        "Precautions": "Take before meals",
        "Category": "H2 Blocker"
    },
    {
        "Medicine_Name": "Omez",
        "Generic_Name": "Omeprazole",
        "Dosage": "20mg",
        "Usage": "Acid reflux, ulcers",
        "Side_Effects": "Headache, diarrhea",
        "Precautions": "Take before meals",
        "Category": "PPI"
    },
    {
        "Medicine_Name": "Atorva 10",
        "Generic_Name": "Atorvastatin",
        "Dosage": "10mg",
        "Usage": "High cholesterol",
        "Side_Effects": "Muscle pain",
        "Precautions": "Avoid grapefruit",
        "Category": "Statin"
    },
    {
        "Medicine_Name": "Rosuvas 10",
        "Generic_Name": "Rosuvastatin",
        "Dosage": "10mg",
        "Usage": "High cholesterol",
        "Side_Effects": "Muscle weakness",
        "Precautions": "Regular liver monitoring",
        "Category": "Statin"
    },
    {
        "Medicine_Name": "Storvas",
        "Generic_Name": "Atorvastatin",
        "Dosage": "10mg",
        "Usage": "High cholesterol",
        "Side_Effects": "Muscle pain",
        "Precautions": "Avoid grapefruit",
        "Category": "Statin"
    },
    {
        "Medicine_Name": "Flunil 20",
        "Generic_Name": "Fluoxetine",
        "Dosage": "20mg",
        "Usage": "Depression, anxiety",
        "Side_Effects": "Nausea, insomnia",
        "Precautions": "Do not stop abruptly",
        "Category": "Antidepressant"
    },
    {
        "Medicine_Name": "Nexito 10",
        "Generic_Name": "Escitalopram",
        "Dosage": "10mg",
        "Usage": "Depression, anxiety",
        "Side_Effects": "Drowsiness, dry mouth",
        "Precautions": "Avoid alcohol",
        "Category": "Antidepressant"
    },
    {
        "Medicine_Name": "Sertral",
        "Generic_Name": "Sertraline",
        "Dosage": "50mg",
        "Usage": "Depression, anxiety",
        "Side_Effects": "Nausea, insomnia",
        "Precautions": "Do not stop abruptly",
        "Category": "Antidepressant"
    },
    {
        "Medicine_Name": "Shelcal 500",
        "Generic_Name": "Calcium + Vitamin D3",
        "Dosage": "500mg + 250IU",
        "Usage": "Calcium deficiency",
        "Side_Effects": "Constipation",
        "Precautions": "Take after meals",
        "Category": "Supplement"
    },
    {
        "Medicine_Name": "Zincovit",
        "Generic_Name": "Multivitamin + Minerals",
        "Dosage": "1 tablet",
        "Usage": "Vitamin deficiency",
        "Side_Effects": "Mild nausea",
        "Precautions": "Take with meals",
        "Category": "Supplement"
    },
    {
        "Medicine_Name": "Becosules",
        "Generic_Name": "Vitamin B Complex",
        "Dosage": "1 capsule",
        "Usage": "Vitamin B deficiency",
        "Side_Effects": "Mild nausea",
        "Precautions": "Take with meals",
        "Category": "Supplement"
    },
    {
        "Medicine_Name": "Asthalin",
        "Generic_Name": "Salbutamol",
        "Dosage": "4mg",
        "Usage": "Asthma, bronchitis",
        "Side_Effects": "Tremors, palpitations",
        "Precautions": "Do not exceed dose",
        "Category": "Bronchodilator"
    },
    {
        "Medicine_Name": "Montair LC",
        "Generic_Name": "Montelukast + Levocetirizine",
        "Dosage": "10mg + 5mg",
        "Usage": "Allergic asthma",
        "Side_Effects": "Drowsiness",
        "Precautions": "Take at bedtime",
        "Category": "Antiasthmatic"
    },
    {
        "Medicine_Name": "Deriphyllin",
        "Generic_Name": "Etofylline + Theophylline",
        "Dosage": "100mg + 200mg",
        "Usage": "Asthma, bronchitis",
        "Side_Effects": "Nausea, palpitations",
        "Precautions": "Take with food",
        "Category": "Bronchodilator"
    },
    {
        "Medicine_Name": "Restyl 0.25",
        "Generic_Name": "Alprazolam",
        "Dosage": "0.25mg",
        "Usage": "Anxiety, panic disorders",
        "Side_Effects": "Drowsiness, dependence",
        "Precautions": "Do not stop abruptly",
        "Category": "Anxiolytic"
    },
    {
        "Medicine_Name": "Ativan 1",
        "Generic_Name": "Lorazepam",
        "Dosage": "1mg",
        "Usage": "Anxiety",
        "Side_Effects": "Sedation, weakness",
        "Precautions": "Avoid alcohol",
        "Category": "Anxiolytic"
    },
    {
        "Medicine_Name": "Etizola",
        "Generic_Name": "Etizolam",
        "Dosage": "0.5mg",
        "Usage": "Anxiety, insomnia",
        "Side_Effects": "Drowsiness, dependence",
        "Precautions": "Do not stop abruptly",
        "Category": "Anxiolytic"
    },
    {
        "Medicine_Name": "Flucos 150",
        "Generic_Name": "Fluconazole",
        "Dosage": "150mg",
        "Usage": "Fungal infections",
        "Side_Effects": "Nausea, headache",
        "Precautions": "Complete prescribed course",
        "Category": "Antifungal"
    },
    {
        "Medicine_Name": "Candid-B",
        "Generic_Name": "Clotrimazole + Beclomethasone",
        "Dosage": "1% + 0.025%",
        "Usage": "Skin fungal infections",
        "Side_Effects": "Local irritation",
        "Precautions": "External use only",
        "Category": "Antifungal"
    },
    {
        "Medicine_Name": "Candiforce",
        "Generic_Name": "Fluconazole",
        "Dosage": "150mg",
        "Usage": "Fungal infections",
        "Side_Effects": "Nausea, headache",
        "Precautions": "Complete prescribed course",
        "Category": "Antifungal"
    },
    {
        "Medicine_Name": "Valcivir 500",
        "Generic_Name": "Valacyclovir",
        "Dosage": "500mg",
        "Usage": "Herpes infections",
        "Side_Effects": "Headache, nausea",
        "Precautions": "Maintain hydration",
        "Category": "Antiviral"
    },
    {
        "Medicine_Name": "Acivir 800",
        "Generic_Name": "Acyclovir",
        "Dosage": "800mg",
        "Usage": "Viral infections",
        "Side_Effects": "Dizziness, fatigue",
        "Precautions": "Complete full course",
        "Category": "Antiviral"
    },
    {
        "Medicine_Name": "Hepcvir",
        "Generic_Name": "Sofosbuvir",
        "Dosage": "400mg",
        "Usage": "Hepatitis C",
        "Side_Effects": "Fatigue, headache",
        "Precautions": "Take with food",
        "Category": "Antiviral"
    },
    {
        "Medicine_Name": "Flexon MR",
        "Generic_Name": "Chlorzoxazone + Diclofenac + Paracetamol",
        "Dosage": "500mg + 50mg + 325mg",
        "Usage": "Muscle spasm",
        "Side_Effects": "Drowsiness",
        "Precautions": "Do not drive",
        "Category": "Muscle Relaxant"
    },
    {
        "Medicine_Name": "Myospaz Forte",
        "Generic_Name": "Chlorzoxazone + Diclofenac + Paracetamol",
        "Dosage": "500mg + 50mg + 325mg",
        "Usage": "Muscle pain",
        "Side_Effects": "Stomach upset",
        "Precautions": "Take with food",
        "Category": "Muscle Relaxant"
    },
    {
        "Medicine_Name": "Tolperis",
        "Generic_Name": "Tolperisone",
        "Dosage": "150mg",
        "Usage": "Muscle spasm",
        "Side_Effects": "Drowsiness, weakness",
        "Precautions": "Do not drive",
        "Category": "Muscle Relaxant"
    },
    {
        "Medicine_Name": "Thyronorm",
        "Generic_Name": "Levothyroxine",
        "Dosage": "50mcg",
        "Usage": "Hypothyroidism",
        "Side_Effects": "Palpitations, weight loss",
        "Precautions": "Take empty stomach",
        "Category": "Thyroid"
    },
    {
        "Medicine_Name": "Eltroxin",
        "Generic_Name": "Levothyroxine",
        "Dosage": "50mcg",
        "Usage": "Hypothyroidism",
        "Side_Effects": "Palpitations, weight loss",
        "Precautions": "Take empty stomach",
        "Category": "Thyroid"
    },
    {
        "Medicine_Name": "Emanzen",
        "Generic_Name": "Domperidone",
        "Dosage": "10mg",
        "Usage": "Nausea, vomiting",
        "Side_Effects": "Headache, dry mouth",
        "Precautions": "Take before meals",
        "Category": "Antiemetic"
    },
    {
        "Medicine_Name": "Perinorm",
        "Generic_Name": "Metoclopramide",
        "Dosage": "10mg",
        "Usage": "Nausea, vomiting",
        "Side_Effects": "Drowsiness, restlessness",
        "Precautions": "Do not drive",
        "Category": "Antiemetic"
    },
    {
        "Medicine_Name": "Risperdal",
        "Generic_Name": "Risperidone",
        "Dosage": "2mg",
        "Usage": "Schizophrenia, bipolar disorder",
        "Side_Effects": "Drowsiness, weight gain",
        "Precautions": "Do not stop abruptly",
        "Category": "Antipsychotic"
    },
    {
        "Medicine_Name": "Olanzap",
        "Generic_Name": "Olanzapine",
        "Dosage": "5mg",
        "Usage": "Schizophrenia, bipolar disorder",
        "Side_Effects": "Drowsiness, weight gain",
        "Precautions": "Do not stop abruptly",
        "Category": "Antipsychotic"
    },
    {
        "Medicine_Name": "Lasix",
        "Generic_Name": "Furosemide",
        "Dosage": "40mg",
        "Usage": "Edema, hypertension",
        "Side_Effects": "Low potassium, dehydration",
        "Precautions": "Monitor electrolytes",
        "Category": "Diuretic"
    },
    {
        "Medicine_Name": "Dytor",
        "Generic_Name": "Torasemide",
        "Dosage": "10mg",
        "Usage": "Edema, hypertension",
        "Side_Effects": "Low potassium, dehydration",
        "Precautions": "Monitor electrolytes",
        "Category": "Diuretic"
    },
    {
        "Medicine_Name": "Ecosprin",
        "Generic_Name": "Aspirin",
        "Dosage": "75mg",
        "Usage": "Blood thinner",
        "Side_Effects": "Bleeding, stomach upset",
        "Precautions": "Take with food",
        "Category": "Anticoagulant"
    },
    {
        "Medicine_Name": "Clopilet",
        "Generic_Name": "Clopidogrel",
        "Dosage": "75mg",
        "Usage": "Blood thinner",
        "Side_Effects": "Bleeding, bruising",
        "Precautions": "Monitor for bleeding",
        "Category": "Anticoagulant"
    },
    {
        "Medicine_Name": "Sumo",
        "Generic_Name": "Nimesulide",
        "Dosage": "100mg",
        "Usage": "Pain and fever relief",
        "Side_Effects": "Stomach upset, liver problems",
        "Precautions": "Take with food, avoid alcohol",
        "Category": "NSAID"
    },
    {
        "Medicine_Name": "Dart",
        "Generic_Name": "Diclofenac",
        "Dosage": "50mg",
        "Usage": "Pain and inflammation",
        "Side_Effects": "Stomach upset, headache",
        "Precautions": "Take with food",
        "Category": "NSAID"
    },
    {
        "Medicine_Name": "Nise",
        "Generic_Name": "Nimesulide",
        "Dosage": "100mg",
        "Usage": "Pain and fever relief",
        "Side_Effects": "Stomach upset, liver problems",
        "Precautions": "Take with food, avoid alcohol",
        "Category": "NSAID"
    },
    {
        "Medicine_Name": "Ponstan",
        "Generic_Name": "Mefenamic Acid",
        "Dosage": "500mg",
        "Usage": "Pain and fever relief",
        "Side_Effects": "Stomach upset, dizziness",
        "Precautions": "Take with food",
        "Category": "NSAID"
    },
    {
        "Medicine_Name": "Monocef O",
        "Generic_Name": "Cefpodoxime",
        "Dosage": "200mg",
        "Usage": "Bacterial infections",
        "Side_Effects": "Diarrhea, nausea",
        "Precautions": "Complete full course",
        "Category": "Antibiotic"
    },
    {
        "Medicine_Name": "Taxim O",
        "Generic_Name": "Cefixime",
        "Dosage": "200mg",
        "Usage": "Bacterial infections",
        "Side_Effects": "Diarrhea, nausea",
        "Precautions": "Complete full course",
        "Category": "Antibiotic"
    },
    {
        "Medicine_Name": "Mox",
        "Generic_Name": "Amoxicillin",
        "Dosage": "500mg",
        "Usage": "Bacterial infections",
        "Side_Effects": "Diarrhea, nausea",
        "Precautions": "Complete full course",
        "Category": "Antibiotic"
    },
    {
        "Medicine_Name": "Ciplox",
        "Generic_Name": "Ciprofloxacin",
        "Dosage": "500mg",
        "Usage": "Bacterial infections",
        "Side_Effects": "Tendon problems, nausea",
        "Precautions": "Avoid in pregnancy",
        "Category": "Antibiotic"
    },
    {
        "Medicine_Name": "Glimestar",
        "Generic_Name": "Glimepiride",
        "Dosage": "1mg",
        "Usage": "Type 2 diabetes",
        "Side_Effects": "Low blood sugar",
        "Precautions": "Take with breakfast",
        "Category": "Antidiabetic"
    },
    {
        "Medicine_Name": "Diamicron",
        "Generic_Name": "Gliclazide",
        "Dosage": "80mg",
        "Usage": "Type 2 diabetes",
        "Side_Effects": "Low blood sugar",
        "Precautions": "Take with breakfast",
        "Category": "Antidiabetic"
    },
    {
        "Medicine_Name": "Galvus",
        "Generic_Name": "Vildagliptin",
        "Dosage": "50mg",
        "Usage": "Type 2 diabetes",
        "Side_Effects": "Upper respiratory infection",
        "Precautions": "Monitor kidney function",
        "Category": "Antidiabetic"
    },
    {
        "Medicine_Name": "Losar",
        "Generic_Name": "Losartan",
        "Dosage": "50mg",
        "Usage": "High blood pressure",
        "Side_Effects": "Dizziness, back pain",
        "Precautions": "Regular BP monitoring",
        "Category": "Antihypertensive"
    },
    {
        "Medicine_Name": "Zestril",
        "Generic_Name": "Lisinopril",
        "Dosage": "5mg",
        "Usage": "High blood pressure",
        "Side_Effects": "Cough, dizziness",
        "Precautions": "Regular BP monitoring",
        "Category": "Antihypertensive"
    },
    {
        "Medicine_Name": "Concor",
        "Generic_Name": "Bisoprolol",
        "Dosage": "5mg",
        "Usage": "High blood pressure",
        "Side_Effects": "Fatigue, dizziness",
        "Precautions": "Do not stop abruptly",
        "Category": "Antihypertensive"
    },
    {
        "Medicine_Name": "Avil",
        "Generic_Name": "Pheniramine",
        "Dosage": "25mg",
        "Usage": "Allergies",
        "Side_Effects": "Drowsiness",
        "Precautions": "Do not drive after taking",
        "Category": "Antihistamine"
    },
    {
        "Medicine_Name": "Benadryl",
        "Generic_Name": "Diphenhydramine",
        "Dosage": "25mg",
        "Usage": "Allergies",
        "Side_Effects": "Drowsiness",
        "Precautions": "Do not drive after taking",
        "Category": "Antihistamine"
    },
    {
        "Medicine_Name": "Nexpro",
        "Generic_Name": "Esomeprazole",
        "Dosage": "40mg",
        "Usage": "Acid reflux, ulcers",
        "Side_Effects": "Headache, diarrhea",
        "Precautions": "Take before meals",
        "Category": "PPI"
    },
    {
        "Medicine_Name": "Rablet",
        "Generic_Name": "Rabeprazole",
        "Dosage": "20mg",
        "Usage": "Acid reflux, ulcers",
        "Side_Effects": "Headache, diarrhea",
        "Precautions": "Take before meals",
        "Category": "PPI"
    },
    {
        "Medicine_Name": "Lipicure",
        "Generic_Name": "Atorvastatin",
        "Dosage": "10mg",
        "Usage": "High cholesterol",
        "Side_Effects": "Muscle pain",
        "Precautions": "Avoid grapefruit",
        "Category": "Statin"
    },
    {
        "Medicine_Name": "Rosuvas",
        "Generic_Name": "Rosuvastatin",
        "Dosage": "10mg",
        "Usage": "High cholesterol",
        "Side_Effects": "Muscle weakness",
        "Precautions": "Regular liver monitoring",
        "Category": "Statin"
    },
    {
        "Medicine_Name": "Prodep",
        "Generic_Name": "Fluoxetine",
        "Dosage": "20mg",
        "Usage": "Depression, anxiety",
        "Side_Effects": "Nausea, insomnia",
        "Precautions": "Do not stop abruptly",
        "Category": "Antidepressant"
    },
    {
        "Medicine_Name": "Depsonil",
        "Generic_Name": "Sertraline",
        "Dosage": "50mg",
        "Usage": "Depression, anxiety",
        "Side_Effects": "Nausea, insomnia",
        "Precautions": "Do not stop abruptly",
        "Category": "Antidepressant"
    },
    {
        "Medicine_Name": "Revital",
        "Generic_Name": "Multivitamin + Minerals",
        "Dosage": "1 tablet",
        "Usage": "Vitamin deficiency",
        "Side_Effects": "Mild nausea",
        "Precautions": "Take with meals",
        "Category": "Supplement"
    },
    {
        "Medicine_Name": "Supradyn",
        "Generic_Name": "Multivitamin + Minerals",
        "Dosage": "1 tablet",
        "Usage": "Vitamin deficiency",
        "Side_Effects": "Mild nausea",
        "Precautions": "Take with meals",
        "Category": "Supplement"
    },
    {
        "Medicine_Name": "Duolin",
        "Generic_Name": "Ipratropium + Levosalbutamol",
        "Dosage": "20mcg + 50mcg",
        "Usage": "Asthma, COPD",
        "Side_Effects": "Tremors, palpitations",
        "Precautions": "Do not exceed dose",
        "Category": "Bronchodilator"
    },
    {
        "Medicine_Name": "Foracort",
        "Generic_Name": "Formoterol + Budesonide",
        "Dosage": "6mcg + 200mcg",
        "Usage": "Asthma, COPD",
        "Side_Effects": "Tremors, palpitations",
        "Precautions": "Do not exceed dose",
        "Category": "Bronchodilator"
    },
    {
        "Medicine_Name": "Paxidep",
        "Generic_Name": "Paroxetine",
        "Dosage": "12.5mg",
        "Usage": "Anxiety, depression",
        "Side_Effects": "Drowsiness, dependence",
        "Precautions": "Do not stop abruptly",
        "Category": "Anxiolytic"
    },
    {
        "Medicine_Name": "Anxit",
        "Generic_Name": "Alprazolam",
        "Dosage": "0.25mg",
        "Usage": "Anxiety, panic disorders",
        "Side_Effects": "Drowsiness, dependence",
        "Precautions": "Do not stop abruptly",
        "Category": "Anxiolytic"
    },
    {
        "Medicine_Name": "Candiforce",
        "Generic_Name": "Fluconazole",
        "Dosage": "150mg",
        "Usage": "Fungal infections",
        "Side_Effects": "Nausea, headache",
        "Precautions": "Complete prescribed course",
        "Category": "Antifungal"
    },
    {
        "Medicine_Name": "Fungisome",
        "Generic_Name": "Amphotericin B",
        "Dosage": "50mg",
        "Usage": "Severe fungal infections",
        "Side_Effects": "Fever, chills",
        "Precautions": "Hospital administration only",
        "Category": "Antifungal"
    },
    {
        "Medicine_Name": "Valcivir",
        "Generic_Name": "Valacyclovir",
        "Dosage": "500mg",
        "Usage": "Herpes infections",
        "Side_Effects": "Headache, nausea",
        "Precautions": "Maintain hydration",
        "Category": "Antiviral"
    },
    {
        "Medicine_Name": "Acivir",
        "Generic_Name": "Acyclovir",
        "Dosage": "800mg",
        "Usage": "Viral infections",
        "Side_Effects": "Dizziness, fatigue",
        "Precautions": "Complete full course",
        "Category": "Antiviral"
    },
    {
        "Medicine_Name": "Myospaz",
        "Generic_Name": "Chlorzoxazone",
        "Dosage": "500mg",
        "Usage": "Muscle spasm",
        "Side_Effects": "Drowsiness",
        "Precautions": "Do not drive",
        "Category": "Muscle Relaxant"
    },
    {
        "Medicine_Name": "Thyronorm",
        "Generic_Name": "Levothyroxine",
        "Dosage": "50mcg",
        "Usage": "Hypothyroidism",
        "Side_Effects": "Palpitations, weight loss",
        "Precautions": "Take empty stomach",
        "Category": "Thyroid"
    },
    {
        "Medicine_Name": "Eltroxin",
        "Generic_Name": "Levothyroxine",
        "Dosage": "50mcg",
        "Usage": "Hypothyroidism",
        "Side_Effects": "Palpitations, weight loss",
        "Precautions": "Take empty stomach",
        "Category": "Thyroid"
    },
    {
        "Medicine_Name": "Ondem",
        "Generic_Name": "Ondansetron",
        "Dosage": "4mg",
        "Usage": "Nausea, vomiting",
        "Side_Effects": "Headache, constipation",
        "Precautions": "Take before chemotherapy",
        "Category": "Antiemetic"
    },
    {
        "Medicine_Name": "Emeset",
        "Generic_Name": "Ondansetron",
        "Dosage": "4mg",
        "Usage": "Nausea, vomiting",
        "Side_Effects": "Headache, constipation",
        "Precautions": "Take before chemotherapy",
        "Category": "Antiemetic"
    },
    {
        "Medicine_Name": "Risperdal",
        "Generic_Name": "Risperidone",
        "Dosage": "2mg",
        "Usage": "Schizophrenia, bipolar disorder",
        "Side_Effects": "Drowsiness, weight gain",
        "Precautions": "Do not stop abruptly",
        "Category": "Antipsychotic"
    },
    {
        "Medicine_Name": "Olanzap",
        "Generic_Name": "Olanzapine",
        "Dosage": "5mg",
        "Usage": "Schizophrenia, bipolar disorder",
        "Side_Effects": "Drowsiness, weight gain",
        "Precautions": "Do not stop abruptly",
        "Category": "Antipsychotic"
    },
    {
        "Medicine_Name": "Lasix",
        "Generic_Name": "Furosemide",
        "Dosage": "40mg",
        "Usage": "Edema, hypertension",
        "Side_Effects": "Low potassium, dehydration",
        "Precautions": "Monitor electrolytes",
        "Category": "Diuretic"
    },
    {
        "Medicine_Name": "Dytor",
        "Generic_Name": "Torasemide",
        "Dosage": "10mg",
        "Usage": "Edema, hypertension",
        "Side_Effects": "Low potassium, dehydration",
        "Precautions": "Monitor electrolytes",
        "Category": "Diuretic"
    },
    {
        "Medicine_Name": "Ecosprin",
        "Generic_Name": "Aspirin",
        "Dosage": "75mg",
        "Usage": "Blood thinner",
        "Side_Effects": "Bleeding, stomach upset",
        "Precautions": "Take with food",
        "Category": "Anticoagulant"
    },
    {
        "Medicine_Name": "Clopilet",
        "Generic_Name": "Clopidogrel",
        "Dosage": "75mg",
        "Usage": "Blood thinner",
        "Side_Effects": "Bleeding, bruising",
        "Precautions": "Monitor for bleeding",
        "Category": "Anticoagulant"
    },
    {
        "Medicine_Name": "Eptoin",
        "Generic_Name": "Phenytoin",
        "Dosage": "100mg",
        "Usage": "Epilepsy",
        "Side_Effects": "Drowsiness, gum swelling",
        "Precautions": "Regular blood tests needed",
        "Category": "Antiepileptic"
    },
    {
        "Medicine_Name": "Tegrital",
        "Generic_Name": "Carbamazepine",
        "Dosage": "200mg",
        "Usage": "Epilepsy, nerve pain",
        "Side_Effects": "Drowsiness, dizziness",
        "Precautions": "Regular blood tests needed",
        "Category": "Antiepileptic"
    },
    {
        "Medicine_Name": "Lariago",
        "Generic_Name": "Chloroquine",
        "Dosage": "250mg",
        "Usage": "Malaria",
        "Side_Effects": "Nausea, headache",
        "Precautions": "Take with food",
        "Category": "Antimalarial"
    },
    {
        "Medicine_Name": "Falcigo",
        "Generic_Name": "Artemether + Lumefantrine",
        "Dosage": "80mg + 480mg",
        "Usage": "Malaria",
        "Side_Effects": "Nausea, headache",
        "Precautions": "Take with fatty food",
        "Category": "Antimalarial"
    },
    {
        "Medicine_Name": "Rifampicin",
        "Generic_Name": "Rifampin",
        "Dosage": "450mg",
        "Usage": "Tuberculosis",
        "Side_Effects": "Liver problems, orange urine",
        "Precautions": "Take empty stomach",
        "Category": "Antitubercular"
    },
    {
        "Medicine_Name": "Isoniazid",
        "Generic_Name": "Isoniazid",
        "Dosage": "300mg",
        "Usage": "Tuberculosis",
        "Side_Effects": "Liver problems, numbness",
        "Precautions": "Take with food",
        "Category": "Antitubercular"
    },
    {
        "Medicine_Name": "Parcopa",
        "Generic_Name": "Levodopa + Carbidopa",
        "Dosage": "100mg + 25mg",
        "Usage": "Parkinson's disease",
        "Side_Effects": "Nausea, dizziness",
        "Precautions": "Take with food",
        "Category": "Antiparkinsonian"
    },
    {
        "Medicine_Name": "Pramipex",
        "Generic_Name": "Pramipexole",
        "Dosage": "0.25mg",
        "Usage": "Parkinson's disease",
        "Side_Effects": "Nausea, dizziness",
        "Precautions": "Take with food",
        "Category": "Antiparkinsonian"
    },
    {
        "Medicine_Name": "Zyloric",
        "Generic_Name": "Allopurinol",
        "Dosage": "100mg",
        "Usage": "Gout",
        "Side_Effects": "Rash, stomach upset",
        "Precautions": "Take with meals",
        "Category": "Antigout"
    },
    {
        "Medicine_Name": "Feburic",
        "Generic_Name": "Febuxostat",
        "Dosage": "40mg",
        "Usage": "Gout",
        "Side_Effects": "Liver problems, rash",
        "Precautions": "Take with meals",
        "Category": "Antigout"
    },
    {
        "Medicine_Name": "Drotin",
        "Generic_Name": "Drotaverine",
        "Dosage": "80mg",
        "Usage": "Abdominal cramps",
        "Side_Effects": "Dizziness, nausea",
        "Precautions": "Take with food",
        "Category": "Antispasmodic"
    },
    {
        "Medicine_Name": "Colimex",
        "Generic_Name": "Dicyclomine",
        "Dosage": "10mg",
        "Usage": "Irritable bowel syndrome",
        "Side_Effects": "Dry mouth, dizziness",
        "Precautions": "Take with food",
        "Category": "Antispasmodic"
    },
    {
        "Medicine_Name": "Migranil",
        "Generic_Name": "Sumatriptan",
        "Dosage": "50mg",
        "Usage": "Migraine",
        "Side_Effects": "Chest tightness, dizziness",
        "Precautions": "Take at first sign of migraine",
        "Category": "Antimigraine"
    },
    {
        "Medicine_Name": "Migranex",
        "Generic_Name": "Rizatriptan",
        "Dosage": "10mg",
        "Usage": "Migraine",
        "Side_Effects": "Dizziness, fatigue",
        "Precautions": "Take at first sign of migraine",
        "Category": "Antimigraine"
    },
    {
        "Medicine_Name": "Flagyl",
        "Generic_Name": "Metronidazole",
        "Dosage": "400mg",
        "Usage": "Protozoal infections",
        "Side_Effects": "Nausea, metallic taste",
        "Precautions": "Avoid alcohol",
        "Category": "Antiprotozoal"
    },
    {
        "Medicine_Name": "Tiniba",
        "Generic_Name": "Tinidazole",
        "Dosage": "500mg",
        "Usage": "Protozoal infections",
        "Side_Effects": "Nausea, metallic taste",
        "Precautions": "Avoid alcohol",
        "Category": "Antiprotozoal"
    },
    {
        "Medicine_Name": "Zentel",
        "Generic_Name": "Albendazole",
        "Dosage": "400mg",
        "Usage": "Worm infections",
        "Side_Effects": "Nausea, dizziness",
        "Precautions": "Take with food",
        "Category": "Anthelmintic"
    },
    {
        "Medicine_Name": "Mebex",
        "Generic_Name": "Mebendazole",
        "Dosage": "100mg",
        "Usage": "Worm infections",
        "Side_Effects": "Nausea, dizziness",
        "Precautions": "Take with food",
        "Category": "Anthelmintic"
    },
    {
        "Medicine_Name": "Lamprene",
        "Generic_Name": "Clofazimine",
        "Dosage": "100mg",
        "Usage": "Leprosy",
        "Side_Effects": "Skin discoloration",
        "Precautions": "Take with food",
        "Category": "Antileprotic"
    },
    {
        "Medicine_Name": "Dapsone",
        "Generic_Name": "Dapsone",
        "Dosage": "100mg",
        "Usage": "Leprosy",
        "Side_Effects": "Anemia, rash",
        "Precautions": "Regular blood tests needed",
        "Category": "Antileprotic"
    },
    {
        "Medicine_Name": "Efavirenz",
        "Generic_Name": "Efavirenz",
        "Dosage": "600mg",
        "Usage": "HIV infection",
        "Side_Effects": "Dizziness, rash",
        "Precautions": "Take at bedtime",
        "Category": "Antiretroviral"
    },
    {
        "Medicine_Name": "Lamivudine",
        "Generic_Name": "Lamivudine",
        "Dosage": "300mg",
        "Usage": "HIV infection",
        "Side_Effects": "Nausea, headache",
        "Precautions": "Take with food",
        "Category": "Antiretroviral"
    },
    {
        "Medicine_Name": "Methotrexate",
        "Generic_Name": "Methotrexate",
        "Dosage": "2.5mg",
        "Usage": "Cancer, autoimmune diseases",
        "Side_Effects": "Low blood counts, liver problems",
        "Precautions": "Regular blood tests needed",
        "Category": "Antineoplastic"
    },
    {
        "Medicine_Name": "Cyclophosphamide",
        "Generic_Name": "Cyclophosphamide",
        "Dosage": "50mg",
        "Usage": "Cancer, autoimmune diseases",
        "Side_Effects": "Low blood counts, hair loss",
        "Precautions": "Regular blood tests needed",
        "Category": "Antineoplastic"
    },
    {
        "Medicine_Name": "Azoran",
        "Generic_Name": "Azathioprine",
        "Dosage": "50mg",
        "Usage": "Organ transplant, autoimmune diseases",
        "Side_Effects": "Low blood counts, infections",
        "Precautions": "Regular blood tests needed",
        "Category": "Immunosuppressant"
    },
    {
        "Medicine_Name": "Cyclosporine",
        "Generic_Name": "Cyclosporine",
        "Dosage": "100mg",
        "Usage": "Organ transplant, autoimmune diseases",
        "Side_Effects": "High blood pressure, kidney problems",
        "Precautions": "Regular blood tests needed",
        "Category": "Immunosuppressant"
    },
    {
        "Medicine_Name": "Sulfasalazine",
        "Generic_Name": "Sulfasalazine",
        "Dosage": "500mg",
        "Usage": "Rheumatoid arthritis",
        "Side_Effects": "Nausea, headache",
        "Precautions": "Take with food",
        "Category": "Antirheumatic"
    },
    {
        "Medicine_Name": "Hydroxychloroquine",
        "Generic_Name": "Hydroxychloroquine",
        "Dosage": "200mg",
        "Usage": "Rheumatoid arthritis",
        "Side_Effects": "Eye problems, stomach upset",
        "Precautions": "Regular eye checkups needed",
        "Category": "Antirheumatic"
    },
    {
        "Medicine_Name": "Ondem",
        "Generic_Name": "Ondansetron",
        "Dosage": "4mg",
        "Usage": "Nausea, vomiting",
        "Side_Effects": "Headache, constipation",
        "Precautions": "Take before chemotherapy",
        "Category": "Antiemetic"
    },
    {
        "Medicine_Name": "Emeset",
        "Generic_Name": "Ondansetron",
        "Dosage": "4mg",
        "Usage": "Nausea, vomiting",
        "Side_Effects": "Headache, constipation",
        "Precautions": "Take before chemotherapy",
        "Category": "Antiemetic"
    },
    {
        "Medicine_Name": "Gelusil",
        "Generic_Name": "Aluminium Hydroxide + Magnesium Hydroxide",
        "Dosage": "400mg + 400mg",
        "Usage": "Acid reflux",
        "Side_Effects": "Constipation, diarrhea",
        "Precautions": "Take after meals",
        "Category": "Antacid"
    },
    {
        "Medicine_Name": "Digene",
        "Generic_Name": "Aluminium Hydroxide + Magnesium Hydroxide",
        "Dosage": "400mg + 400mg",
        "Usage": "Acid reflux",
        "Side_Effects": "Constipation, diarrhea",
        "Precautions": "Take after meals",
        "Category": "Antacid"
    },
    {
        "Medicine_Name": "Duphalac",
        "Generic_Name": "Lactulose",
        "Dosage": "10ml",
        "Usage": "Constipation",
        "Side_Effects": "Bloating, cramps",
        "Precautions": "Take with plenty of water",
        "Category": "Laxative"
    },
    {
        "Medicine_Name": "Cremaffin",
        "Generic_Name": "Liquid Paraffin + Milk of Magnesia",
        "Dosage": "5ml + 5ml",
        "Usage": "Constipation",
        "Side_Effects": "Diarrhea, cramps",
        "Precautions": "Take with plenty of water",
        "Category": "Laxative"
    },
    {
        "Medicine_Name": "Lomotil",
        "Generic_Name": "Diphenoxylate + Atropine",
        "Dosage": "2.5mg + 0.025mg",
        "Usage": "Diarrhea",
        "Side_Effects": "Drowsiness, dry mouth",
        "Precautions": "Do not exceed dose",
        "Category": "Antidiarrheal"
    },
    {
        "Medicine_Name": "Imodium",
        "Generic_Name": "Loperamide",
        "Dosage": "2mg",
        "Usage": "Diarrhea",
        "Side_Effects": "Constipation, dizziness",
        "Precautions": "Do not exceed dose",
        "Category": "Antidiarrheal"
    },
    {
        "Medicine_Name": "Gas-O-Fast",
        "Generic_Name": "Simethicone",
        "Dosage": "40mg",
        "Usage": "Gas, bloating",
        "Side_Effects": "None reported",
        "Precautions": "Take after meals",
        "Category": "Antiflatulent"
    },
    {
        "Medicine_Name": "Disflatyl",
        "Generic_Name": "Simethicone",
        "Dosage": "40mg",
        "Usage": "Gas, bloating",
        "Side_Effects": "None reported",
        "Precautions": "Take after meals",
        "Category": "Antiflatulent"
    },
    {
        "Medicine_Name": "Vomikind",
        "Generic_Name": "Ondansetron",
        "Dosage": "4mg",
        "Usage": "Nausea, vomiting",
        "Side_Effects": "Headache, constipation",
        "Precautions": "Take before chemotherapy",
        "Category": "Antiemetic"
    },
    {
        "Medicine_Name": "Emeset",
        "Generic_Name": "Ondansetron",
        "Dosage": "4mg",
        "Usage": "Nausea, vomiting",
        "Side_Effects": "Headache, constipation",
        "Precautions": "Take before chemotherapy",
        "Category": "Antiemetic"
    },
    {
        "Medicine_Name": "Gelusil",
        "Generic_Name": "Aluminium Hydroxide + Magnesium Hydroxide",
        "Dosage": "400mg + 400mg",
        "Usage": "Acid reflux",
        "Side_Effects": "Constipation, diarrhea",
        "Precautions": "Take after meals",
        "Category": "Antacid"
    },
    {
        "Medicine_Name": "Digene",
        "Generic_Name": "Aluminium Hydroxide + Magnesium Hydroxide",
        "Dosage": "400mg + 400mg",
        "Usage": "Acid reflux",
        "Side_Effects": "Constipation, diarrhea",
        "Precautions": "Take after meals",
        "Category": "Antacid"
    },
    {
        "Medicine_Name": "Duphalac",
        "Generic_Name": "Lactulose",
        "Dosage": "10ml",
        "Usage": "Constipation",
        "Side_Effects": "Bloating, cramps",
        "Precautions": "Take with plenty of water",
        "Category": "Laxative"
    },
    {
        "Medicine_Name": "Cremaffin",
        "Generic_Name": "Liquid Paraffin + Milk of Magnesia",
        "Dosage": "5ml + 5ml",
        "Usage": "Constipation",
        "Side_Effects": "Diarrhea, cramps",
        "Precautions": "Take with plenty of water",
        "Category": "Laxative"
    },
    {
        "Medicine_Name": "Lomotil",
        "Generic_Name": "Diphenoxylate + Atropine",
        "Dosage": "2.5mg + 0.025mg",
        "Usage": "Diarrhea",
        "Side_Effects": "Drowsiness, dry mouth",
        "Precautions": "Do not exceed dose",
        "Category": "Antidiarrheal"
    },
    {
        "Medicine_Name": "Imodium",
        "Generic_Name": "Loperamide",
        "Dosage": "2mg",
        "Usage": "Diarrhea",
        "Side_Effects": "Constipation, dizziness",
        "Precautions": "Do not exceed dose",
        "Category": "Antidiarrheal"
    },
    {
        "Medicine_Name": "Gas-O-Fast",
        "Generic_Name": "Simethicone",
        "Dosage": "40mg",
        "Usage": "Gas, bloating",
        "Side_Effects": "None reported",
        "Precautions": "Take after meals",
        "Category": "Antiflatulent"
    },
    {
        "Medicine_Name": "Disflatyl",
        "Generic_Name": "Simethicone",
        "Dosage": "40mg",
        "Usage": "Gas, bloating",
        "Side_Effects": "None reported",
        "Precautions": "Take after meals",
        "Category": "Antiflatulent"
    }
];