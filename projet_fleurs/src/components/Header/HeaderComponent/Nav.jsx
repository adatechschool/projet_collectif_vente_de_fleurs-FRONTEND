import React, { useState } from "react";
import Logo from "../../../img/logo_720.jpg";
import { Link } from "react-router-dom";
import PanierIcon from "../../../img/panier.png";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Nav = () => {
  
  return (
    <>
      <header className="flex justify-between items-center">
        <div>
          {" "}
          <Link to="/">
            <img src={Logo} className="h-20" alt="logo"/>
          </Link>
        </div>
        <div>
          <ul className="flex p-3">
            {/* si un utilisateur est connecté avec son id il a accès à son panier. ex: url localhost:3000/panier/1 */}
            <Link to="/panier">
              <li className="p-5">
                {" "}
                <img
                  src={PanierIcon}
                  className="h-10 w-10 rounded hover:shadow-xl "
                  alt="panier"
                />
              </li>
            </Link>
            {/* si utilisateur connecté : bouton déconnection, sinon : bouton connexion */}
            { (sessionStorage.getItem("token")) ? <LogoutButton /> : <LoginButton />
            
            }
          </ul>
        </div>
      </header>
    </>
  );
};

export default Nav;
