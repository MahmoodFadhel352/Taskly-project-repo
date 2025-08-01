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
```plaintext
+------------------+
|      User        |
|------------------|
| • name           |
| • email          |
| • password       |
| • role           |
| • projects[]     |
| • tasks[]        |
+--------+---------+
         |
         v
+------------------+        +------------------+
|     Project      |<------ |      Task        |
|------------------|        |------------------|
| • title          |        | • title          |
| • description    |        | • description    |
| • deadline       |        | • status         |
| • teamMembers[]  |        | • dueDate        |
| • tasks[]        |        | • assignee       |
+------------------+        | • project        |
                            +------------------+
```
## 📊 Routes Table
| Method | Route                | Description                            | Access  |
| ------ | -------------------- | -------------------------------------- | ------- |
| GET    | `/`                  | Home page (overview of projects/tasks) | Auth    |
| GET    | `/users/register`    | Registration form                      | Public  |
| POST   | `/users/register`    | Register new user                      | Public  |
| GET    | `/users/login`       | Login form                             | Public  |
| POST   | `/users/login`       | Authenticate user                      | Public  |
| GET    | `/users/profile/:id` | View profile & assigned tasks          | Auth    |
| GET    | `/projects`          | List all projects                      | Auth    |
| GET    | `/projects/new`      | New project form                       | Manager |
| POST   | `/projects`          | Create project                         | Manager |
| GET    | `/projects/:id`      | Show project & its tasks               | Auth    |
| PUT    | `/projects/:id`      | Update project                         | Manager |
| DELETE | `/projects/:id`      | Delete project                         | Manager |
| GET    | `/tasks/new`         | New task form                          | Manager |
| POST   | `/tasks`             | Create task                            | Manager |
| GET    | `/tasks/:id`         | Show task details                      | Auth    |
| PUT    | `/tasks/:id`         | Update task (status, assignee, etc.)   | Manager |
| DELETE | `/tasks/:id`         | Delete task                            | Manager |

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
├── models/                     
│   ├── db.js                  
│   ├── User.js                
│   ├── Project.js             
│   └── Task.js                
│
├── controllers/               
│   ├── user/
│   │   ├── userDataController.js    
│   │   ├── userRouteController.js   
│   │   └── userViewController.js    
│   │
│   ├── project/
│   │   ├── projectDataController.js
│   │   ├── projectRouteController.js
│   │   └── projectViewController.js
│   │
│   └── task/
│       ├── taskDataController.js
│       ├── taskRouteController.js
│       └── taskViewController.js
│
├── views/                      
│   ├── projects/
│   │   ├── Index.jsx           
│   │   ├── Show.jsx            
│   │   └── Create.jsx          
│   ├── tasks/
│   │   ├── Index.jsx           
│   │   └── Create.jsx          
│   ├── users/
│   │   ├── Login.jsx           
│   │   ├── Register.jsx        
│   │   └── Profile.jsx         
│   └── Layout.jsx              
│
├── public/                     
│   ├── css/
│   │   └── style.css           
│   └── images/
│       └── taskly-logo.png     
│
├── .env                        
├── app.js                      # Express app configuration (middleware, view engine, routes wired)
├── server.js                   # Actual process entry point; imports app.js and starts the listener
├── .gitignore                 # Git ignore rules
└── package.json

```