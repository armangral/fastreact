# React + FastAPI CRUD App

This template provides a comprehensive setup for building a CRUD (Create, Read, Update, Delete) application with **React.js** as the frontend framework and **FastAPI** as the backend framework. The backend utilizes **PostgreSQL** as the database system and **SQLAlchemy** as the ORM (Object-Relational Mapping) tool. For frontend development, this template integrates **React Router** for navigation, **React Query** for data fetching, **UseForm** for form management, and **Tailwind CSS** for styling.

## Features

- **React.js**: A JavaScript library for building user interfaces.
- **FastAPI**: A modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **SQLAlchemy**: A SQL toolkit and Object-Relational Mapping (ORM) library for Python.
- **React Router**: Declarative routing for React.js applications.
- **React Query**: A data-fetching library for React.
- **UseForm**: A React hook for managing form state and validation.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs.
- **JWT Authentication**: JSON Web Token (JWT) for secure authentication between frontend and backend.

## Setup Instructions

### Backend Setup

1. **Clone the Repository:**

   ```bash
   git clone <https://github.com/armangral/fastreact.git>
   ```

2. **Navigate to the Backend Directory:**

   ```bash
   cd backend
   ```

3. **Install Dependencies:**

   ```bash
   pip install -r requirements.txt

   ```

4. **Set up PostgreSQL Database:**

- Install PostgreSQL if not already installed.
- Create a new PostgreSQL database.
- Update the database connection URL in backend/app/db/database.py.

5. **Run Migrations:**:

   ```bash
   alembic upgrade head

   ```

6. **Start the Backend Server:**:

   ```bash
   uvicorn app.main:app --reload
   ```

The FastAPI server should now be running on http://localhost:8000.

### Frontend Setup

1. **Navigate to the Frontend Directory:**

   ```bash
   cd frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install

   ```

3. **Start the Frontend Development Server:**

   ```bash
   npm run dev
   ```

The React development server should now be running on http://localhost:5173.

### Folder Structure

```bash
 project-root/
 ├── backend/           # Backend FastAPI application
 │    ├── app/
 │   │   ├── routers/   # API routes
 │   │   ├── db/        # Database models
 │   │   ├── schemas/   # Pydantic models
 │   │   └── main.py    # FastAPI application instance
 │   ├── alembic.ini    # Alembic configuration for database migrations
 │   └── ...
 ├── frontend/          # Frontend React application
 │   ├── public/        # Static assets
 │   ├── src/
 │   │   ├── features/  # Application features
 │   │   ├── ui/        # Reusable UI components
 │   │   ├── pages/     # React components for each page
 │   │   ├── services/  # Frontend API services
 │   │   ├── utils/     # Utility functions
 │   │   ├── App.js     # Main application component
 │   │   └── ...
 │   ├── ...
 ├── ...
 └── README.md          # Project README file
```

### Usage

- **API Documentation:** Visit http://localhost:8000/docs for the interactive API documentation provided by FastAPI.
- **Frontend Development:** Start developing the frontend by modifying files in the frontend/src directory.
- **Backend Development:** Extend backend functionality by modifying files in the backend/app directory.
- **Authentication:** Implement authentication using JWT by integrating with FastAPI's authentication system.

### License

- This project is licensed under the MIT License.

Feel free to customize and extend this template according to your project requirements! Happy coding! 🚀
