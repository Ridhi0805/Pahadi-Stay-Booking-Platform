import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        padding: "20px"
      }}>
        <Card
          title="Bhudakedar Homestay"
          description="Enjoy peaceful mountain living."
        />

        <Card
          title="Khatling Glacier Trek"
          description="Adventure trekking experience."
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;