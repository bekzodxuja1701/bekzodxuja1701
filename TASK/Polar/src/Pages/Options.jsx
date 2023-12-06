import React from "react";
import {
  FastDelivery,
  FreeShipping,
  MoneyBack,
  QuicPackaging,
} from "../images/icons/Icons";

export default function Options() {
  return (
    <section className="w-[80%] mx-[auto] pt-[100px] pb-[100px]  flex justify-between gap-[40px] text-center">
      <div className="border-[1px] rounded flex-col justify-center p-[25px] ">
        <FreeShipping />
        <h3 className="font-Hind  font-bold mt-[24px] mb-[10px]">
          Free Shipping
        </h3>
        <p className="w-[200px] font-Hind text-[14px]">
          Last Chance! Free shipping on all orders ends today.
        </p>
      </div>
      <div className="border-[1px] rounded flex-col justify-center p-[25px] ">
        <QuicPackaging />
        <h3 className="font-Hind  font-bold mt-[24px] mb-[10px]">
          Quick Packaging
        </h3>
        <p className="w-[200px] font-Hind text-[14px]">
          Last Chance! Free shipping on all orders ends today.
        </p>
      </div>
      <div className="border-[1px] rounded flex-col justify-center p-[25px] ">
        <MoneyBack />
        <h3 className="font-Hind  font-bold mt-[24px] mb-[10px]">
          100% Money Back
        </h3>
        <p className="w-[200px] font-Hind text-[14px]">
          Last Chance! Free shipping on all orders ends today.
        </p>
      </div>
      <div className="border-[1px] rounded flex-col justify-center p-[25px] ">
        <FastDelivery />
        <h3 className="font-Hind  font-bold mt-[24px] mb-[10px]">
          Fast Delivery
        </h3>
        <p className="w-[200px] font-Hind text-[14px]">
          Last Chance! Free shipping on all orders ends today.
        </p>
      </div>
    </section>
  );
}
