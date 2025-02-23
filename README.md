# Code-Clarify-AI
# 🚀 AI Code Debugger – Interactive Debugging & Explanation

## 🌟 Inspiration  
The inspiration for this project came from the challenges that **beginner programmers** and **developers** face when debugging their code. Many debugging tools only **point out errors** without **explaining the cause** or providing **solutions**. Our AI-powered debugger **not only detects issues but also explains them in a clear and understandable way**, helping users learn from their mistakes.

---

## 🛠️ How We Built It  
We developed the **AI Code Debugger** using modern technologies to ensure a **smooth, interactive, and AI-driven debugging experience**.

### **Frontend (React + Chakra UI)**
- Built with **React.js** for an interactive and dynamic UI.  
- Used **Chakra UI** for a clean, accessible, and responsive design.  
- Integrated **Framer Motion** for smooth animations.  
- Used **Axios** to communicate with the backend API.  

### **Backend (Flask + AI Model Integration)**
- Developed a **Flask API** to process debugging requests.  
- Initially used **OpenAI GPT-4**, but later switched to **LLaMA.cpp (Mistral 7B)** for **local AI inference**.  
- Integrated **LangChain** to structure AI-driven responses.  

### **AI Model (LLaMA.cpp + Mistral 7B)**
- Uses **Mistral 7B**, a powerful local model, to analyze and debug code.  
- Eliminates reliance on cloud APIs, making the solution **cost-effective**.  

### **Deployment (Planned)**
- **Frontend**: To be deployed on **Vercel** or **Netlify**.  
- **Backend**: Will be hosted on **Render/Railway** with GPU support for AI processing.  

---

## 🚧 Challenges We Faced  

### **1. Chakra UI & React Version Conflicts**
- Faced dependency issues with **React 19**, which wasn't fully compatible with **Chakra UI & Framer Motion**.  
- Solved by **downgrading React to v18** for better compatibility.  

### **2. OpenAI API Limitations**
- Initially relied on **OpenAI GPT-4**, but faced **quota limits & high costs**.  
- Switched to **LLaMA.cpp (Mistral 7B)** for local AI processing.  
- Faced **setup challenges on Windows (CMake, CUDA, GPU layers)** but optimized performance.  

### **3. Debugging Windows-Specific Issues**
- Encountered issues with `'chakra-ui' dependency conflicts` due to **peer dependencies requiring React 18**.  
- Fixed by using:  
  ```sh
  npm install --legacy-peer-deps
  ```  

### **4. Connecting Frontend & Backend**
- Encountered **CORS policy errors** when making API requests.  
- Solved by **enabling CORS** in Flask:  
  ```python
  from flask_cors import CORS
  CORS(app)
  ```

---

## 🎓 What We Learned  
✔ **How to integrate AI models into a real-world application.**  
✔ **Optimizing local AI inference (LLaMA.cpp) to avoid cloud API costs.**  
✔ **How Chakra UI enhances accessibility and design simplicity.**  
✔ **Debugging and fixing npm & dependency conflicts effectively.**  
✔ **Deploying AI-driven applications efficiently.**  

---

## 🌟 Future Improvements  
🔹 **Expand language support** (Python, JavaScript, C++).  
🔹 **Enhance AI explanations** with **step-by-step debugging solutions**.  
🔹 **Deploy cloud-based AI inference** with scalable GPUs.  
🔹 **Integrate a real-time collaborative debugging mode.**  

---

## 💡 Conclusion  
This project was an **exciting challenge**, blending **Generative AI, UI/UX design, and backend integration** to create an **AI-powered code debugging tool**. We tackled numerous **technical hurdles**, but through **debugging, optimizing, and iteration**, we created a tool that **helps developers understand their errors more effectively**.

🚀 **The AI Code Debugger empowers users by not just fixing errors, but teaching them how to prevent them in the future.**  

---

## 🌐 Deployment & Custom Domain Setup (Planned)  
- **Domain Name:** We plan to use **ExplainAI.tech** or **DebugAI.tech**.  
- **Frontend Deployment:** Vercel/Netlify.  
- **Backend Deployment:** Render/Railway with GPU support.  
- **Custom Domain Integration:** Will update DNS settings for a professional launch.  

Let us know if you have any feedback! 😊🔥

