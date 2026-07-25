import { Link, useNavigate } from "react-router-dom";

function Navbar() {
const navigate = useNavigate();
const token = localStorage.getItem("token");

const handleLogout = () => {
localStorage.removeItem("token");
localStorage.removeItem("user");

navigate("/login");

};

return (
<nav
style={{
display: "flex",
justifyContent: "space-between",
padding: "15px 30px",
background: "#2e7d32",
color: "white",
}}
>
<h2>Bhudakedar Tourism</h2>

  <div
    style={{
      display: "flex",
      gap: "20px",
      alignItems: "center",
    }}
  >
    <Link to="/" style={{ color: "white" }}>
      Home
    </Link>

    <Link to="/about" style={{ color: "white" }}>
      About
    </Link>

    <Link to="/dashboard" style={{ color: "white" }}>
      Dashboard
    </Link>

    {!token && (
      <Link to="/login" style={{ color: "white" }}>
        Login
      </Link>
    )}

    {token && (
      <button
        onClick={handleLogout}
        style={{
          padding: "8px 15px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Logout
      </button>
    )}
  </div>
</nav>

);
}

export default Navbar;