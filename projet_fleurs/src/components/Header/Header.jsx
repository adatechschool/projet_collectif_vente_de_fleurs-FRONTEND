import React from "react";
import Logo from "../../img/logo_720.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="border flex justify-between">
        <div>
          {" "}
          <img src={Logo} className="h-20" />
        </div>
        <div>
          <ul>
        
          <Link to="/"><li>Home</li></Link>
          {/* si une utilisateur est connecté avec son id elle a accé à son panier. ex: url localhost:3000/panier/1 */}
          <Link to="/panier"><li>Panier</li></Link>
          {/* la personne va vers page connextion si elle n'est pas comptes elle va vers page inscription */}
          <Link to="/conexion"><li>Connexion/Inscription</li></Link>

          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
