import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

function Home() {
  const [homestays, setHomestays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

fetch(`${import.meta.env.VITE_API_URL}/api/homestays`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch homestays");
        }

        return response.json();
      })
      .then((data) => {
        setHomestays(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Unable to load homestays. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          padding: "20px",
        }}
      >
        {loading && <Loader text="Loading homestays..." />}

        {error && <Toast type="error" message={error} />}

        {!loading && !error && homestays.length === 0 && (
          <p>No homestays available yet.</p>
        )}

        {!loading &&
          !error &&
          homestays.map((homestay) => (
            <Card
              key={homestay._id}
              title={homestay.name}
              description={`${homestay.location} - ₹${homestay.price} per night`}
            />
          ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;