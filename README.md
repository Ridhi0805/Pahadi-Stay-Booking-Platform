Pahadi Stay Booking Platform

A web-based homestay booking platform for Uttarakhand that enables direct booking requests, promotes eco-tourism, and supports local communities through a simple and user-friendly interface.

Tech Stack

- React JS
- Node.js
- Express.js
- MongoDB
- Tailwind CSS

Features

- Homestay Listings
- Booking Requests
- Tourist Attraction Guide
- AI Travel Assistant
- JWT Authentication
- Protected Routes
- RESTful Express API
- MongoDB Atlas Database
- AI-powered Property Description Generator
- Responsive React Frontend

Project Structure

pahadi_stay_react/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   └── services/
│
├── public/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── data/
│   ├── server.js
│   ├── seed.js
│   ├── package.json
│   └── .env.example
│
├── package.json
└── README.md

Installation

Clone the Repository

git clone https://github.com/Ridhi0805/Pahadi-Stay-Booking-Platform.git

Move into the Project Folder

cd Pahadi-Stay-Booking-Platform

Frontend Setup

Install frontend dependencies:

npm install

Run the frontend:

npm run dev

Frontend runs on:

http://localhost:5173

Backend Setup

Navigate to the backend folder:

cd backend

Install backend dependencies:

npm install

Create a ".env" file inside the "backend" folder.

Example:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:5173
FRONTEND_URL=your_frontend_url
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CALLBACK_URL=http://localhost:5000/api/auth/google/callback
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
GEMINI_API_KEY=your_google_gemini_api_key

Start the backend:

npm run dev

or:

npm start

Backend runs on:

http://localhost:5000

Environment Variables

Create a ".env" file inside the "backend" folder.

Never commit the ".env" file or database credentials to GitHub.

Use placeholder values in documentation:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:5173
FRONTEND_URL=your_frontend_url
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CALLBACK_URL=http://localhost:5000/api/auth/google/callback
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
GEMINI_API_KEY=your_google_gemini_api_key

Database

The Pahadi Stay application uses MongoDB Atlas as its cloud-hosted database and Mongoose as the ODM (Object Data Modeling) library.

Database Features

- Persistent cloud storage
- MongoDB Atlas integration
- Mongoose schema validation
- CRUD operations
- Fast document queries
- Environment variable support

Database Collections

- Users
- Homestays
- Bookings

Database Relationships

- One User can create multiple Bookings.
- One User can own multiple Homestays.
- One Homestay can have multiple Bookings.

AI Feature

The AI feature uses the Google Gemini API to assist with property description generation and travel-related functionality.

AI Property Description Generator

The AI Property Description Generator allows property owners to create professional listing descriptions before publishing a property.

Key Capabilities

- Custom property details
- Location
- Price per night
- Bedrooms
- Bathrooms
- Property type
- Amenities
- Additional notes
- AI-generated property descriptions
- Copy generated descriptions
- Apply generated descriptions to property forms

How to Obtain a Google Gemini API Key

1. Visit Google AI Studio.
2. Sign in with your Google account.
3. Create an API key.
4. Add the API key to your "backend/.env" file.

Example:

GEMINI_API_KEY=your_google_gemini_api_key

Never publish your real API key on GitHub.

REST API Endpoints

Method| Endpoint| Access| Description
POST| "/api/auth/register"| Public| Register a new user
POST| "/api/auth/login"| Public| Login user
GET| "/api/auth/me"| Private| Get authenticated user profile
GET| "/api/properties"| Public| Get all properties
GET| "/api/properties/:id"| Public| Get property by ID
POST| "/api/properties"| Private| Create a property
PUT| "/api/properties/:id"| Private| Update a property
DELETE| "/api/properties/:id"| Private| Delete a property
POST| "/api/ai/property-description"| Private| Generate AI property description

Security

- Environment variables are stored in ".env".
- ".env" files should be included in ".gitignore".
- Never commit database passwords, API keys, JWT secrets, or OAuth credentials to GitHub.
- Use ".env.example" with placeholder values for documentation.

Project Status

The Pahadi Stay Booking Platform is being developed as a full-stack web application for connecting travellers with local homestays in Uttarakhand.