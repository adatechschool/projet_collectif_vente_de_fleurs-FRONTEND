import React, { useState } from "react";
import Logo from "../../../img/logo_720.jpg";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <li className="p-5">Home</li>
            </Link>
            {/* si une utilisateur est connecté avec son id elle a accé à son panier. ex: url localhost:3000/panier/1 */}
            <Link to="/panier">
              <li className="p-5">Panier</li>
            </Link>
            {/* la personne va vers page connextion si elle n'est pas comptes elle va vers page inscription */}
            <Link to="/connexion">
              <li className="p-5">Connexion</li>
            </Link>
            <Link to="/inscription">
              <li className="p-5">Inscription</li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Nav;
