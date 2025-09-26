import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const BestSeller = () => {
  const [best, setBest] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/bestsellerdata")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((record) => {
        setBest(record.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching best sellers:", err);
        setError("Failed to load best sellers. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="min-h-40 bg-gray-100 p-6">
        <Title text_one="Best" text_two="Seller" />

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && best.length === 0 && (
          <p className="text-center text-gray-500">No best sellers available.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {best.map((items) => (
              <Link key={items._id} to={`/singlecollection/${items._id}`}>
                <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
                  <img
                    src={`/uploads/${items.ProductImage}`}
                    alt={items.ProductName}
                    className="w-full h-auto object-fill rounded-md mb-3"
                  />
                  <h3 className="text-lg font-semibold">{items.ProductName}</h3>
                  <p className="text-gray-600 line-clamp-2">
                    {items.ProductDescription}
                  </p>
                  <p className="text-blue-600 font-bold mt-2">
                    ₹ {items.ProductPrice}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
