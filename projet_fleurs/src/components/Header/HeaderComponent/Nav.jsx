import React, { useState } from "react";
import Logo from "../../../img/logo_720.jpg";
import { Link } from "react-router-dom";
import PanierIcon from "../../../img/panier.png";
import LoginIcon from "../../../img/login.png";

const Nav = () => {
  return (
    <>
      <header className="flex justify-between items-center">
        <div>
          {" "}
          <Link to="/">
            <img src={Logo} className="h-20" />
          </Link>
        </div>
        <div>
          <ul className="flex p-3">
            {/* si une utilisateur est connecté avec son id elle a accé à son panier. ex: url localhost:3000/panier/1 */}
            <Link to="/panier">
              <li className="p-5">
                {" "}
                <img
                  src={PanierIcon}
                  className="h-10 w-10 rounded hover:shadow-xl "
                />
              </li>
            </Link>
            {/* la personne va vers page connextion si elle n'est pas comptes elle va vers page inscription */}
            <Link to="/connexion">
              <li className="p-5">
                <img
                  src={LoginIcon}
                  className="h-10 w-10 rounded hover:shadow-xl"
                />
              </li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Nav;
