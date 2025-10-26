import axios from "axios";

export const initiatePayment = async (agentId, leadCount, method) => {
  try {
    const res = await axios.post("http://localhost:5000/api/agents/purchase", {
      agentId,
      leadIds: [], // placeholder, select actual IDs
      transactionId: "TXN_" + Date.now(),
      method
    });
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
