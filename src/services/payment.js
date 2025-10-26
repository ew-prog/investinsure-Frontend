import axios from "axios";

export const paystackInit = async (agentId, leadIds, token) => {
  const res = await axios.post(
    "http://localhost:5000/api/payments/paystack/init",
    { agentId, leadIds },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data.authorization_url;
};

export const paystackVerify = async (reference, agentId, leadIds, token) => {
  const res = await axios.post(
    "http://localhost:5000/api/payments/paystack/verify",
    { reference, agentId, leadIds },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

export const flutterwavePay = async (agentId, leadIds, token) => {
  const res = await axios.post(
    "http://localhost:5000/api/payments/flutterwave",
    { agentId, leadIds },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data.link;
};

export const mtnPay = async (agentId, leadIds, phone, token) => {
  const res = await axios.post(
    "http://localhost:5000/api/payments/mtn",
    { agentId, leadIds, phone },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data.message;
};

export const airtelPay = async (agentId, leadIds, phone, token) => {
  const res = await axios.post(
    "http://localhost:5000/api/payments/airtel",
    { agentId, leadIds, phone },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data.message;
};
