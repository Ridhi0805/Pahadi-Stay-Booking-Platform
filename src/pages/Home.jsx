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
  const fetchHomestays = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/homestays`
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      setHomestays(data);
    } catch (error) {
      console.error("HOME ERROR:", error);
      setError("Unable to load homestays. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  fetchHomestays();
}, []);

  return (
    <>
      <Navbar />

      <Hero />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px, 1fr))",
          gap: "30px",
          padding: "50px 7%",
          background:"#f5f7f2",
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
              description="enjoy a peacful stay surrounded by the beautiful mountsains od UK"
              location={homestay.location}
              price={homestay.price}
              image={homestay.image}
            />
          ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;