# 🍲 Recipe Data Collection and API Development (MERN Stack)

This project is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that parses recipe data from a JSON file, stores it in a database, exposes it through APIs, and displays it via a React-based UI. Users can search, filter, paginate, and view detailed recipe information.

## 🔧 Features

- ✅ Parse and insert JSON data into MongoDB  
- ✅ RESTful API built with Node.js and Express  
- ✅ Search recipes by title, cuisine, calories, rating, and time  
- ✅ Sort recipes by rating  
- ✅ Pagination and customizable limit per page  
- ✅ React frontend with:  
  - Table view of recipes  
  - Column-level search filters  
  - Pagination  
  - Drawer to view detailed recipe info  

## 🧱 Tech Stack

- Frontend: React, Axios  
- Backend: Node.js, Express.js  
- Database: MongoDB  
- Other: Mongoose, dotenv, CORS  

## 📁 Folder Structure

recipeapp/  
├── recipe-api-backend/       → Backend (Node.js + Express + MongoDB)  
├── recipe-frontend/          → Frontend (React)  

## 🚀 Getting Started

### Backend Setup

1. Navigate to backend:  
   cd recipe-api-backend  

2. Install dependencies:  
   npm install  

3. Create a `.env` file:  
   MONGO_URI=mongodb://localhost:27017/recipesssdb  
   PORT=5000  

4. Insert sample recipe data:  
   node data/insertSample.js  

5. Start the backend server:  
   node server.js  

### Frontend Setup

1. Navigate to frontend:  
   cd recipe-frontend  

2. Install dependencies:  
   npm install  

3. Create a `.env` file:  
   REACT_APP_API_URL=http://localhost:5000/api  

4. Start the frontend:  
   npm start  

## 🌐 API Endpoints

### GET /api/recipes  
- Paginated and sorted list of recipes by rating  
- Query Parameters:  
  - page (default = 1)  
  - limit (default = 10)  

### GET /api/recipes/search  
- Search recipes by:  
  - title (partial match)  
  - cuisine  
  - rating (≥)  
  - total_time (≤)  
  - calories (partial match in nutrients)  

## 💻 UI Features

- Table view with columns:  
  - Title (truncated)  
  - Cuisine  
  - Rating (as stars)  
  - Total Time  
  - Serves  

- Column filters for:  
  - Title  
  - Cuisine  
  - Rating  

- Pagination controls (15, 25, 50 per page)  
- Click a row to open recipe drawer with:  
  - Description  
  - Total, prep, cook time  
  - Nutrients (calories, fat, protein, etc.)  

## 📸 Screenshots

(Add screenshots of your working app UI here if needed.)

## 🌐 Deployment

(Update these after deployment)

- Frontend (Vercel): https://your-frontend-url.vercel.app  
- Backend (Render): https://your-backend-url.onrender.com  

## 🧠 Author

- Raghul S  
- GitHub: https://github.com/raghulS2004  


