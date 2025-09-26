import React from "react";
import Hero from "../components/Hero";
import Policy from "../components/Policy";
import Query from "../components/Query";
import Latest from "./Latest";
import BestSeller from "./BestSeller";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/"); // token hi nahi mila
      return;
    }

    fetch("/api/homepage", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "Successfully") {
          navigate("/home");
        } else if (result.message === "Invalid token or expired token") {
          toast.error(result.message);
          navigate("/");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error("Server error, please try again.");
      });
  }, [navigate]);


  return (
    <div>
      <Hero />
      <Latest />
      <BestSeller />
      <Policy />
      <Query />
    </div>
  );
};

export default HomePage;
