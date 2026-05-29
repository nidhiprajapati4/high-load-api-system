"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const createOrder = async () => {
    setLoading(true);

    await axios.post(
      "http://localhost:5000/api/orders",
      {
        userId: "101",
        productId: "5001",
      }
    );

    alert("Order Added");

    setLoading(false);
  };

  return (
    <div className="p-10">
      <button
        onClick={createOrder}
        className="bg-black text-white px-4 py-2"
      >
        {loading ? "Loading..." : "Create Order"}
      </button>
    </div>
  );
}