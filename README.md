# ✅ Taskly
![Taskly Logo](./public/images/taskly-logo.png)
Taskly is a simple yet powerful **Task Manager application** designed to help teams and individuals organize projects, manage tasks, and meet deadlines efficiently.  
It is built with **Node.js, Express, MongoDB, and JSX** using an **MVC architecture**.

---

## 📌 Core Concepts

### 👤 User Management
- Users can **register, login, and manage their profile**.
- Roles:
  - **Admin**: Full access to manage projects, tasks, and users.
  - **Manager**: Can create projects and assign tasks.
  - **Member**: Can view and update their own tasks.

### 📂 Projects
- Each project has:
  - Title  
  - Description  
  - Deadline  
  - Assigned Team Members  
- Projects act as containers for tasks.

### 📝 Tasks
- Each task belongs to a project and has:
  - Title & description  
  - Status: *To Do*, *In Progress*, *Completed*  
  - Assignee (a user)  
  - Due date  

### 📅 Deadlines
- Projects and tasks can have deadlines.
- Tasks marked overdue will be highlighted for better visibility.

---

## 🏗️ Architecture
The application follows the **MVC pattern**:

- **Models**: Define data structures (Users, Projects, Tasks).
- **Views**: jsx templates render server-side HTML.
- **Controllers**: Handle business logic and connect routes with models.

---

## 📊 Tech Stack
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Frontend**: JSX (server-side rendering)
- **Styling**: CSS (custom or Bootstrap/Tailwind)
- **Authentication**: Bcrypt for password hashing


---

## 📂 Project Structure

```plaintext
taskly/
│
├── models/                     # Database + Schemas
│   ├── db.js                   # MongoDB connection file
│   ├── User.js                 # User schema
│   ├── Project.js              # Project schema
│   └── Task.js                 # Task schema
│
├── controllers/                # Route logic
│   ├── userController.js       # Handles user registration, login, profiles
│   ├── projectController.js    # Handles CRUD for projects
│   └── taskController.js       # Handles CRUD for tasks
│
├── routes/                     # Express route files
│   ├── userRoutes.js           # Routes for authentication and profiles
│   ├── projectRoutes.js        # Routes for projects
│   └── taskRoutes.js           # Routes for tasks
│
├── views/                      # jsx templates
│   ├── projects/               # Project pages
│   │   ├── index.jsx           # List projects
│   │   ├── show.jsx            # Show single project
│   │   └── create.jsx          # Create new project
│   ├── tasks/                  # Task pages
│   │   ├── index.jsx           # List tasks
│   │   └── create.jsx          # Create new task
│   ├── users/                  # Authentication & profile pages
│   │   ├── login.jsx           # Login page
│   │   ├── register.jsx        # Registration page
│   │   └── profile.jsx         # User profile with tasks
│   └── layout.jsx              # Base layout template
│
├── public/                     # Static files
│   ├── css/
│   │   └── style.css           # Stylesheet
│   └── images/
│       └── taskly-logo.png     # App logo
│
├── .env                        # Environment variables
├── app.js                      # Express application entry point
└── package.json                # Dependencies and scripts
