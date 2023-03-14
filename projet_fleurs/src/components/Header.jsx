import React from "react";
import Logo from "../img/logo_720.jpg";

const Header = () => {
  return (
    <>
      <header className="border flex justify-between">
        <div>
          {" "}
          <img src={Logo} className="h-20" />
        </div>
        <div>
          <button>connexion</button>
        </div>
      </header>
    </>
  );
};

export default Header;
