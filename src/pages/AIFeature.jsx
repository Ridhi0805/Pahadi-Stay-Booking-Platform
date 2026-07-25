import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

function AIFeature() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter your question.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      // AI backend connection will be added here
      // after your AI API is ready.

      setTimeout(() => {
        setResult(
          "AI recommendation: Explore beautiful homestays in Bhudakedar and enjoy the peaceful mountain views."
        );
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      setError("Unable to get AI recommendation.");
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
        <h1>AI Travel Assistant 🤖</h1>

        <p>
          Ask our AI assistant for homestay and travel recommendations.
        </p>

        <textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Example: Suggest a peaceful homestay in Bhudakedar"
          rows="5"
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "20px",
            boxSizing: "border-box",
          }}
        />

        <br />
        <br />

        <button
          onClick={handleGenerate}
          disabled={loading}
          style={{
            padding: "10px 20px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Generating..." : "Get AI Recommendation"}
        </button>

        <br />
        <br />

        {loading && <Loader text="AI is thinking..." />}

        {error && <Toast type="error" message={error} />}

        {result && (
          <div
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>AI Recommendation</h2>
            <p>{result}</p>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default AIFeature;