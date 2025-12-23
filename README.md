# 📄 Word to PDF Converter  
### Full Stack Application (React + Node.js)

A **full stack Word to PDF Converter web application** built using **React (Vite)** for the frontend and **Node.js + Express** for the backend.  
The application supports **user authentication, file upload, conversion, and secure download** with a clean and responsive UI.

---

## 🚀 Features

### 🔐 Authentication
- User Signup & Login
- Auth state managed using Context API
- User session stored in LocalStorage

### 📁 File Handling
- Upload Word files (.doc / .docx)
- Server-side file handling using Multer
- Secure conversion workflow

### 🔄 Conversion
- Convert Word documents to PDF
- Download converted files

### 🎨 UI & UX
- Responsive modern UI
- Built using Tailwind CSS
- Icons using React Icons

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- React Hook Form
- Context API

### Backend
- Node.js
- Express.js
- Multer (File Upload)
- CORS
- File System (FS)

---

## 📂 Project Structure

word-to-pdf-converter/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar.jsx
│ │ │ ├── Footer.jsx
│ │ │ └── Converter.jsx
│ │ │
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── Signup.jsx
│ │ │ ├── Contact.jsx
│ │ │
│ │ ├── context/
│ │ │ └── AuthProvider.jsx
│ │ │
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ │
│ └── package.json
│
├── backend/
│ ├── uploads/
│ ├── converted/
│ ├── server.js
│ └── package.json
│
└── README.md


## 🔄 Application Flow

1. User signs up or logs in
2. Auth data is stored locally
3. User uploads a Word file
4. File is sent to Node.js backend
5. Backend processes and converts file
6. PDF is returned for download

---

## ⚙️ Backend Setup (Node.js)

### 1️⃣ Navigate to backend
```bash
cd backend
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Start server
bash
Copy code
npm run dev
Server runs on:

arduino
Copy code
http://localhost:5000

⚙️ Frontend Setup (React)
1️⃣ Navigate to frontend
cd frontend

2️⃣ Install dependencies
npm install

3️⃣ Start frontend
npm run dev


Frontend runs on:

http://localhost:5173

📦 Backend Dependencies
npm install express multer cors

📦 Frontend Dependencies
npm install react-router-dom react-hook-form react-icons
