import React from "react";

export default function Button({ children }) {
  return (
    <button className="bg-bc text-white px-[50px] py-[15px] rounded-md hover:bg-bcHover transition">
      {children}
    </button>
  );
}
