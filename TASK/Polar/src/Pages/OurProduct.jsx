import React from "react";
import Button from "../Components/Button";
import image1 from "../images/OurProducts_1.png";
import image2 from "../images/OurProducts_2.png";
import image3 from "../images/OurProducts_3.png";
import image4 from "../images/OurProducts_4.png";
import user1 from "../images/icons/user_1.svg";
import user2 from "../images/icons/user_2.svg";
import {
  Chevron,
  QoshtirnoqClose,
  QoshtirnoqOpen,
} from "../images/icons/Icons";

export default function OurProduct() {
  return (
    <section className="w-[80%] mx-[auto] pt-[140px] pb-[110px]">
      <div className="text-center ">
        <h2 className="font-Hind font-semibold text-[44px] pb-[64px]">
          Our Product
        </h2>
        <ul className="flex gap-[40px] justify-center">
          <li className="opacity-[0.6] font-medium font-Rob text-[18px] hover:opacity-100 hover:border-b-2 border-[#D64374] ">
            ICE CREAM{" "}
          </li>
          <li className="opacity-[0.6] font-medium font-Rob text-[18px] hover:opacity-100 hover:border-b-2 border-[#D64374] ">
            CAYENNE CHOCOLATE{" "}
          </li>
          <li className="opacity-[0.6] font-medium font-Rob text-[18px] hover:opacity-100 border-b-2 border-white hover:border-[#D64374] ">
            CAKE BATTER
          </li>
          <li className="opacity-[0.6] font-medium font-Rob text-[18px] hover:opacity-100 border-b-2 border-white hover:border-[#D64374] ">
            CANDY CANE
          </li>
          <li className="opacity-[0.6] font-medium font-Rob text-[18px] hover:opacity-100 border-b-2 border-white hover:border-[#D64374] ">
            PLATTERS
          </li>
          <li className="opacity-[0.6] font-medium font-Rob text-[18px] hover:opacity-100 border-b-2 border-white hover:border-[#D64374] ">
            DESSERT
          </li>
        </ul>
      </div>
      <div className="flex-col gap-[100px]">
        <div className="flex mt-[50px] gap-[130px] items-center">
          <img src={image1} alt="cabbage" />
          <div>
            <h3 className="font-Hind text-[26px] font-bold">Brown bread</h3>
            <p className="font-Rob  text-[16px] text-[#4D4D4D] mt-[11px] mb-[28px] ">
              Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
              Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a
              pioneer in the healthy fast food scene.
            </p>
            <div className="flex gap-[6px] items-end mb-[10px]">
              <span className="font-Hind text-[26px] font-semibold">
                $19.55
              </span>
              <span className="font-Hind text-[20px] font-semibold text-[#4D4D4D] line-through">
                $22.55
              </span>
            </div>
            <Button>Buy Now</Button>
          </div>
        </div>
        <div className="flex mt-[50px] gap-[130px] items-center">
          <div>
            <h3 className="font-Hind text-[26px] font-bold">Brown bread</h3>
            <p className="font-Rob  text-[16px] text-[#4D4D4D] mt-[11px] mb-[28px] ">
              Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
              Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a
              pioneer in the healthy fast food scene.
            </p>
            <div className="flex gap-[6px] items-end mb-[10px]">
              <span className="font-Hind text-[26px] font-semibold">
                $19.55
              </span>
              <span className="font-Hind text-[20px] font-semibold text-[#4D4D4D] line-through">
                $22.55
              </span>
            </div>
            <Button>Buy Now</Button>
          </div>
          <img src={image2} alt="cabbage" />
        </div>

        <div className="flex mt-[50px] gap-[130px] items-center">
          <img src={image3} alt="cabbage" />
          <div>
            <h3 className="font-Hind text-[26px] font-bold">Brown bread</h3>
            <p className="font-Rob  text-[16px] text-[#4D4D4D] mt-[11px] mb-[28px] ">
              Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
              Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a
              pioneer in the healthy fast food scene.
            </p>
            <div className="flex gap-[6px] items-end mb-[10px]">
              <span className="font-Hind text-[26px] font-semibold">
                $19.55
              </span>
              <span className="font-Hind text-[20px] font-semibold text-[#4D4D4D] line-through">
                $22.55
              </span>
            </div>
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-[200px] flex justify-between items-center">
          <div>
            <div className="flex gap-[20px] mb-[46px]">
              <img src={user1} alt="profile" />
              <h3 className="font-Rob text-[24px] font-semibold  leading-[normal]">
                Adele A. McNeill <br />
                <span className="text-[12px] opacity-[0.7]">AMERICAN</span>
              </h3>
            </div>

            <div className="flex gap-[6px]">
              <QoshtirnoqOpen className="inline" />
              <p className="font-Rob text-[16px] opacity-[0.7] mb-[56px]">
                Thanks a lot for the prompt service. Really <br /> appreciate.
                Excellence taste in Every Bite.Add <br /> a joy of best Taste.
                Foodie Moments.
              </p>
              <QoshtirnoqClose className="flex justify-self-end " />
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="rotate-[180deg] flex items-center">
                <Chevron />
              </div>
              <img className="rounded-full" src={user2} alt="" />
              <img className="ml-[10px]" src={user1} alt="" />
              <img className="scale-[0.65]" src={user1} alt="" />
              <Chevron />
            </div>
          </div>
          <img src={image4} alt="" />
        </div>
      </div>
    </section>
  );
}
