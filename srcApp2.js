// src/App.js
import React, { useState } from "react";
import Modal from "./Modal";

const products = [
  { id: 1, name: "T-Shirt", price: "$20", description: "Comfortable cotton t-shirt", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Shoes", price: "$50", description: "Running shoes for all-day comfort", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Watch", price: "$100", description: "Stylish wrist watch", img: "https://via.placeholder.com/150" },
];

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Product Gallery</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelected(p)}
            className="bg-white shadow rounded p-4 cursor-pointer hover:shadow-lg"
          >
            <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded" />
            <h2 className="text-lg font-bold mt-2">{p.name}</h2>
            <p className="text-gray-700">{p.price}</p>
          </div>
        ))}
      </div>

      {selected && <Modal product={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export default App;

// src/Modal.js
import React from "react";

const Modal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/3 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 font-bold"
        >
          ✕
        </button>
        <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded" />
        <h2 className="text-xl font-bold mt-3">{product.name}</h2>
        <p className="text-gray-700 mt-1">{product.price}</p>
        <p className="mt-2 text-sm">{product.description}</p>
      </div>
    </div>
  );
};

export default Modal;
