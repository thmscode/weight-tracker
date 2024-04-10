# TRACKER - Fitness App

TRACKER is a full-stack (offline) fitness web application where users can explore exercises / workouts, and track their weight-loss progress. Exercises are retrieved from the [Exercises API](https://api-ninjas.com/api/exercises) by [API Ninjas](https://api-ninjas.com/).

## Features
* Fully responsive user interface
* CRUD functionality
* Protected routes accessible only by authenticated users
* Data persistence (MongoDB Atlas)

## Technologies
**Front-End:** React, React Router v6, Material UI

**Back-End:** MongoDB Atlas + Mongoose, Express.js, Node

**Authentication:** Auth0

**Validation:** Yup

**Security:** cors, Helmet

**Others:** Formik, Chart.js

## Installation
**Required Accounts:** MongoDB (& Cluster), API Ninjas, Auth0

**Client Directory**
* Create a `.env.local` file in the root client directory
* Create environment variables named `API_NINJAS_KEY`, `AUTH0_DOMAIN`, `AUTH0_CLIENT_ID`, `AUTH0_AUDIENCE` and provide them with their respective keys

**Server Directory**
* Create a `.env` file in the root server directory
* Create environment variables named `MONGO_URL`, `PORT`, `AUTH0_AUDIENCE`, and `AUTH0_DOMAIN`
  * `MONGO_URL` -> Connection string to your cluster
  * `PORT` -> 3001
  * `AUTH0_AUDIENCE` -> Auth0 project Audience URL
  * `AUTH0_DOMAIN` -> Auth0 domain name

## Usage
* Client Directory: `npm start`
* Server Directory:
  * Compile: `npm run build`
  * Start: `npm run start`

## Notes
* UI flashes when visiting different pages on the application while unauthenticated (not logged in)
  * Cause might be the `isLoading` hook from the `auth0-react` sdk
  * Not exactly sure why this happens, nor how to fix it...