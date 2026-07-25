import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateHomestay from "./pages/CreateHomestay";
import AIFeature from "./pages/AIFeature";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create-homestay" element={<CreateHomestay />} />
      <Route path="/ai" element={<AIFeature />} />
    </Routes>
  );
}

export default App;