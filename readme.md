# ChatApp

This repository contains the code for the ChatApp, built with Next.js for the frontend and a separate backend.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14.x or later)
- Docker

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository

Open your terminal and run the following command to clone the repository:

```bash
git clone https://github.com/sparshkr/ChatApp
cd cd ChatApp
```

### 2. Install Frontend Dependencies

Navigate to the frontend directory and install the necessary dependencies:

```
cd frontend
npm install
```

### 3. Install Backend Dependencies

Navigate to the backend directory and install the necessary dependencies:

````

cd ../backend
npm install```

### 4. Set Up Environment Variables

Create a .env file in both the frontend and backend directories and add your environment variables. For example:

#### Frontend .env:

````

GOOGLE_CLIENT_ID = YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET = YOUR_GOOGLE_CLIENT_SECRET

NEXT_AUTH_URL = http://localhost:3000
NEXT_AUTH_SECRET = YOUR_NEXTAUTH_SECRET

NEXT_PUBLIC_APP_URL = http://localhost:3000
NEXT_PUBLIC_BACKEND_URL = http://localhost:8000

JWT_SECRET = YOUR_JWT_SECRET
NEXTAUTH_SECRET = YOUR_NEXTAUTH_SECRET```

#### Backend .env:

```
DATABASE_URL=YOUR_DB_URL

DB_PASS = YOUR_DB_PASSWORD

JWT_SECRET = YOUR_JWT_SECRET
```

Sign up or log in to Supabase.
Create a new project and configure your database.
Note the Supabase URL and Service Role Key for your environment variables.

### 6. Run Redis in Docker

You can run Redis using Docker with the following command:

```
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```

### 7. Run Prisma Migrations (Backend)

Run the following command to apply any necessary migrations in the backend:

```
npx prisma migrate dev --name init
```

### 8. Start the Development Servers

Navigate back to the frontend directory and start the frontend server:

```
cd ../frontend
npm run dev
```

In a new terminal window, navigate to the backend directory and start the backend server:

```
cd ../backend
npm run dev
```

### 9. Access the Application

Open your browser and go to http://localhost:3000 to see your ChatApp in action.

Available Scripts
In the project directories, you can run the following scripts:

Frontend:

```
npm run dev: Starts the development server for the frontend.
npm run build: Builds the frontend application for production.
npm run start: Starts the production server for the frontend.
```

Backend:

```
npm run dev
```

It Starts the development server for the backend.

## Dependencies

This project uses the following libraries:

- Next.js: Framework for server-rendered React applications.
- Socket.io: For real-time communication.
- NextAuth.js: For authentication.
- React Hook Form: For managing forms in React.
- Tailwind CSS: For styling the application.
- Prisma: For database management.
- Redis: For scaling the ChatApp
