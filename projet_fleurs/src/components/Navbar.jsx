import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // set nav to the opposite of its current value
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-22 max-w-[1200 px] mx-auto px-4 text-black">
      <h1 className="w-full text-3xl font-bold text-[#aae6d3]">Flowers</h1>
      <ul className="flex">
        <li className="p-8">Home</li>
        <li className="p-8">Bouquets</li>
        <li className="p-8">Bonnes affaires</li>
        <li className="p-8">Cadeaux</li>
        <li className="p-8">Contact</li>
      </ul>
      <div onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* show menu when clicked  */}
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#acc2ac] ease-in-out duration 500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="uppercase p-4">
          <li className="p-4">Home</li>
          <li className="p-4">Bouquets</li>
          <li className="p-4">Bonnes affaires</li>
          <li className="p-4">Cadeaux</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
