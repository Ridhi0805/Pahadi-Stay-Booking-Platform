import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "#2e7d32",
      color: "white"
    }}>
      <h2>Bhudakedar Tourism</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/about" style={{ color: "white" }}>About</Link>
        <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>
        <Link to="/login" style={{ color: "white" }}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;