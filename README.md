# Student Management Dashboard (MongoDB Atlas)

The existing React dashboard design and CSS are preserved. Add, read, update and delete operations use the Express API and MongoDB Atlas.

Atlas target: database `Dashboard`, collection `Student-Dashboard`; fields `firstName`, `lastName`, `email`.

## Backend
1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env` and set `MONGO_URI` using your Atlas connection string with database `Dashboard`. Keep `.env` private.
4. `npm start` (API on port 5000).

## Frontend
1. In another terminal: `cd frontend`
2. `npm install`
3. Optionally copy `.env.example` to `.env`.
4. `npm run dev` and open the Vite URL.

The dashboard loads students from MongoDB; the original hard-coded demo rows are no longer used.
