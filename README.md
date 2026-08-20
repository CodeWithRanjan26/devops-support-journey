# DevOps Support Journey

Learn. Practice. Troubleshoot. Deploy.

A full-stack learning platform for DevOps, application support, production support, cloud support, SRE, and interview preparation.

## Stack

- React, TypeScript, Vite, React Router, Bootstrap 5, Lucide React
- Node.js, Express, TypeScript, JWT, bcryptjs, Mongoose, MongoDB

## Run locally

1. Copy `.env.example` to `server/.env` and set `MONGO_URI` and `JWT_SECRET`.
2. Install root, client, and server dependencies: `npm install`, `npm --prefix client install`, `npm --prefix server install`.
3. Seed the complete curriculum: `npm run seed`.
4. Start both apps: `npm run dev`.
5. Open http://localhost:5173.

MongoDB must be running locally or use an Atlas connection string. The client can run in demo mode before authentication; API-backed auth, notes, progress, resources, study sessions, and interview state are implemented in the server.

## Structure

- `client`: responsive React learning experience
- `server`: REST API, Mongoose models, auth middleware, and curriculum seed

## API

Auth: `/api/auth/register`, `/api/auth/login`, `/api/auth/me`\nModules/topics: `/api/modules`, `/api/topics/:id`\nProgress: `/api/progress`, `/api/progress/step/:id`\nNotes/resources/study/interview/review/analytics routes are grouped under their respective prefixes.
