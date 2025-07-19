Bug Tracker - Week 6 MERN Testing and Debugging Assignment
Overview
This project is part of the Week 6 PLP MERN stack assignment focused on testing and debugging a MERN application. The app is a simple Bug Tracker that allows users to report, view, and manage bugs.

This repository includes:

Unit tests for backend routes and models

Integration tests using Jest and Supertest

End-to-end tests using Cypress

Debugging practices to resolve issues in both backend and frontend

Project Structure
bash
Copy
Edit
mern-bug-tracker/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── App.tsx
│   │   └── bugService.ts
│   └── cypress/
│       └── e2e/
│           └── bug-tracker.cy.js
├── server/                  # Express backend
│   ├── src/
│   │   ├── routes/
│   │   │   └── bugRoutes.js
│   │   ├── models/
│   │   │   └── Bug.js
│   │   └── index.js
│   └── tests/
│       └── integration/
│           └── bugRoutes.test.js
└── README.md
Installation and Setup
Backend
Navigate to the server directory

bash
Copy
Edit
cd server
Install dependencies

nginx
Copy
Edit
npm install
Run development server

arduino
Copy
Edit
npm run dev
Run tests with coverage

arduino
Copy
Edit
npm run test
Frontend
Navigate to the client directory

bash
Copy
Edit
cd client
Install dependencies

nginx
Copy
Edit
npm install
Start the frontend

arduino
Copy
Edit
npm run dev
Run Cypress tests

arduino
Copy
Edit
npx cypress open
Testing Strategy
Backend Tests
Tool: Jest and Supertest

Coverage: Includes integration tests for bug creation and retrieval

Test Path: server/tests/integration/bugRoutes.test.js

Data: Uses mongodb-memory-server for isolated test database

End-to-End Testing
Tool: Cypress

Test Path: client/cypress/e2e/bug-tracker.cy.js

Functionality Tested: UI interaction, form submission, bug list rendering

Debugging Techniques Applied
Fixed CORS issue by adding cors middleware to Express backend

Verified MongoDB connection for isolated testing using mongodb-memory-server

Handled incorrect file paths and module resolution issues during test execution

Verified that the Express server was correctly exporting the app for testing

Screenshots
Backend Test Coverage
Frontend Unit Tests
Cypress E2E Test Result

Tools Used
React

Express

MongoDB

Mongoose

Jest

Supertest

Cypress

MongoMemoryServer

Axios

Author
Kennedy Mbaluka Peter