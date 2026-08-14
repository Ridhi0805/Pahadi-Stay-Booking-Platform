import { useState } from "react";

function Booking() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleBooking = () => {
    if (!name || !date) {
      alert("Please enter your name and select a date.");
      return;
    }

    alert(`Booking confirmed for ${name} on ${date}!`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px",
        background: "#f5f7f2",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#1b5e20" }}>
        🏔️ Book Your Stay
      </h1>

      <p>Welcome to the Bhudakedar Booking Page</p>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          display: "block",
          margin: "15px auto",
          padding: "12px",
          width: "300px",
        }}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{
          display: "block",
          margin: "15px auto",
          padding: "12px",
          width: "300px",
        }}
      />

      <button
        onClick={handleBooking}
        style={{
          padding: "12px 25px",
          background: "#2e7d32",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Confirm Booking
      </button>
    </div>
  );
}

export default Booking;