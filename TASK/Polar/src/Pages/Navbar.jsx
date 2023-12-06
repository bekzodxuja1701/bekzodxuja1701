import React from "react";
import navLogo from "../images/navLogo.png";
import Button from "../Components/Button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <img src={navLogo} alt="logo" />
      <ul className="flex gap-[40px]">
        <li className="text-[15px] text-tc  font-semibold  hover:text-bc cursor-pointer">
          Home
        </li>
        <li className="text-[15px] text-tc  font-semibold  hover:text-bc cursor-pointer">
          Product
        </li>
        <li className="text-[15px] text-tc  font-semibold  hover:text-bc cursor-pointer">
          Pricing
        </li>
        <li className="text-[15px] text-tc  font-semibold  hover:text-bc cursor-pointer">
          Testimonials
        </li>
        <li className="text-[15px] text-tc  font-semibold  hover:text-bc cursor-pointer">
          Contact Us
        </li>
      </ul>
      <Button>Buy Now</Button>
    </nav>
  );
}
