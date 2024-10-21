# Skin Disease Analyzer

## Description
The Skin Disease Classifier is a web application that utilizes artificial intelligence to help users identify skin conditions based on uploaded images. The app provides predictions along with confidence scores and personalized recommendations for treatment.

## Features
- Upload an image of a skin condition.
- Get instant predictions of potential skin diseases.
- View confidence scores for predictions.
- Receive personalized remedies based on the identified condition.
- Visualize heatmap images indicating affected areas (if available).

## Technologies Used
- **Frontend:** React, JavaScript, HTML, CSS
- **Backend:** Python (Flask/Django or similar), TensorFlow/Keras for model inference
- **Libraries:** Axios for HTTP requests, FileReader API for image processing

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/skin-web.git
   cd skin-web
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Access the app:**
   Open your web browser and navigate to `http://localhost:3000`.

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
     - `heatmap_image_url`: (Optional) URL of the heatmap image.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for discussion.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/AmazingFeature`.
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`.
4. Push to the branch: `git push origin feature/AmazingFeature`.
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Thanks to the open-source community for providing libraries and frameworks that made this project possible.
- Special thanks to any individuals or organizations whose contributions have been instrumental in this project.
