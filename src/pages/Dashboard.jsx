import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

function Dashboard() {
  const [homestays, setHomestays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const token = localStorage.getItem("token");

  // Fetch user's homestays
  const fetchHomestays = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/homestays`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }

        return response.json();
      })
      .then((data) => {
        setHomestays(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load dashboard data.");
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!token) {
      return;
    }

    fetchHomestays();
  }, [token]);

  // Start editing
  const handleEdit = (homestay) => {
    setEditingId(homestay._id);
    setEditName(homestay.name);
    setEditLocation(homestay.location);
    setEditPrice(homestay.price);
    setMessage("");
    setError("");
  };

  // Update homestay
  const handleUpdate = async (id) => {
    try {
      setMessage("");
      setError("");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/homestays/${id}`
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: editName,
            location: editLocation,
            price: Number(editPrice),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update homestay");
      }

      setMessage("Homestay updated successfully!");
      setEditingId(null);

      fetchHomestays();
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  // Delete homestay
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this homestay?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      setMessage("");
      setError("");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/homestays/${id}`
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete homestay");
      }

      setMessage("Homestay deleted successfully!");

      fetchHomestays();
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Navbar />

      <main style={{ padding: "40px" }}>
        <h1>Dashboard</h1>

        <p>Welcome to your Pahadi Stay dashboard.</p>

        <button
          onClick={() => {
            window.location.href = "/create-homestay";
          }}
          style={{
            padding: "10px 20px",
            marginTop: "15px",
            cursor: "pointer",
          }}
        >
          Create Homestay
        </button>

        {loading && <Loader text="Loading dashboard..." />}

        {error && <Toast type="error" message={error} />}

        {message && <p style={{ color: "green" }}>{message}</p>}

        {!loading && !error && homestays.length === 0 && (
          <p>No homestays available yet.</p>
        )}

        {!loading && !error && homestays.length > 0 && (
          <div>
            <h2>Available Homestays</h2>

            {homestays.map((homestay) => (
              <div
                key={homestay._id}
                style={{
                  border: "1px solid #ccc",
                  padding: "20px",
                  marginTop: "15px",
                  borderRadius: "10px",
                }}
              >
                {editingId === homestay._id ? (
                  <>
                    <h3>Edit Homestay</h3>

                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      placeholder="Homestay name"
                    />

                    <br />
                    <br />

                    <input
                      type="text"
                      value={editLocation}
                      onChange={(e) => setEditLocation(e.target.value)}
                      placeholder="Location"
                    />

                    <br />
                    <br />

                    <input
                      type="number"
                      value={editPrice}
                      onChange={(e) => setEditPrice(e.target.value)}
                      placeholder="Price"
                    />

                    <br />
                    <br />

                    <button onClick={() => handleUpdate(homestay._id)}>
                      Save Changes
                    </button>

                    <button
                      onClick={() => setEditingId(null)}
                      style={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <h3>{homestay.name}</h3>

                    <p>Location: {homestay.location}</p>

                    <p>Price: ₹{homestay.price} per night</p>

                    <button onClick={() => handleEdit(homestay)}>
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(homestay._id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;