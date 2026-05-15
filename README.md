# Employee Management System

Employee Management System is a full-stack web application built using React, Node.js, Express, and MongoDB. The project allows users to manage employee records efficiently by creating, editing, viewing, and deleting employee details. The frontend was developed using React with Vite while the backend provides REST APIs connected to MongoDB.

###  Project Structure and Setup

Started by organizing the application into frontend and backend sections.

Backend structure includes:

- APIs
- Models
- Middleware
- Environment configuration
- Express server setup

Frontend structure includes:

- Components
- Context API
- Store management
- Assets
- Layout components

Main technologies used:

- React + Vite
- Express.js
- MongoDB
- JWT Authentication
- Tailwind CSS

---

###  Employee CRUD Operations

Implemented complete employee management functionality.

Features added:

- Add Employee
- View Employee List
- Edit Employee Details
- Delete Employee Records

Components involved:

- `CreateEmp.jsx`
- `Employee.jsx`
- `EditEmployee.jsx`
- `ListOfEmps.jsx`

Application flow:

Create Employee  
↓  
Store in Database  
↓  
Display Employee List  
↓  
Edit/Delete Records  
↓  
Update UI

---

###  Routing and Layout Management

Implemented React Router and layout-based navigation.

Components:

- `RootLayout.jsx`
- `Home.jsx`
- `Header.jsx`
- `Footer.jsx`

Learned concepts:

- Route handling
- Nested layouts
- Navigation between pages
- Component rendering

---

###  State Management

Implemented global state handling using Context API and Store management.

Folders used:

- `context`
- `store`

Purpose:

- Share application state globally
- Avoid unnecessary prop drilling
- Manage data efficiently

---

###  Backend API Integration

Integrated frontend and backend through APIs.

Backend includes:

- `EmployeeAPI.js`
- `Employeemodel.js`
- `verifyToken.js`

Implemented:

- API requests
- Database operations
- JWT verification
- Request handling

Project flow:

React Frontend  
↓  
Axios API Requests  
↓  
Express Backend  
↓  
MongoDB Database  
↓  
Updated UI

---

###  Deployment

Frontend deployed on Vercel:

https://employee-week-6-4nfjv9w0f-cognitiveking2007s-projects.vercel.app

Backend deployed on Render:

https://employee-week-6.onrender.com

Deployment stack:

Frontend (Vercel)  
↓  
API Requests  
↓  
Render Backend  
↓  
MongoDB Atlas

---

### Project Repository

GitHub Repository:

https://github.com/cognitiveking2007/ATP_24EG105G42/tree/main/week6/Assignment-2%3AEmployee%20Management%20System

---

### Overall Summary

Through this project I learned how frontend and backend applications communicate through APIs and how to structure a full-stack application.
I became more comfortable with CRUD operations, React routing, state management using Context API, JWT authentication, and deployment using Vercel and Render. 
This project also improved my understanding of real-world application flow and project organization.
