import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");

  const handleBooking = (event) => {
    event.preventDefault();

    setMessage("Booking request submitted successfully! 🏔️");
  };

  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "70vh",
          padding: "50px 20px",
          background: "#f5f7f2",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "auto",
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          }}
        >
          <h1 style={{ color: "#2e7d32" }}>Book Your Stay 🏔️</h1>

          <p>Fill in the details to book your Bhudakedar stay.</p>

          <form onSubmit={handleBooking}>
            <label>Guest Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              style={inputStyle}
            />

            <label>Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              required
              style={inputStyle}
            />

            <label>Check-in</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
              style={inputStyle}
            />

            <label>Check-out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
              style={inputStyle}
            />

            <label>Number of Guests</label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "#2e7d32",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Confirm Booking
            </button>
          </form>

          {message && (
            <p style={{ color: "#2e7d32", marginTop: "20px" }}>
              {message}
            </p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  marginBottom: "15px",
  boxSizing: "border-box",
  border: "1px solid #ccc",
  borderRadius: "6px",
};

export default Booking;