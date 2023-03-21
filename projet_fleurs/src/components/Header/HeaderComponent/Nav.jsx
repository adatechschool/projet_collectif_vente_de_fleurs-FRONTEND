import React from "react";
// import Logo from "../../../img/logo_720.jpg";
import Logo from "../../../img/logo_fleur.png";
import { Link } from "react-router-dom";
import PanierIcon from "../../../img/panier_transparent.png";
import LoginIcon from "../../../img/login_transparent.png";
import AdminIcon from "../../../img/admin.png";

const Nav = () => {
  return (
    <>
      <header className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          {" "}
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-20 p-2" />
          </Link>
          <Link to="/">
            <h1 className="text-xl text-green-900 body-font font-Yeseva">Wonderflower</h1>
          </Link>
        </div>
        <div>
          <ul className="flex">
            {/* si l'utilisateur est connecté avec son id, il a accès à son panier. ex: url localhost:3000/panier/1 */}
            <Link to="/panier">
              <li className="p-4">
                {" "}
                <img
                  src={PanierIcon}
                  alt="Logo panier"
                  className="h-10 w-10 rounded hover:shadow-xl hover:rounded-full"
                />
              </li>
            </Link>
            {/* Inscription si pas de compte, sinon connexion */}
            <Link to="/users/signin">
              <li className="p-4">
                <img
                  src={LoginIcon}
                  alt="Logo connexion"
                  className="h-10 w-10 rounded hover:shadow-xl hover:rounded-full"
                />
              </li>
            </Link>
            <Link to="/admin">
              <li className="p-4">
                <img
                  src={AdminIcon}
                  alt="Logo admin"
                  className="h-10 w-10 rounded hover:shadow-xl hover:rounded-full"
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
