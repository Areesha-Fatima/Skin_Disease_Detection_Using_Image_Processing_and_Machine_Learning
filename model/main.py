import io
import os
import numpy as np
import tensorflow as tf
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, "app", "best_model_updated.h5")

if not os.path.isfile(model_path):
    raise FileNotFoundError(f"Model file not found at: {model_path}")

model = tf.keras.models.load_model(model_path)

class_indices = {
    0: ['Acne and Rosacea Photos', "Use acne-specific creams like benzoyl peroxide."],
    1: ['Actinic Keratosis Basal Cell Carcinoma and other Malignant Lesions', "Seek medical advice for potential skin cancer."],
    2: ['Atopic Dermatitis Photos', "Use moisturizers and corticosteroid creams."],
    3: ['Bullous Disease Photos', "Consult a dermatologist for blisters treatment."],
    4: ['Cellulitis Impetigo and other Bacterial Infections', "Antibiotic treatment may be needed."],
    5: ['Eczema Photos', "Apply hydrating lotions and avoid allergens."],
    6: ['Exanthems and Drug Eruptions', "Discontinue the suspected drug and consult a doctor."],
    7: ['Hair Loss Photos Alopecia and other Hair Diseases', "Consult a specialist for hair loss treatments."],
    8: ['Herpes HPV and other STDs Photos', "Antiviral medication may be prescribed."],
    9: ['Light Diseases and Disorders of Pigmentation', "Consult a dermatologist for pigmentation treatments."],
    10: ['Lupus and other Connective Tissue diseases', "Consult a doctor for autoimmune disease management."],
    11: ['Melanoma Skin Cancer Nevi and Moles', "Consult an oncologist for melanoma evaluation."],
    12: ['Nail Fungus and other Nail Disease', "Antifungal treatment might be needed."],
    13: ['Poison Ivy Photos and other Contact Dermatitis', "Apply anti-itch creams or corticosteroids."],
    14: ['Psoriasis pictures Lichen Planus and related diseases', "Use specific psoriasis creams and consult a dermatologist."],
    15: ['Scabies Lyme Disease and other Infestations and Bites', "Use prescribed lotions for scabies or tick removal."],
    16: ['Seborrheic Keratoses and other Benign Tumors', "Consult a dermatologist for benign tumors."],
    17: ['Systemic Disease', "Consult a doctor for systemic disease management."],
    18: ['Tinea Ringworm Candidiasis and other Fungal Infections', "Antifungal creams or medications may be needed."],
    19: ['Urticaria Hives', "Use antihistamines or consult a doctor for hives."],
    20: ['Vascular Tumors', "Consult a doctor for tumor evaluation."],
    21: ['Vasculitis Photos', "Consult a specialist for vasculitis treatment."],
    22: ['Warts Molluscum and other Viral Infections', "Use wart removal treatments or consult a doctor."]
}

def preprocess_image(image: Image.Image):
    target_size = (224, 224)
    img_ratio = image.width / image.height
    target_ratio = target_size[0] / target_size[1]

    if img_ratio > target_ratio:
        new_height = target_size[1]
        new_width = int(target_size[1] * img_ratio)
    else:
        new_width = target_size[0]
        new_height = int(target_size[0] / img_ratio)

    image = image.resize((new_width, new_height), Image.LANCZOS)
    new_image = Image.new("RGB", target_size, (255, 255, 255))
    x_offset = (target_size[0] - new_width) // 2
    y_offset = (target_size[1] - new_height) // 2
    new_image.paste(image, (x_offset, y_offset))

    img_array = tf.keras.preprocessing.image.img_to_array(new_image)
    img_array = np.expand_dims(img_array, axis=0) / 255.0
    return img_array

@app.post("/predict/")
async def upload_image(file: UploadFile = File(...)):
    try:
        image_bytes = await file.read()
        image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
        img_array = preprocess_image(image)

        preds = model.predict(img_array, verbose=0)
        pred_class = int(np.argmax(preds[0]))
        confidence = float(preds[0][pred_class])

        if confidence < 0.55:
            disease_name = "Failed to predict"
            recommendation = "This does not appear to be a valid skin disease image. Kindly upload a clear skin disease picture."
        else:
            disease_name, recommendation = class_indices[pred_class]

        return JSONResponse(content={
            "predicted_class": pred_class,
            "disease_name": disease_name,
            "confidence": confidence,
            "recommendation": recommendation
        })

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)