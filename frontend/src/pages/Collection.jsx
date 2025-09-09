import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Collection = () => {
  const [collection, setCollection] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");

    fetch("/api/frotendproducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token ?? "undefined"}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setCollection(result.data);
        if (result.message === "No token provided") {
          navigate("/");
        } else if (result.message === "Invalid token or expired token") {
          toast.error(result.message);
        }
      });
  }, []);

  const filteredProducts = collection.filter(
    (product) =>
      product.ProductStatus === "In-Stock" &&
      (filterCategory ? product.ProductCategory === filterCategory : true)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="md:col-span-1 bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>

          <div className="mb-4">
            <h3 className="font-medium mb-2">Category</h3>
            <ul className="space-y-1">
              {["Men", "Women", "Kids"].map((cat) => (
                <li key={cat}>
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    className="mr-2"
                    checked={filterCategory === cat}
                    onChange={(e) => setFilterCategory(e.target.value)}
                  />
                  {cat}
                </li>
              ))}
              <li>
                <button
                  className="text-blue-600 text-sm"
                  onClick={() => setFilterCategory("")}
                >
                  Clear
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product._id} to={`/singlecollection/${product._id}`}>
              <div className="bg-white rounded-xl shadow p-4">
                <img
                  src={`/uploads/${product.ProductImage}`}
                  alt="Product"
                  className="w-full h-auto object-fill rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold">{product.ProductName}</h3>
                <p className="text-gray-600">{product.ProductDescription}</p>
                <p className="text-blue-600 font-bold mt-2">
                  ₹ {product.ProductPrice}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

