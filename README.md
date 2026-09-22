# 🫀 CardioSense AI

## Explainable Machine Learning for Patient-Specific Heart Disease Risk Estimation

> **Predict. Explain. Explore. Understand.**

**CardioSense AI** is an explainable machine-learning platform designed to transform structured cardiovascular health information into an interpretable **model-based heart-disease risk estimate**.

Instead of behaving like a conventional prediction form that simply returns:

```text
Disease → YES / NO
```

CardioSense AI is designed as a complete **Prediction → Explanation → Exploration** experience.

It combines:

- 🧠 Machine Learning
- 🌲 Random Forest Classification
- 🌳 Decision Tree Ensembles
- 🔍 SHAP Explainable AI
- 📊 Interactive Visual Analytics
- 🔄 What-If Model Simulation
- 🧬 Counterfactual Exploration
- ⚡ Real-Time Prediction Interface
- 🎨 Modern React-Based UI
- 🛡️ Responsible AI principles

The central philosophy of the project is:

> **A machine-learning prediction becomes more useful when the user can understand why the model produced it and explore how its output changes.**

---

# ⚠️ Medical & Responsible-AI Disclaimer

**CardioSense AI is an academic/research project. It is not a medical diagnostic device and must not be used as a substitute for professional medical advice, diagnosis, or treatment.**

The system produces a **model-derived estimate** based on the input features and the data used to train the machine-learning model.

For example:

```text
Estimated Model Risk: 72%
```

does **not** mean:

> “The patient definitely has heart disease.”

Similarly:

```text
Lower Model Risk
```

does **not** prove that a person is free from heart disease.

SHAP explanations describe **model behavior**, not medical causation.

What-if simulations describe how the **model output changes when inputs are changed**; they are not treatment recommendations.

---

# 📌 Table of Contents

