import React from "react";
import Navbar from "./Navbar";
import heroImg from "../images/heroImg.png";
import Button from "../Components/Button";

export default function Header() {
  return (
    <>
      <div className="bg-[#F8EDF0] pt-6 pb-40">
        <header className=" w-[80%] mx-[auto]">
          <Navbar />
          <div className="flex justify-between items-center">
            <div className="flex-col ">
              <span className="font-tcBlack  ">Sweet fun, full of milk.</span>
              <h1 className="w-[700px] font-tcBlack text-[57px] font-bold font-Fred mt-2 mb-9">
                Feel inside cold with our delicious{" "}
                <span className="text-bc">ice-cream.</span>
              </h1>
              <p className="font=[#6E6163] mb-14 w-[520px]">
                Some food has looked so awful that it's looked like something
                that the dog's brought home, yet after one mouthful I've been
                left eating my thoughts, my words.
              </p>
              <Button>Buy Now</Button>
            </div>
            <div className=" w-[900px] h-[600px]  ">
              <img
                src={heroImg}
                className="absolute w-[800px] right-[0px]  "
                alt="hero img"
              />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
