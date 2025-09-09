import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const Latest = () => {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch("/api/latestcollection")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setLatest(result.data);
      });
  }, []);

  return (
    <div className="min-h-40 bg-gray-100 p-6">
      <Title text_one={"Latest"} text_two={"Collections"} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {latest.map((items) => (
            <Link key={items._id} to={`/singlecollection/${items._id}`}>
              <div className="bg-white rounded-xl shadow p-4">
                <img
                  src={`/uploads/${items.ProductImage}`}
                  alt="Product"
                  className="w-full h-auto object-fill rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold">{items.ProductName}</h3>
                <p className="text-gray-600">{items.ProductDescription}</p>
                <p className="text-blue-600 font-bold mt-2">
                  ₹ {items.ProductPrice}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;

