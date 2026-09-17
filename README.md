# Yuvaraj S — AI Engineer Portfolio 🧠⚡

Welcome to my personal portfolio repository, showcasing my journey, projects, and skills in Artificial Intelligence and Data Science.

🔗 **Live Demo:** [yuvarajsel.github.io/yuvaraj_portfolio](https://yuvarajsel.github.io/yuvarajsel_portfolio/)

---

## 📖 About Me

I am a B.Tech Artificial Intelligence and Data Science student at Bannari Amman Institute of Technology (2023 – 2027 | CGPA: 6.52/10) with hands-on experience in Generative AI, LLM, RAG, and Agentic AI development using Python. Skilled in multi-agent workflows, semantic search, multimodal retrieval, and Text-to-SQL systems, with proficiency in LangChain, LangGraph, CrewAI, FastAPI, ChromaDB, and MongoDB. Strong grasp of prompt engineering, NLP, vector embeddings, and API integration. Seeking roles as an AI Engineer, Generative AI Engineer, or Machine Learning Engineer.

---

## 🛠️ Tech Stack

*   **Languages:** Python 3.12, Java, C, JavaScript (ES6+), HTML5, CSS3
*   **AI & Multi-Agent Frameworks:** LangGraph, CrewAI (Specialized Autonomous Agents), LangChain & LCEL
*   **RAG & Vector Databases:** ChromaDB (Local PDF/Document Embeddings), Tavily Search API
*   **LLM Integration:** OpenAI APIs, NVIDIA NIM APIs, Prompt Engineering, Multimodal Retrieval
*   **Backend Frameworks:** FastAPI, Uvicorn, Flask, REST APIs, Pydantic v2
*   **Databases:** MongoDB (Async Motor driver), MySQL
*   **Frontend:** React 18, Vite, Vanilla CSS3 (Dark Mode & Glassmorphism Aesthetics)
*   **Tools & Utilities:** Git, GitHub, VS Code, Google Colab, Jupyter Notebook

---

## 🚀 Key Featured Projects

### 🎓🤖 PlacementPal — AI-Powered Placement Preparation Platform

**PlacementPal** is an AI-powered placement preparation platform designed to help students crack technical interviews at top-tier software companies. By orchestrating **LangGraph**, **CrewAI** (5 specialized agents), **LangChain**, and **RAG (Retrieval-Augmented Generation)** over **ChromaDB**, PlacementPal crafts highly personalized, day-by-day preparation plans, company-specific intelligence profiles, active-recall question sets, and intelligent progress tracking.

#### 🏗️ Tech Stack & Components
*   **Frontend:** React 18, Vite, Custom Vanilla CSS dark theme aesthetic
*   **Backend:** Python 3.12, FastAPI, Uvicorn server
*   **Database:** MongoDB (Async via Motor driver)
*   **Vector Store:** ChromaDB (Local vector database for PDF/document RAG)
*   **Multi-Agent Orchestration:**
    *   **LangGraph:** Stateful 2-phase graph execution pipelines
    *   **CrewAI:** 5 autonomous specialized agents (`message_interpreter`, `company_intel`, `knowledge_vault`, `recall_agent`, `curriculum_architect`)
    *   **LangChain & LCEL:** Intent extraction, web synthesis, recall question generation, and curriculum design
*   **Web Search:** Tavily Search API for real-time hiring insights

#### 🤖 2-Phase Stateful Pipeline Architecture

```
┌───────────────────────────────────────────────┐
│              Student Message Input            │
└───────────────────────┬───────────────────────┘
                        │
                        ▼
┌───────────────────────────────────────────────┐
│       Phase 1: Intent & Intel Pipeline        │
└───────────────────┬───────────────────────────┘
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
┌──────────────────────┐┌──────────────────────┐
│  Company Intelligence││   Knowledge Vault    │
│   (Tavily Search)    ││ (ChromaDB RAG Docs)  │
└───────────┬──────────┘└───────────┬──────────┘
            │                       │
            └───────────┬───────────┘
                        │
                        ▼
┌───────────────────────────────────────────────┐
│      Phase 2: Recall & Curriculum Plan        │
└───────────────────┬───────────────────────────┘
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
┌──────────────────────┐┌──────────────────────┐
│    Active Recall     ││   Day-by-Day Plan    │
│  Question Generation ││  Curriculum Design   │
└──────────────────────┘└──────────────────────┘
```

#### 🔌 Main API Endpoints Summary

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/v1/pipeline/phase1` | Runs Phase 1 (Intent extraction, Tavily search, Knowledge Vault lookup) |
| `POST` | `/api/v1/pipeline/phase2` | Runs Phase 2 (Active recall generation & Day-by-day curriculum creation) |
| `POST` | `/api/v1/vault/upload` | Uploads PDF/Text study materials, chunks and embeds into local ChromaDB |
| `GET` | `/api/v1/vault/query` | Semantic similarity search across local ChromaDB vault |
| `GET` | `/api/v1/plan/{session_id}` | Fetch generated preparation plan for a session |
| `PUT` | `/api/v1/plan/{session_id}/task` | Update task progress status (Completed / Pending) |
| `GET` | `/api/v1/state/{session_id}` | Retrieve current session state and timeline |

---

### 🎙️ [Voice-Based AI Study Assistant](https://github.com/Yuvarajsel/Voice_Based_Study_Assistant)
*   Intelligent voice-enabled study companion capable of analyzing spoken input and automatically extracting study topics.
*   Features voice-driven quiz generation, real-time speech interaction, and adaptive learning assessments.

### 💎 [Visual Search Engine for Jewelry (Multimodal RAG)](https://github.com/Yuvarajsel/Multimodal_Jewelry_Retrieval)
*   Multimodal RAG-powered search engine enabling image, sketch, and text query discovery.
*   Uses vector similarity search over CLIP embeddings and structured LLM prompt parsing for product description generation.

### 🌾 [CropCopilot](https://github.com/Yuvarajsel/CropCopilot)
*   AI agricultural intelligence platform combining RAG knowledge retrieval with Text-to-SQL querying.
*   Integrated NVIDIA NIM LLM APIs with CrewAI agents for multi-agent orchestration serving real-time crop recommendations.

### 🌿 [Plant Growth Prediction](https://github.com/Yuvarajsel)
*   Machine learning system that predicts plant growth patterns using multiple regression models and feature engineering.

### 🍔 [Foodie — Food Delivery Web App](https://github.com/Yuvarajsel/Food_Delivery_Website)
*   Interactive food ordering web app built with Vanilla JavaScript, custom CSS design tokens, dynamic JSON catalog, and slide-out cart drawer.

---

## 📜 Certifications

*   **Prompt Engineering — Navigate Labs** (4-Week Intensive Training covering prompt design, few-shot/CoT, and reliable LLM outputs)
*   **Retrieval-Augmented Generation (RAG) — Navigate Labs** (4-Week Intensive Training covering RAG architecture, embeddings & semantic retrieval)
*   **Voice Artificial Intelligence — Navigate Labs** (4-Week Intensive Training covering speech-to-text, text-to-speech & audio AI systems)

---

## ✉️ Contact

*   **Email:** [yuvarajselvam2006@gmail.com](mailto:yuvarajselvam2006@gmail.com)
*   **Phone:** +91 8248546976
*   **LinkedIn:** [linkedin.com/in/yuvaraj-s2909](https://www.linkedin.com/in/yuvaraj-s2909/)
*   **GitHub:** [github.com/Yuvarajsel](https://github.com/Yuvarajsel)


