# 📝 Fullstack ToDo App

A fully-featured ToDo app built with **React**, **Express**, **MongoDB**, and **JWT Authentication**, all containerized using **Docker** and deployed on **Render**.

![App Screenshot](https://via.placeholder.com/800x400?text=ToDo+App+Screenshot)

---

## 🚀 Features

- ✅ User Registration & Login (JWT-based)
- 🛡️ Protected routes with token verification
- 📋 Add, Edit, Delete personal Todos
- 📦 MongoDB (Atlas) for database
- 🐳 Dockerized frontend & backend
- 🌐 Deployed to Render (free tier)

---

## 🛠️ Tech Stack

| Frontend      | Backend        | DevOps/Infra |
|---------------|----------------|--------------|
| React (Vite)  | Express.js     | Docker       |
| CSS Modules   | MongoDB (Atlas)| Docker Compose |
| React Router  | JWT Auth       | Render       |

---

## 📦 Folder Structure

    /todo-app
    │
    ├── /frontend → React frontend
    │ └── Dockerfile → NGINX static hosting
    │
    ├── /backend → Express API with auth
    │ └── Dockerfile → Node backend with JWT
    │
    ├── docker-compose.yml
    └── README.md

🐳 Run Locally with Docker

  git clone https://github.com/your-username/todo-app.git
  cd todo-app
  docker-compose up --build

    Frontend: http://localhost:3000

    Backend: http://localhost:5000

🌍 Live Demo

    🖥️ Frontend: [link](https://todo-frontend-c92r.onrender.com)

    🔗 Backend:  [link](https://todo-backend-herc.onrender.com)

