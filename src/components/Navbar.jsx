import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-green-700 text-white p-4 flex justify-between">
    <div className="font-bold text-lg">InsvestInsure</div>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/product/life">Life</Link>
      <Link to="/product/motor">Motor</Link>
      <Link to="/product/travel">Travel</Link>
      <Link to="/product/home">Home</Link>
      <Link to="/product/unit-trust">Unit Trust</Link>
      <Link to="/agent-dashboard">Agent</Link>
      <Link to="/admin-dashboard">Admin</Link>
    </div>
  </nav>
);

export default Navbar;
