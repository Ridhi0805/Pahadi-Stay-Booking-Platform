import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Toast from "../components/ui/Toast";
import Loader from "../components/ui/Loader";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
       `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSuccess("Login successful!");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
        <h1>Login</h1>

        {error && <Toast type="error" message={error} />}

        {success && <Toast type="success" message={success} />}

        {loading && <Loader text="Logging in..." />}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "15px" }}>
            <label>Email</label>
            <br />

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Password</label>
            <br />

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;