import React from "react";
import Logo from "../assets/logo_ecommerce.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-10 px-3  text-sm bg-black text-white  ">
        <div>
          <Link to={"/home"}>
            <img src={Logo} alt="" className="mb-5 w-32" />
          </Link>
          <p className="w-full md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            distinctio sapiente voluptates esse facere delectus consequuntur
            asperiores sint nostrum ut.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5  text-[#ff6825]">COMPANY</p>
          <ul className="flex flex-col gap-1">
            <Link to={"/home"}>
              <li>Home</li>
            </Link>
            <Link to={"/aboutus#AboutUs"}>
              <li>About Us</li>
            </Link>
            <Link to={"/cart"}>
              <li>Cart</li>
            </Link>
            <Link to={"/privacypolicy"}>
              <li>Privacy Policy</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5  text-[#ff6825]">
            Get In Touch
          </p>
          <ul className="flex flex-col gap-1">
            <li>+1404-547889</li>
            <li>onlineshop@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
