import { useState } from "react";

function CreateHomestay() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");

    const token = localStorage.getItem("token");

    if (!token) {
      setError("Please login first.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/homestays`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: name,
            location: location,
            price: Number(price),
            image: image,
          }),
        }
      );

      const data = await response.json();

      console.log("Status:", response.status);
      console.log("Backend response:", data);

      if (!response.ok) {
        throw new Error(
          data.message || data.error || "Failed to create homestay"
        );
      }

      setMessage("Homestay created successfully!");

      setName("");
      setLocation("");
      setPrice("");
      setImage("");
    } catch (error) {
      console.error("Create homestay error:", error);
      setError(error.message);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Create Homestay</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Homestay Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter homestay name"
            required
          />
        </div>

        <br />

        <div>
          <label>Location</label>
          <br />
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter location"
            required
          />
        </div>

        <br />

        <div>
          <label>Price per night</label>
          <br />
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="Enter price"
            required
          />
        </div>

        <br />

        <div>
          <label>Image URL</label>
          <br />
          <input
            type="url"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            placeholder="Paste image URL"
          />
        </div>

        <br />

        <button type="submit">
          Create Homestay
        </button>
      </form>

      {message && (
        <p style={{ color: "green" }}>
          {message}
        </p>
      )}

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default CreateHomestay;