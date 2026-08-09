Pahadi Stay Booking Platform

A full-stack web application for discovering and managing homestays in Uttarakhand, designed to promote eco-tourism, support local communities, and provide travellers with a simple and user-friendly booking experience.



Live Application: https://pahadi-stay-booking-platform.vercel.app/

GitHub Repository: https://github.com/Ridhi0805/Pahadi-Stay-Booking-Platform

---

Screenshots

Home Page

"Home Page" (screenshots/home.png)

Login / Signup

"Login Page" (screenshots/login.png)

Dashboard

"Dashboard" (screenshots/dashboard.png)

Create Homestay / AI Feature

"Create Homestay" (screenshots/create-homestay.png)

«Replace the screenshot paths above with the actual image filenames in your repository.»

---

Features

- 🏡 Homestay listing and management
- 🔐 JWT-based user authentication
- 🛡️ Protected routes and authenticated API requests
- ➕ Create new homestays
- ✏️ Edit existing homestays
- 🗑️ Delete homestays with confirmation
- 📍 Location-based homestay information
- 💰 Price-per-night information
- 🖼️ Homestay image support
- 🤖 AI-powered property description generation
- 🧭 Tourist attraction and travel information
- 📱 Responsive React frontend
- 🔄 RESTful backend API
- ☁️ MongoDB Atlas cloud database
- ⚡ Loading, error, empty, and success states
- 🚀 Production deployment using Vercel and Render

---

Tech Stack

Frontend

- React.js
- Vite
- React Router DOM
- Tailwind CSS
- JavaScript (ES6+)

Backend

- Node.js
- Express.js
- JWT Authentication
- bcrypt.js
- REST API

Database

- MongoDB Atlas
- Mongoose

AI

- Google Gemini API

Deployment

- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

---

Project Structure

Pahadi-Stay-Booking-Platform/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   └── ui/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   └── services/
│
├── public/
│
├── backend/
│   ├── models/
│   ├── middleware/
│   ├── authMiddleware.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── package.json
├── .gitignore
└── README.md

The frontend contains the React user interface, reusable components, pages, routing, and services.

The backend contains the Express server, authentication middleware, MongoDB models, REST API endpoints, and server-side functionality.

---

Installation & Setup

Prerequisites

Before running the project locally, make sure you have:

- Node.js installed
- npm installed
- MongoDB Atlas account
- Git installed
- Google Gemini API key (for AI functionality)

---

1. Clone the Repository

git clone https://github.com/Ridhi0805/Pahadi-Stay-Booking-Platform.git

Move into the project directory:

cd Pahadi-Stay-Booking-Platform

---

2. Frontend Setup

Install frontend dependencies:

npm install

Create a frontend ".env" file if required:

VITE_API_URL=http://localhost:5000

Start the frontend development server:

npm run dev

The frontend will normally run at:

http://localhost:5173

---

3. Backend Setup

Open a new terminal and navigate to the backend:

cd backend

Install backend dependencies:

npm install

Create a ".env" file inside the "backend" folder.

Example:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_gemini_api_key

Start the backend:

npm start

or, if a development script is configured:

npm run dev

The backend will normally run at:

http://localhost:5000

---

Environment Variables

Never commit real credentials or API keys to GitHub.

Frontend

VITE_API_URL=http://localhost:5000

Backend

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_gemini_api_key

For production deployment, the corresponding environment variables should be configured through the hosting platform's environment-variable settings.

---

API Documentation

The application provides RESTful APIs for authentication and homestay management.

Authentication

Register User

POST /api/auth/signup

Access: Public

Example request:

{
  "name": "rid",
  "email": "user@example.com",
  "password": "password123"
}

Login User

POST /api/auth/login

Access: Public

Example request:

{
  "email": "user@example.com",
  "password": "password123"
}

The response contains a JWT token that is used for protected requests.

---

Homestays

Get All Homestays

GET /api/homestays

Access: Public

Returns the available homestays from MongoDB.

Create Homestay

POST /api/homestays

Access: Private

Requires:

Authorization: Bearer <JWT_TOKEN>

Example request:

