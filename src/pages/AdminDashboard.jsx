import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const res = await axios.get("http://localhost:5000/api/leads");
      setLeads(res.data);
    };
    fetchLeads();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Verified Leads</h1>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Product</th>
            <th className="border p-2">Company</th>
            <th className="border p-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead._id}>
              <td className="border p-2">{lead.name}</td>
              <td className="border p-2">{lead.email}</td>
              <td className="border p-2">{lead.phone}</td>
              <td className="border p-2">{lead.product}</td>
              <td className="border p-2">{lead.insuranceCompany}</td>
              <td className="border p-2">{lead.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
