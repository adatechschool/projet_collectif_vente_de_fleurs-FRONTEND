import React from "react";
import Logo from "../../img/logo_720.jpg";
import PanierIcon from "../../img/panier.png";
import LoginIcon from "../../img/login.png";
import { Link } from "react-router-dom";
import Banner from "./HeaderComponent/Banner";
import Navbar from "./HeaderComponent/Navbar";

const Header = () => {
  return (
    <>
      <div className="mx-40">
        <Banner />
      </div>
      <header className="relative flex items-center">
        <div className="my-2">
          <Link to="/">
            <img src={Logo} className="mx-40 h-20 w-20" />
          </Link>
          <div className="mx-40 absolute bottom-0 right-0 flex items-center space-x-4">
            {/* si une utilisateur est connecté avec son id elle a accé à son panier. ex: url localhost:3000/panier/1 */}
            <Link to="/panier">
              <img
                src={PanierIcon}
                className="h-10 w-10 rounded hover:shadow-xl "
              />
            </Link>
            {/* la personne va vers page connextion si elle n'est pas comptes elle va vers page inscription */}
            <Link to="/connexion">
              <img
                src={LoginIcon}
                className="h-10 w-10 rounded hover:shadow-xl"
              />
            </Link>
          </div>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
