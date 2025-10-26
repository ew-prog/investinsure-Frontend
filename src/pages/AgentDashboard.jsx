import { paystackInit, flutterwavePay, mtnPay, airtelPay } from "../services/payment";

// Example: initiate Paystack payment
const handlePaystack = async () => {
  const url = await paystackInit("AGENT_ID", selectedLeads, "TOKEN");
  window.location.href = url; // redirect to Paystack payment page
};

// Flutterwave
const handleFlutterwave = async () => {
  const url = await flutterwavePay("AGENT_ID", selectedLeads, "TOKEN");
  window.location.href = url;
};

// MTN
const handleMtn = async () => {
  const msg = await mtnPay("AGENT_ID", selectedLeads, "PHONE_NUMBER", "TOKEN");
  alert(msg);
};

// Airtel
const handleAirtel = async () => {
  const msg = await airtelPay("AGENT_ID", selectedLeads, "PHONE_NUMBER", "TOKEN");
  alert(msg);
};
