import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Welcome to InsvestInsure</h1>
    <p className="mb-4">Generate verified, AI-qualified leads for insurance and financial products.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Link to="/product/life" className="p-4 bg-green-200 rounded">Life Insurance</Link>
      <Link to="/product/motor" className="p-4 bg-green-200 rounded">Motor Insurance</Link>
      <Link to="/product/travel" className="p-4 bg-green-200 rounded">Travel Insurance</Link>
      <Link to="/product/home" className="p-4 bg-green-200 rounded">Home Insurance</Link>
      <Link to="/product/unit-trust" className="p-4 bg-green-200 rounded">Unit Trusts</Link>
    </div>
  </div>
);

export default Home;
