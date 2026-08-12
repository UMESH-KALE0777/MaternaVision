# 🤱 MaternaVision

> Automated Fetal Biometry Estimation using Multi-Task Deep Learning

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://maternavision.vercel.app)
[![Backend API](https://img.shields.io/badge/API-Render-green)](https://maternavision-api.onrender.com/docs)
[![Model Weights](https://img.shields.io/badge/Weights-HuggingFace-yellow)](https://huggingface.co/MaternaVision)
[![License](https://img.shields.io/badge/License-MIT-red)](LICENSE)

MaternaVision is a production-grade clinical AI web application 
that automatically estimates fetal head biometric measurements 
— Biparietal Diameter (BPD) and Occipitofrontal Diameter (OFD) 
— from 2D fetal axial ultrasound images using a novel multi-task 
deep learning framework.

---

## 👥 Team

| Name | USN | Role |
|------|-----|------|
| Umesh R Kale | 3PD23AI055 | AI Model Development + Backend API |
| Vaishnavi S P | 3PD23AI057 | Inference Pipeline + Clinical Output |
| Ruchitha B | 3PD23AI042 | Frontend + Explainability + Deployment |

**Project Guide:** Prof. Sowmya Gaitond  
**Institution:** P.D.A. College of Engineering, Kalaburagi  
**Department:** Artificial Intelligence & Machine Learning  

---

## 🌐 Live Application

| Service | URL |
|---------|-----|
| Frontend | https://maternavision.vercel.app |
| Backend API | https://maternavision-api.onrender.com |
| API Docs | https://maternavision-api.onrender.com/docs |
| Model Weights | https://huggingface.co/MaternaVision |

---

## 🧠 What It Does

Upload a 2D fetal ultrasound image → Get instant clinical measurements:

- **BPD** — Biparietal Diameter (mm) ± confidence interval
- **OFD** — Occipitofrontal Diameter (mm) ± confidence interval  
- **HC** — Head Circumference (mm)
- **GA** — Gestational Age (weeks)
- **CI** — Cephalic Index with risk flag
- **Grad-CAM** — Visual explanation of model attention
- **PDF Report** — Downloadable clinical report

---

## 🏗️ Architecture

React Frontend (Vercel)
↓
FastAPI Backend (Render)
↓
Multi-Task Model (EfficientNet-B4 + UNet)
↓
Hugging Face Hub (Model Weights)


---

## 🔬 Key Features

- **Multi-Task Learning** — Single EfficientNet-B4 backbone for both landmark detection and skull segmentation
- **Uncertainty Estimation** — Monte Carlo Dropout with 50 inference passes
- **Confidence Ensemble** — Dynamically weights Part A and Part B per image
- **Grad-CAM** — Visual explainability for clinical validation
- **Clinical Calculator** — Computes HC, GA, CI, and risk flags automatically
- **PDF Report** — Automated clinical report generation
- **Production Ready** — Fully deployed, live URL, zero cost infrastructure

---

## 📊 Model Performance

| Metric | Value | Clinical Target |
|--------|-------|----------------|
| BPD Error | 1.92 mm | < 2.0 mm ✅ |
| OFD Error | 1.88 mm | < 2.0 mm ✅ |
| Dice Score | 0.921 | > 0.90 ✅ |
| GA Error | 4.3 days | < 5 days ✅ |
| Confidence Calibration (ECE) | 0.041 | < 0.05 ✅ |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Vite, TailwindCSS |
| Backend | FastAPI, Python 3.11 |
| AI Models | PyTorch, EfficientNet-B4, UNet |
| Uncertainty | Monte Carlo Dropout |
| Explainability | Grad-CAM |
| Model Storage | Hugging Face Hub |
| Frontend Hosting | Vercel / Firebase |
| Backend Hosting | Render.com |
| Version Control | GitHub |
| Experiment Tracking | Weights & Biases |

---

## 📁 Repository Structure

MaternaVision/
├── frontend/ # React web application
├── backend/ # FastAPI server + AI pipeline
│ ├── api/ # API routes and schemas
│ └── src/ # Models, inference, clinical
├── training/ # Model training scripts
└── .github/ # CI/CD workflows


---

## 🚀 Run Locally

```bash
# Clone
git clone https://github.com/your-username/MaternaVision.git
cd MaternaVision

# Backend
cd backend
pip install -r requirements.txt
uvicorn api.main:app --reload

# Frontend
cd frontend
npm install
npm run dev
```

---

## 📄 License
MIT License — free to use for academic and research purposes.

---

## 🏥 Disclaimer
MaternaVision is a research project developed for academic purposes. 
It is not a certified medical device and should not be used 
as a substitute for professional clinical judgement...

