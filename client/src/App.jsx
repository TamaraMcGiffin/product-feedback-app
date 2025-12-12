import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddFeedback from "./pages/AddFeedback";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <ul>
          {/* No Home link on navbar, however back button on AddFeedback page should route back to Home page - how do I appropriately structure this? */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AddFeedback">AddFeedback</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddFeedback" element={<AddFeedback />} />
      </Routes>
    </div>
  );
}

export default App;
