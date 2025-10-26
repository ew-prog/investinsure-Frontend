import React, { useEffect, useState } from "react";
import axios from "axios";

const AgentDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [selectedLeads, setSelectedLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const res = await axios.get("http://localhost:5000/api/agents/leads", { headers: { Authorization: "Bearer TOKEN" } });
      setLeads(res.data);
    };
    fetchLeads();
  }, []);

  const toggleSelect = (id) => {
    setSelectedLeads(prev => prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]);
  };

  const purchase = async () => {
    const res = await axios.post("http://localhost:5000/api/agents/purchase", {
      leadIds: selectedLeads,
      agentId: "AGENT_ID",
      transactionId: "TXN_ID_PLACEHOLDER",
      method: "Paystack"
    }, { headers: { Authorization: "Bearer TOKEN" } });
    alert(res.data.message);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Available Leads</h1>
      <ul>
        {leads.map(lead => (
          <li key={lead._id}>
            <input type="checkbox" onChange={() => toggleSelect(lead._id)} /> {lead.name} ({lead.product})
          </li>
        ))}
      </ul>
      <button className="bg-green-600 text-white p-2 mt-4" onClick={purchase}>Purchase Selected Leads</button>
    </div>
  );
};

export default AgentDashboard;
