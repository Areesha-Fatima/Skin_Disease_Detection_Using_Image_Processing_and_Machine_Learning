# Skin Disease Detection (FYP)

An AI-powered full-stack web application designed to detect and classify various skin conditions from user-uploaded images. This system utilizes a deep learning Convolutional Neural Network (CNN) model built with TensorFlow/Keras, served via a high-performance FastAPI backend, and presented through an interactive React.js frontend.

---

## 🚀 Key Features

- **AI-Driven Prediction:** Classifies skin lesion images using a trained Convolutional Neural Network model (`h5best_model.keras`).
- **Interactive Frontend:** Responsive user interface built with React.js for seamless image uploading and result visualization.
- **Robust Backend API:** Powered by FastAPI to handle asynchronous image processing, model inference, and routing.
- **Full-Stack Architecture:** Clean separation of concerns with dedicated client, server, and model directories.

---

## 🛠️ Tech Stack

### Frontend (`client/`)
- **Framework:** React.js
- **Styling:** CSS3 / Modern UI components
- **Build Tool:** npm / Webpack

### Backend & Model (`server/` & `model/`)
- **API Framework:** FastAPI / Uvicorn
- **Deep Learning Framework:** TensorFlow / Keras (Python)
- **Image Processing:** OpenCV (`cv2`)
- **Server/Auth Utilities:** Node.js / Express integration modules

---

## 📂 Project Structure

```text
Skin_Disease_Detection/
│
├── client/                # React frontend application
│   ├── public/            # Static assets (icons, manifest, index.html)
│   ├── src/               # React components and styling
│   ├── package.json       # Frontend dependencies
│   └── package-lock.json
│
├── model/                 # Deep learning model & scripts
│   ├── app/               # Saved model weights (h5best_model.keras)
│   ├── env_one/           # Python virtual environment binaries & scripts
│   ├── main.py            # Model inference pipeline
│   └── requirements.txt   # Python machine learning dependencies
│
├── server/                # Backend infrastructure & database routes
│   ├── connectiondb/      # Database connection configurations
│   ├── controllers/       # Request handling logic
│   ├── middlewares/       # Authentication and security middlewares
│   ├── models/            # Database schemas
│   ├── routes/            # API routing endpoints
│   ├── app.js             # Node server entry point
│   ├── package.json       # Backend dependencies
│   └── vercel.json        # Deployment configuration
│
├── .gitignore             # Ignored files and directories
└── README.md              # Project documentation
```
## ⚙️ Local Setup & Installation
   To run this project locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Areesha-Fatima/Skin_Disease_Detection.git
   cd Skin_Disease_Detection
   ```

2. **Set Up the Frontend (client)**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```
   (The React app will run locally on http://localhost:3000)

3. **Set Up the Model & Python Backend (model)**
   ```bash
   cd model
   env_one\Scripts\activate
   pip install -r requirements.txt
   ```

4. **Set Up the Node Server (server)**
   Open another terminal window and run: 
      ```bash
   cd server
   npm install
   npm start
   ```

## Usage
1. Navigate to the application in your web browser.
2. Click the "Choose Image from your Computer" button to upload a photo of the skin condition.
3. Click the "View Result" button to analyze the uploaded image.
4. Review the prediction result, including the disease name, confidence score, and suggested remedies.

## API Endpoints
- **POST /predict/**: 
   - **Description**: Receives an image file and returns prediction results.
   - **Request Format**: FormData containing the image file.
   - **Response**: JSON object containing:
     - `disease_name`: Name of the predicted disease.
     - `confidence`: Confidence score of the prediction.
     - `recommendation`: Suggested remedies for the identified condition.

## 👤 Author
- Areesha Fatima
- BS Computer Science, Iqra University

