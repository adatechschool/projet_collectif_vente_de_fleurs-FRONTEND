import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ categories, setActiveCategory, activeCategory }) => {
  const [nav, setNav] = useState(false);

  // set nav to the opposite of its current value
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="mx-40 relative flex items-center justify-center text-green-800 text-xl font-bold text-center">
      <ul className="flex space-x-40">
        {categories.map((category) => (
          <li className="p-4" onClick={(e) => setActiveCategory(category)}>
            {category.toUpperCase()}
          </li>
        ))}
        <li className="p-4" onClick={(e) => setActiveCategory("")}>
          TOUTE LA COLLECTION
        </li>
      </ul>
    </div>

    /* When we click, if nav is not true, show Close else Menu
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* show menu when clicked else hidden */
    /* <div
        className={
          nav
            ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#b4d6b4] ease-in-out duration 500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="pt-24 uppercase p-4">
          {" "}
          {/* pt padding top  */
    /* <li className="p-4">Home</li>
          <li className="p-4">Bouquets</li>
          <li className="p-4">Bonnes affaires</li>
          <li className="p-4">Cadeaux</li>
          <li className="p-4">Contact</li>
        </ul> */
    /* </div> */
    // </div>
  );
};
export default Navbar;
