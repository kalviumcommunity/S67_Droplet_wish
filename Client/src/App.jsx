import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Wishlist from "./Components/Wishlist";
import EntityList from "./Components/EntityList";
import AddEntity from "./Pages/AddEntity";
import UpdateEntity from "./Components/UpdateEntity";
import UserEntities from "./Pages/UserEntities";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/entitylist" element={<EntityList />} />
        <Route path="/addentity" element={<AddEntity />} />
        <Route path="/update/:id" element={<UpdateEntity />} />
        <Route path="/UserEntities" element={<UserEntities />} />
      </Routes>
    </Router>
  );
}

export default App;
