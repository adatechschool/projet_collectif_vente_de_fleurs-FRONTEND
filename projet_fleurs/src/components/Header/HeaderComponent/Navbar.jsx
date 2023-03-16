import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // set nav to the opposite of its current value
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240 px] mx-auto px-4 text-black">
      <h1 className="w-full text-2xl font-bold text-[#8be2c6]">
        Girls & Rouh's flowers
      </h1>
      <ul className="hidden md:flex">
        <li className="p-8">Home</li>
        <li className="p-8">Bouquets</li>
        <li className="p-8">Bonnes affaires</li>
        <li className="p-8">Cadeaux</li>
        <li className="p-8">Contact</li>
      </ul>

      {/* When we click, if nav is not true, show Close else Menu */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* show menu when clicked else hidden */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[20%] h-full border-r border-r-gray-900 bg-[#b4d6b4] ease-in-out duration 500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="pt-24 uppercase p-4">
          {" "}
          {/* pt padding top  */}
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
