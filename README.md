# CardioAI - Heart Disease Prediction System ❤️🧠

CardioAI is an advanced web application that utilizes Machine Learning to predict the early onset of cardiovascular disease. Designed with a modern, glassmorphism UI, CardioAI provides an intuitive and seamless experience for users to input their clinical parameters and instantly receive a highly accurate, AI-powered diagnostic assessment.

## ✨ Key Features
- **Intelligent Diagnostics**: Uses a trained Machine Learning model (Random Forest/XGBoost) to analyze 13 critical medical parameters (such as Resting BP, Cholesterol, Max Heart Rate, etc.).
- **User Authentication**: Secure Login and Signup system.
- **Personalized Dashboard**: Users can track their previous assessment history securely stored via MongoDB.
- **Modern UI/UX**: Built with a sleek Glassmorphism aesthetic, interactive hover animations, and a dynamic `tsParticles` animated background.
- **Downloadable Reports**: Automatically generate and download your medical diagnostic reports as PDF files.
- **Interactive Help Guide**: In-app medical terminology tooltips and popups so patients can easily understand complex clinical terms.
- **Dynamic Demo Data**: Instantly generate random, clinically-accurate test data for testing the application safely.

## 🛠️ Tech Stack
- **Backend**: Python, Flask
- **Frontend**: HTML5, Vanilla CSS3 (Custom Design System), Vanilla JavaScript
- **Database**: MongoDB
- **Machine Learning**: Scikit-learn, Numpy, Pandas (`best_model.pkl`, `scaler.pkl`)
- **Libraries/Assets**: FontAwesome 6 (Icons), Google Fonts (Outfit), tsParticles (Background animations)

## 🚀 Installation & Setup

Follow these steps to run the application locally on your machine.

### Prerequisites
1. **Python 3.8+** must be installed.
2. **MongoDB** must be installed and running locally on the default port (`localhost:27017`).

### 1. Clone the repository
```bash
git clone https://github.com/Govid-jadhav/CardioAI-Heart-disease-prediction-system.git
cd CardioAI-Heart-disease-prediction-system
```

### 2. Install dependencies
It is recommended to use a virtual environment.
```bash
pip install Flask pymongo numpy scikit-learn
```

### 3. Ensure MongoDB is running
Make sure your MongoDB server is active. The application will automatically connect to `mongodb://localhost:27017/` and create the `heart_disease_db` database.

### 4. Run the application
```bash
python app.py
```

### 5. Access the Web App
Open your browser and navigate to:
```
http://localhost:5000
```

## 🏥 Clinical Parameters Used
CardioAI requires 13 inputs for prediction, including:
1. **Age**: Age in years.
2. **Gender**: Male/Female.
3. **Chest Pain Type (CP)**: Typical Angina, Atypical Angina, Non-anginal, Asymptomatic.
4. **Resting BP**: Blood pressure at rest.
5. **Cholesterol**: Serum cholesterol in mg/dl.
6. **Fasting Blood Sugar (FBS)**: > 120 mg/dl or <= 120 mg/dl.
7. **Resting ECG**: Normal, ST-T wave abnormality, or LV hypertrophy.
8. **Max Heart Rate (Thalach)**: Maximum heart rate achieved during exercise.
9. **Exercise Angina (Exang)**: Chest pain induced by exercise.
10. **Oldpeak**: ST depression induced by exercise relative to rest.
11. **Slope**: Slope of peak exercise ST segment.
12. **Major Vessels (CA)**: Number of vessels colored by fluoroscopy.
13. **Thallium Test (Thal)**: Normal, Fixed defect, Reversible defect.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
