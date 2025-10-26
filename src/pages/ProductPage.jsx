import React from "react";
import { useParams } from "react-router-dom";
import LeadForm from "../components/LeadForm";

const ProductPage = () => {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{id.replace("-", " ").toUpperCase()} Form</h1>
      <LeadForm product={id} />
    </div>
  );
};

export default ProductPage;
