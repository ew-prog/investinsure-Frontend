import React, { useState } from "react";
import axios from "axios";

const LeadForm = ({ product }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", insuranceCompany: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/leads", { ...form, product });
      if (res.data.success) setMessage("Lead submitted successfully!");
    } catch (err) {
      setMessage("Error submitting lead");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="border p-2 w-full mb-2"/>
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="border p-2 w-full mb-2"/>
      <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required className="border p-2 w-full mb-2"/>
      <input type="text" name="insuranceCompany" placeholder="Insurance Company" value={form.insuranceCompany} onChange={handleChange} required className="border p-2 w-full mb-2"/>
      <button type="submit" className="bg-green-600 text-white p-2 rounded w-full">Submit</button>
      {message && <p className="mt-2">{message}</p>}
    </form>
  );
};

export default LeadForm;
