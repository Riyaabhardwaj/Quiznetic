
# Quiznetic

A full-stack quiz application built with React and Node.js, enabling users to take quizzes and track their results.

## Features

- **User Authentication**: Secure signup and login functionality
- **Quiz Taking**: Interactive quiz interface for users to answer questions
- **Result Tracking**: View and manage quiz results with performance metrics
- **User Dashboard**: Personalized dashboard to view quiz history
- **Responsive Design**: Clean, modern UI built with React

## Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Fast build tool and development server
- **CSS** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (configured in `db.js`)
- **.env** - Environment configuration

## Project Structure

```
Quiz App/
├── backend/          (Node.js + Express API)
│   ├── controllers/  (Business logic)
│   ├── models/       (Database schemas)
│   ├── routes/       (API endpoints)
│   ├── middleware/   (Auth & utilities)
│   ├── config/       (Database config)
│   └── server.js     (Entry point)
└── frontend/         (React + Vite)
    ├── src/
    │   ├── components/  (React components)
    │   ├── pages/       (Page components)
    │   └── assets/      (Static data & styles)
    └── vite.config.js
```

## Getting Started

1. Install dependencies in both `frontend` and `backend` directories
2. Configure `.env` files with database and API URLs
3. Run backend: `npm start`
4. Run frontend: `npm run dev`