1. [Project Overview](#-1-project-overview)
2. [Project Vision](#-2-project-vision)
3. [Problem Statement](#-3-problem-statement)
4. [Proposed Solution](#-4-proposed-solution)
5. [What Makes CardioSense AI Different](#-5-what-makes-cardiosense-ai-different)
6. [System Workflow](#-6-system-workflow)
7. [Machine Learning Architecture](#-7-machine-learning-architecture)
8. [Why Random Forest](#-8-why-random-forest)
9. [Random Forest Internals](#-9-random-forest-internals)
10. [Prediction Pipeline](#-10-prediction-pipeline)
11. [Risk Estimation](#-11-risk-estimation)
12. [Explainable AI with SHAP](#-12-explainable-ai-with-shap)
13. [What-If Analysis](#-13-what-if-analysis)
14. [Counterfactual Exploration](#-14-counterfactual-exploration)
15. [Input Features](#-15-input-features)
16. [Dataset](#-16-dataset)
17. [Application Architecture](#-17-application-architecture)
18. [Technology Stack](#-18-technology-stack)
19. [Frontend Architecture](#-19-frontend-architecture)
20. [ML Layer](#-20-machine-learning-layer)
21. [Responsible AI](#-21-responsible-ai)
22. [Model Evaluation](#-22-model-evaluation)
23. [Data Leakage Prevention](#-23-data-leakage-prevention)
24. [Project Structure](#-24-project-structure)
25. [User Experience](#-25-user-experience)
26. [Example Prediction Journey](#-26-example-prediction-journey)
27. [Installation](#-27-installation)
28. [Environment Configuration](#-28-environment-configuration)
29. [Development Workflow](#-29-development-workflow)
30. [Testing Strategy](#-30-testing-strategy)
31. [Limitations](#-31-limitations)
32. [Future Scope](#-32-future-scope)
33. [Academic Significance](#-33-academic-significance)
34. [Team](#-34-team)
35. [Conclusion](#-35-conclusion)

---

# 🫀 1. Project Overview

CardioSense AI is a healthcare-oriented machine-learning application built around a simple question:

> **Can a machine-learning model estimate heart-disease risk from structured cardiovascular health information while also explaining its prediction?**

The system accepts structured patient parameters, processes them through a machine-learning pipeline, and generates an estimated model output.

But prediction is only the first layer.

CardioSense AI then provides:

```text
                    CARDIOSENSE AI
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
       PREDICT         EXPLAIN         EXPLORE
          │               │               │
   Random Forest         SHAP        What-If Analysis
          │               │               │
          └───────────────┼───────────────┘
                          ▼
                 INTERPRETABLE RESULT
```

This makes the project more than a basic classification interface.

---

# 🎯 2. Project Vision

The long-term vision of CardioSense AI is to demonstrate how **explainable machine learning can be integrated into an intuitive healthcare-oriented software experience**.

The project focuses on three principles:

### 01 — Prediction

Use a trained machine-learning model to estimate the target class from structured health features.

### 02 — Explanation

Expose feature-level model contributions using SHAP.

### 03 — Exploration

Allow users to perform controlled what-if simulations and observe how the model responds.

Hence:

> **CardioSense AI = Prediction + Explainability + Interaction**

---

# 🚨 3. Problem Statement

A basic heart-disease prediction application often follows:

```text
Patient Data
     ↓
ML Model
     ↓
YES / NO
```

Although this produces an output, it leaves several questions unanswered:

- Why did the model make this prediction?
- Which features influenced the output?
- How important were individual features?
- What happens if an input changes?
- Is the output a diagnosis or only a model estimate?
- How should model probability be interpreted?

This creates an **interpretability gap** between machine-learning models and human users.

CardioSense AI addresses this gap by combining prediction with explanation and interactive exploration.

---

# 💡 4. Proposed Solution

CardioSense AI transforms the conventional classification pipeline into:

```text
Patient Health Information
          ↓
Input Validation
          ↓
Preprocessing
          ↓
Random Forest
          ↓
Model Prediction
          ↓
Probability Estimate
          ↓
Risk Category
          ↓
SHAP Explanation
          ↓
Visual Analytics
          ↓
What-If Simulation
          ↓
Assessment
```

The system therefore provides both:

### Machine output

```text
Prediction
Probability
Risk Category
```

and:

### Human-readable context

```text
Important Features
Feature Contributions
Visual Explanation
What-If Comparison
```

---

# ✨ 5. What Makes CardioSense AI Different?

The project is not designed around the idea:

> **“Build a classifier and display its accuracy.”**

Instead, it explores the complete interaction around an ML model.

### Conventional ML Demo

```text
Input → Model → Output
```

### CardioSense AI

```text
Input
  ↓
Validation
  ↓
Preprocessing
  ↓
Prediction
  ↓
Probability
  ↓
Explanation
  ↓
Visualization
  ↓
What-If Exploration
  ↓
Assessment
```

This gives the project a stronger emphasis on **Explainable AI and human-centered machine learning**.

---

# 🔄 6. System Workflow

## Step 1 — Patient Input

The user enters structured cardiovascular information.

Examples include:

```text
Age
Sex
Chest Pain Type
Resting Blood Pressure
Cholesterol
Fasting Blood Sugar
Resting ECG
Maximum Heart Rate
Exercise Angina
ST Depression
ST Slope
Major Vessels
Thal
```

---

## Step 2 — Input Validation

The application verifies that:

- Required fields are provided.
- Numerical values are valid.
- Categorical values are supported.
- Data is in the expected format.

Invalid input should be rejected before model inference.

---

## Step 3 — Preprocessing

The raw user input is transformed into the representation expected by the trained model.

Depending on the implementation, this can involve:

- Encoding
- Numerical transformation
- Feature ordering
- Missing-value handling
- Scaling where required

The preprocessing procedure used during inference must be consistent with the training pipeline.

---

## Step 4 — Random Forest Prediction

The processed feature vector enters the trained Random Forest classifier.

```text
                  Patient Features
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
      Tree 1           Tree 2           Tree 3
        │                │                │
        └────────────────┼────────────────┘
                         ⋮
                    Tree N
                         │
                         ▼
                    Aggregation
                         │
                         ▼
                  Final Prediction
```

---

## Step 5 — Model Probability

Where supported by the trained classifier, the system can expose a probability estimate.

Example:

```text
Estimated Model Probability
72.4%
```

This is explicitly treated as a **model-derived estimate**, not a clinically validated individual risk score.

---

## Step 6 — Risk Category

The application can map the model output into project-defined categories such as:

```text
LOW
MODERATE
HIGH
```

The actual threshold values must be defined by the implementation and documented.

They should not be presented as universal medical thresholds.

---

## Step 7 — SHAP Explanation

SHAP is applied to explain the individual prediction.

```text
Random Forest
      ↓
Prediction
      ↓
     SHAP
      ↓
Feature Contributions
```

---

## Step 8 — What-If Analysis

The user can modify selected values and submit the modified profile again.

```text
Original Input
      ↓
Prediction A

Modified Input
      ↓
Prediction B

      ↓

Compare Model Outputs
```

This provides an interactive view of model behavior.

---

## Step 9 — Final Assessment

The result screen can combine:

- Patient input summary
- Estimated model probability
- Model risk category
- SHAP feature contributions
- Visual analytics
- What-if comparison
- Responsible-AI disclaimer

---

# 🌲 7. Machine Learning Architecture

The primary ML architecture is:

```text
              UCI HEART DISEASE DATA
                        │
                        ▼
                Data Preparation
                        │
                        ▼
                Train/Test Split
                        │
                        ▼
                 Preprocessing
                        │
                        ▼
              RANDOM FOREST MODEL
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
        Tree 1        Tree 2       Tree N
          │             │             │
          └─────────────┼─────────────┘
                        ▼
                   Aggregation
                        │
                        ▼
                  Model Output
                        │
              ┌─────────┴─────────┐
              ▼                   ▼
        Risk Estimate          SHAP
                                  │
                                  ▼
                             Explanation
```

---

# ⭐ 8. Why Random Forest?

**Random Forest Classifier is the primary machine-learning model of CardioSense AI.**

It was selected because it provides a practical ensemble approach for structured/tabular data.

### Key characteristics

#### Multiple trees

Instead of depending on one decision tree, the forest combines many trees.

#### Randomized training

Different trees are trained using randomized samples and feature selection.

#### Nonlinear learning

Tree-based models can represent nonlinear relationships.

#### Feature interactions

The model can learn patterns involving combinations of features.

#### Ensemble prediction

The final result is obtained by aggregating the outputs of multiple trees.

---

# 🌳 9. Random Forest Internals

A Random Forest can be viewed as:

```text
                RANDOM FOREST
                       │
       ┌───────────────┼───────────────┐
       ▼               ▼               ▼
    Decision         Decision       Decision
      Tree 1           Tree 2          Tree 3
       │                │               │
       └────────────────┼───────────────┘
                        ⋮
                       Tree N
                        │
                        ▼
                   Aggregation
                        │
                        ▼
                 Final Prediction
```

Each Decision Tree contains:

- Root node
- Decision nodes
- Branches
- Leaf nodes

The forest introduces diversity through techniques such as:

### Bootstrap sampling

Different trees can be trained on different sampled versions of the training data.

### Random feature selection

Trees can consider different subsets of features when determining splits.

This diversity helps the ensemble produce a more robust prediction than relying on a single tree.

---

# 🎯 10. Prediction Pipeline

Suppose a new user provides:

```text
Age              = 42
Sex              = Female
Resting BP       = 115
Cholesterol      = 180
Maximum Heart Rate = 165
Exercise Angina  = No
ST Depression    = 0.0
...
```

The system does **not** simply apply manually written rules.

It performs:

```text
User Input
    ↓
Validation
    ↓
Preprocessing
    ↓
Random Forest
    ↓
Multiple Tree Predictions
    ↓
Aggregation
    ↓
Final Model Output
```

The model has learned statistical patterns from the training dataset.

---

# 📊 11. Risk Estimation

The system can present a model probability where technically appropriate.

For example:

```text
MODEL OUTPUT

Estimated Model Risk
        72.4%

Category
        HIGH
```

The exact output depends on:

- Trained model
- Training data
- Feature preprocessing
- Target encoding
- Model configuration
- Risk-category thresholds

Therefore, the application must never pretend that a manually selected “safe value” guarantees a low-risk output.

---

# 🔍 12. Explainable AI with SHAP

## What does SHAP mean?

**SHAP = SHapley Additive exPlanations**

SHAP helps answer:

> **“Which input features contributed to this particular model prediction?”**

It is an **explainability technique**, not the prediction model itself.

```text
             RANDOM FOREST
                    │
                    ▼
                Prediction
                    │
                    ▼
                  SHAP
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
      Age           BP       ST Depression
       │            │            │
       ▼            ▼            ▼
 Contribution  Contribution  Contribution
```

A result may visually communicate:

```text
FEATURE CONTRIBUTIONS

Chest Pain          ██████████  ↑
Exercise Angina     ███████     ↑
ST Depression       ██████      ↑
Age                 █████       ↑
Maximum Heart Rate  ███         ↓
```

These are **model contributions**, not proof of medical causation.

---

# 🔄 13. What-If Analysis

What-If Analysis allows users to explore:

> **“What happens to the model output if selected input values are changed?”**

Example:

```text
ORIGINAL PROFILE

ST Depression = 2.1
        ↓
Model Output = A
```

Then:

```text
MODIFIED PROFILE

ST Depression = 1.0
        ↓
Model Output = B
```

The application can visualize:

```text
Original        Modified
─────────       ────────
72%             61%
```

The actual values must come from the model.

### Important distinction

What-if analysis is:

> **Model simulation**

It is not:

> **Medical treatment advice**

---

# 🧬 14. Counterfactual Exploration

Counterfactual reasoning extends the What-If concept.

It asks:

> **“What input changes could cause the model to produce a different prediction?”**

Conceptually:

```text
Current Profile
       ↓
Current Prediction
       ↓
Counterfactual Search
       ↓
Alternative Profile
       ↓
Alternative Prediction
```

Any counterfactual output must be described as a model simulation.

---

# 🩺 15. Input Features

The commonly used UCI Heart Disease feature set contains 13 predictive variables.

| Feature | Description |
|---|---|
| `age` | Age |
| `sex` | Sex encoding |
| `cp` | Chest pain type |
| `trestbps` | Resting blood pressure |
| `chol` | Serum cholesterol |
| `fbs` | Fasting blood sugar |
| `restecg` | Resting ECG result |
| `thalach` | Maximum heart rate achieved |
| `exang` | Exercise-induced angina |
| `oldpeak` | Exercise-induced ST depression |
| `slope` | Peak exercise ST-segment slope |
| `ca` | Number of major vessels |
| `thal` | Thalassemia-related feature |

The exact categorical encodings should match the selected dataset and training implementation.

---

# 🗃️ 16. Dataset

## UCI Heart Disease Dataset

CardioSense AI uses the publicly available **UCI Heart Disease dataset** as its primary academic dataset.

The commonly used Cleveland subset contains:

- **303 instances**
- **13 predictive features**
- A diagnosis target

### Dataset

**UCI Machine Learning Repository — Heart Disease**

[UCI Heart Disease Dataset](https://archive.ics.uci.edu/dataset/45/heart+disease?utm_source=chatgpt.com)

The original dataset contains a diagnosis field commonly represented as `num`.

For binary classification experiments, a common transformation is:

```text
0     → Absence
1–4   → Presence
```

The exact target transformation used in the final implementation should be documented alongside the trained model.

---

# 🏗️ 17. Application Architecture

```text
┌─────────────────────────────────────────────┐
│                 FRONTEND                    │
│                                             │
│ React + TypeScript + Vite + Tailwind CSS   │
│                                             │
│ Home → Assessment → Results → Analytics    │
└─────────────────────┬───────────────────────┘
                      │
                      │ Application/API Layer
                      ▼
┌─────────────────────────────────────────────┐
│              ML APPLICATION                 │
│                                             │
│ Validation → Preprocessing                  │
│             ↓                               │
│        Random Forest                        │
│             ↓                               │
│ Prediction → SHAP → What-If                │
└─────────────────────┬───────────────────────┘
                      │
                      ▼
              ┌─────────────────┐
              │ Result & Report │
              └─────────────────┘
```

---

# 🧰 18. Technology Stack

## Frontend

### React
Interactive component-based user interface.

### TypeScript
Type-safe application development.

### Vite
Fast development and frontend build environment.

### Tailwind CSS
Responsive styling and UI design.

### Framer Motion
Used where implemented for animations and transitions.

### Recharts
Used where implemented for charts and data visualization.

### Lucide React
Used where implemented for interface icons.

---

## Application/Data Services

### Supabase

Supabase is present in the project's structure for application/data services where configured.

Its exact role should follow the actual implementation.

---

## Machine Learning

### Python

ML/data-processing layer where implemented.

### Pandas

Tabular dataset processing where implemented.

### NumPy

Numerical computation where implemented.

### Scikit-learn

Machine-learning framework and Random Forest implementation.

### SHAP

Model explainability.

> **SciPy and XGBoost should only be listed as implemented technologies if they are actually imported and used in the final codebase.**

---

# 💻 19. Frontend Architecture

The frontend follows a modular React structure.

```text
src/
│
├── components/
│
├── context/
│
├── hooks/
│
├── lib/
│
├── pages/
│   ├── HomePage.tsx
│   ├── AssessmentPage.tsx
│   └── ResultsPage.tsx
│
├── App.tsx
├── main.tsx
├── index.css
└── types.ts
```

### Components

Reusable visual elements.

### Context

Shared application state.

### Hooks

Reusable React logic.

### Lib

Utility and integration functions.

### Pages

Major application screens.

### App.tsx

Application root.

### main.tsx

Frontend entry point.

### types.ts

Shared TypeScript type definitions.

---

# 🧠 20. Machine Learning Layer

The ML layer should remain independent from the visual interface.

A conceptual separation is:

```text
Frontend
   │
   │ Request
   ▼
Prediction Service
   │
   ├── Validation
   ├── Preprocessing
   ├── Random Forest
   ├── Probability
   ├── SHAP
   └── What-If
   │
   ▼
Response
   │
   ▼
Frontend Visualization
```

This separation makes the project easier to test and maintain.

---

# 🛡️ 21. Responsible AI

CardioSense AI explicitly follows responsible-AI principles.

## Transparency

Users should understand:

- What the model receives
- What the model produces
- What the probability represents
- What the output does not represent

## Explainability

SHAP provides feature-level model explanations.

## No false certainty

The interface should avoid language suggesting guaranteed medical outcomes.

Prefer:

> **Estimated Model Risk**

instead of:

> **You have heart disease.**

## Human Oversight

Medical decisions remain the responsibility of qualified healthcare professionals.

## Model limitations

The system should communicate that model performance depends on:

- Dataset quality
- Population characteristics
- Feature quality
- Model design
- Evaluation methodology

---

# 📈 22. Model Evaluation

A machine-learning model should be evaluated on data that was not used to train it.

Recommended metrics include:

| Metric | Purpose |
|---|---|
| Accuracy | Overall classification correctness |
| Precision | Correct positive predictions |
| Recall | Ability to identify positive cases |
| Specificity | Ability to identify negative cases |
| F1 Score | Balance of precision and recall |
| ROC-AUC | Ranking/discrimination performance |
| PR-AUC | Useful for class-imbalance analysis |
| Confusion Matrix | Detailed classification breakdown |
| Calibration | Reliability of predicted probabilities |

### Important

**Do not invent model performance numbers.**

For example, never put:

```text
Accuracy = 97.8%
```

unless that number was actually obtained from your experiment.

---

# 🔐 23. Data Leakage Prevention

Data leakage can produce unrealistically strong results.

The correct conceptual workflow is:

```text
Dataset
   ↓
Train / Test Split
   ↓
Fit preprocessing on training data
   ↓
Transform training data
   ↓
Transform test data
   ↓
Train model
   ↓
Evaluate
```

The test set should remain unseen during model fitting.

Where appropriate, a Scikit-learn Pipeline can connect preprocessing and model training into one reproducible workflow.

---

# 📁 24. Project Structure

A complete conceptual repository can be organized as:

```text
CardioSense-AI/
│
├── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── index.css
│   │   └── types.ts
│   │
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.*
│
├── ml/
│   ├── data/
│   ├── models/
│   ├── notebooks/
│   ├── preprocessing/
│   ├── train.py
│   ├── predict.py
│   └── explain.py
│
├── backend/
│   ├── app/
│   ├── routes/
│   ├── schemas/
│   └── services/
│
├── supabase/
│
├── .env.example
├── .gitignore
└── requirements.txt
```

> This is a recommended modular structure. The actual repository should list only files and directories that really exist.

---

# 🎨 25. User Experience

CardioSense AI follows a modern, clinical-inspired interface philosophy.

### Visual language

- Clean light interface
- White foundation
- Ice-blue and cyan accents
- Soft lavender/teal highlights
- Glassmorphism-inspired cards
- Responsive layouts
- Clear information hierarchy
- Data-driven visualizations
- Minimal clutter

### Main navigation

```text
HOME
  ↓
ASSESSMENT
  ↓
RESULTS
  ↓
EXPLANATION
  ↓
WHAT-IF
  ↓
REPORT
```

The UI is designed to make the ML workflow understandable even to users who do not know the mathematics behind Random Forest or SHAP.

---

# 🧪 26. Example Prediction Journey

Consider a **hypothetical demonstration profile**:

```text
Age                 42
Sex                 Female
Resting BP           115
Cholesterol          180
Maximum Heart Rate   165
Exercise Angina      No
ST Depression        0.0
```

The application processes the **complete feature vector**, not these values individually.

```text
                 INPUT
                   ↓
              VALIDATION
                   ↓
             PREPROCESSING
                   ↓
             RANDOM FOREST
                   ↓
           MODEL PROBABILITY
                   ↓
             RISK CATEGORY
                   ↓
                 SHAP
                   ↓
          FEATURE EXPLANATION
                   ↓
             WHAT-IF TEST
                   ↓
               ASSESSMENT
```

The actual output is entirely determined by the trained model and configured threshold logic.

---

# ⚙️ 27. Installation

## Prerequisites

Depending on the final repository implementation:

- Node.js
- npm
- Python 3.x
- Git
- Modern web browser

---

## Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd CardioSense-AI
```

---

## Frontend Installation

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Python Environment

If the repository contains a Python ML service:

### Create environment

```bash
python -m venv .venv
```

### Windows

```bash
.venv\Scripts\activate
```

### macOS / Linux

```bash
source .venv/bin/activate
```

### Install dependencies

```bash
pip install -r requirements.txt
```

Run the ML/backend service according to the actual project entry point.

For a FastAPI implementation, an example is:

```bash
uvicorn app.main:app --reload
```

---

# 🔑 28. Environment Configuration

Create a local `.env` file for environment-specific configuration.

Example:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

ML_API_URL=http://localhost:8000
```

### Never commit:

```text
.env
private API keys
database passwords
service-role keys
private certificates
production credentials
```

Instead provide:

```text
.env.example
```

with placeholder values.

---

# 🔧 29. Development Workflow

The recommended development lifecycle is:

```text
             RESEARCH
                ↓
        DATASET PREPARATION
                ↓
         DATA PREPROCESSING
                ↓
          MODEL TRAINING
                ↓
          MODEL EVALUATION
                ↓
       RANDOM FOREST SELECTION
                ↓
          SHAP INTEGRATION
                ↓
          API INTEGRATION
                ↓
        FRONTEND INTEGRATION
                ↓
        WHAT-IF DEVELOPMENT
                ↓
             TESTING
                ↓
        FINAL DEMONSTRATION
```

---

# 🧪 30. Testing Strategy

CardioSense AI should be tested at multiple levels.

## Frontend Testing

Verify:

- Input fields
- Form validation
- Navigation
- Result rendering
- Responsive layout
- Charts
- Error states

## API Testing

Verify:

- Valid requests
- Invalid requests
- Missing parameters
- Unexpected values
- Response structure
- Error handling

## ML Testing

Verify:

- Feature ordering
- Encoding consistency
- Preprocessing consistency
- Prediction output
- Probability output
- SHAP explanation
- What-if behavior

## Integration Testing

Verify the complete path:

```text
Frontend
   ↓
API
   ↓
Preprocessing
   ↓
Random Forest
   ↓
SHAP
   ↓
API Response
   ↓
Frontend
```

---

# ⚠️ 31. Limitations

## Dataset Size

The commonly used UCI Cleveland subset is relatively small compared with modern clinical datasets.

## Population Representation

Performance on one dataset does not guarantee equivalent performance for every population.

## Model Dependence

The Random Forest learns statistical patterns from its training data.

## Explainability Limits

SHAP explains the model's behavior. It does not establish biological or medical causation.

## What-If Limits

A what-if simulation represents how the model responds to modified inputs. It does not predict what will actually happen to a patient after changing a health condition.

## Clinical Limitations

The system does not replace:

- Medical examination
- Professional diagnosis
- Clinical history
- Laboratory investigation
- ECG interpretation
- Imaging
- Physician judgment

---

# 🚀 32. Future Scope

CardioSense AI can be extended in several directions.

## Multi-model benchmarking

Compare Random Forest against:

- Logistic Regression
- Decision Tree
- SVM
- KNN
- Gradient Boosting
- XGBoost

Only models that are actually trained and evaluated should be described as implemented.

---

## Probability Calibration

Investigate whether model probabilities are well calibrated and apply appropriate calibration methods where justified.

---

## Larger and More Diverse Datasets

Evaluate the system using additional appropriately documented datasets.

---

## Independent Validation

Test the model against an external dataset rather than relying entirely on the training source.

---

## Advanced Explainability

Potential additions include:

- Global SHAP summaries
- Feature dependence plots
- Partial dependence
- Counterfactual optimization
- Comparative model explanations

---

## Model Versioning

Maintain metadata such as:

```text
Model Version
Dataset Version
Feature Schema
Preprocessing Version
Training Date
Evaluation Metrics
```

Example:

```text
cardiosense-heart-v1.0.0
```

---

## Enhanced Reports

Generate structured reports containing:

- Input summary
- Model output
- Probability
- Risk category
- SHAP explanation
- What-if comparison
- Model version
- Responsible-AI disclaimer

---

# 🎓 33. Academic Significance

CardioSense AI brings together several major areas of computer science.

### Machine Learning

Supervised classification using structured health data.

### Ensemble Learning

Random Forest combines multiple decision trees.

### Explainable AI

SHAP provides feature-level explanations.

### Frontend Engineering

React and TypeScript provide an interactive user experience.

### Data Processing

Structured health information must be validated and transformed before inference.

### Human-Centered AI

The project emphasizes how users interact with and understand machine-learning outputs.

### Responsible AI

The system explicitly distinguishes model predictions from medical diagnosis.

---

# 👥 34. Team

## CardioSense AI

| Member | ID | Contribution |
|---|---|---|
| **Kartikeya** | **23R11A0591** | ML architecture, AI integration & system design |
| **Murali** | **23R11A0583** | Data/model development & application integration |
| **VishnuKanth** | **23R11A0592** | Frontend, visualization, testing & integration |

**Institution:** Geethanjali College of Engineering & Technology  
**Class & Section:** B.Tech 4-1 CSE-B  
**Project Guide:** Ms. V. Sravanti  
**Academic Year:** 2026–27

---

# 🏁 35. Conclusion

CardioSense AI is built around a simple principle:

> **Don't just predict. Explain the prediction.**

The system combines:

```text
              STRUCTURED HEALTH DATA
                       │
                       ▼
                MACHINE LEARNING
                       │
                       ▼
                RANDOM FOREST
                       │
                       ▼
                 MODEL OUTPUT
                       │
              ┌────────┴────────┐
              ▼                 ▼
             SHAP            WHAT-IF
              │                 │
              ▼                 ▼
         EXPLANATION        EXPLORATION
              └────────┬────────┘
                       ▼
                CARDIOSENSE AI
```

The result is a project that demonstrates not only how a machine-learning classifier can produce a prediction, but also how that prediction can be **explained, visualized, and interactively explored**.

CardioSense AI therefore sits at the intersection of:

> **Machine Learning × Explainable AI × Full-Stack Development × Human-Centered Design**

---

# 📚 Dataset Reference

**UCI Machine Learning Repository — Heart Disease**

[UCI Heart Disease Dataset](https://archive.ics.uci.edu/dataset/45/heart+disease?utm_source=chatgpt.com)

---

# 🔐 Repository Security

Before publishing the repository, ensure that sensitive files are excluded:

```gitignore
.env
.env.local
.env.*.local

node_modules/
.venv/
__pycache__/

*.key
*.pem

*.secret
```

Do not commit:

- API keys
- Database credentials
- Supabase service-role keys
- Private certificates
- Personal patient information
- Private datasets without permission

---

# 📄 License

Choose a license that matches the ownership and redistribution rights of the code, datasets, assets, and dependencies included in the repository.

For an academic software project, an MIT License may be appropriate if all included material permits it.

---

# 🫀 CardioSense AI

### **Predict. Explain. Explore. Understand.**

> **An academic exploration of explainable machine learning for cardiovascular risk estimation.**