{
  "name": "Bhudakedar Homestay",
  "location": "Bhudakedar, Uttarakhand",
  "price": 1500,
  "image": "https://example.com/homestay.jpg"
}

Update Homestay

PUT /api/homestays/:id

Access: Private

Requires a valid JWT token.

Example request:

{
  "name": "Bhudakedar Mountain Homestay",
  "location": "Bhudakedar, Uttarakhand",
  "price": 1800
}

Delete Homestay

DELETE /api/homestays/:id

Access: Private

Requires a valid JWT token.

---

AI Feature

The platform includes an AI-powered property description generator using the Google Gemini API.

AI Property Description Generator

The feature helps property owners create professional descriptions for their listings based on property information.

Supported Information

- Property details
- Location
- Price per night
- Bedrooms
- Bathrooms
- Property type
- Amenities
- Additional notes

Capabilities

- Generate professional property descriptions
- Use property-specific information
- Copy generated descriptions
- Apply generated descriptions to property forms

Setting Up Gemini API

1. Open Google AI Studio.
2. Sign in with a Google account.
3. Generate an API key.
4. Add the key to "backend/.env".

Example:

GEMINI_API_KEY=your_google_gemini_api_key

Never publish the actual API key in the repository.

---

Database

The application uses MongoDB Atlas as its cloud-hosted database and Mongoose for data modeling and database operations.

Database Features

- Cloud-based persistent storage
- Mongoose schema validation
- CRUD operations
- Secure environment-based connection
- MongoDB document-based data storage

Main Collections

- Users
- Homestays
- Bookings (if enabled in the current implementation)

Relationships

- A user can own multiple homestays.
- A user can create multiple bookings.
- A homestay can be associated with multiple bookings.

---

Authentication & Security

The application uses JWT-based authentication to secure protected functionality.

Security practices include:

- Password hashing using bcrypt
- JWT-based authentication
- Protected API endpoints
- Authorization headers for authenticated requests
- Environment variables for sensitive configuration
- ".env" excluded from version control
- Placeholder values provided through ".env.example"

Never commit:

.env

or any real:

- Database credentials
- JWT secrets
- API keys
- OAuth credentials

---

Deployment

The application is deployed using:

Frontend

Vercel

https://pahadi-stay-booking-platform.vercel.app/

Backend

Render

https://pahadi-stay-booking-platform-1.onrender.com

Database

MongoDB Atlas

The production backend connects to MongoDB Atlas through an environment variable.

---

Architecture

The application follows a full-stack architecture:

React Frontend
      │
      │ REST API Requests
      ▼
Express.js Backend
      │
      │ Mongoose
      ▼
MongoDB Atlas

Authentication is handled using JWT tokens. Protected requests send the token through the "Authorization" header.

The AI functionality communicates with the Google Gemini API through the backend.

---

Known Limitations

- The application uses free-tier hosting services, so the backend may experience cold-start delays.
- Image handling currently uses image URLs rather than dedicated file uploads.
- AI functionality requires a valid Gemini API key.
- Some advanced booking and payment functionality may require further development.
- Availability and booking management can be expanded for production-scale usage.

---

Future Improvements

Possible future enhancements include:

- Online payment integration
- Real-time booking availability
- Google Maps integration
- User reviews and ratings
- Advanced search and filtering
- Image upload and cloud storage
- Host verification
- Email booking confirmations
- Improved AI travel recommendations
- Admin dashboard
- Mobile application

---

Credits & Acknowledgements

This project was developed as part of the TBI-GEU Web Development Internship (SIP 2026).

Technologies & Resources

- React.js
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Tailwind CSS
- Google Gemini API
- Vercel
- Render

AI-assisted development tools were used during the development and debugging process.

---

Project Status

Completed / Portfolio Ready

The Pahadi Stay Booking Platform is a full-stack web application focused on connecting travellers with local homestays in Uttarakhand.

The project demonstrates:

- Full-stack web development
- REST API development
- MongoDB database integration
- JWT authentication
- Protected routes
- CRUD operations
- AI integration
- Responsive frontend development
- Cloud deployment
- Production-oriented project documentation

---



Project: Pahadi Stay Booking Platform

Repository:
https://github.com/Ridhi0805/Pahadi-Stay-Booking-Platform