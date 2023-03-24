import React from "react";
import Logo from "../../../img/logo_fleur.png";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import AdminButton from "./AdminButton";
import BasketButton from "./BasketButton";

const Nav = ({loggin, setLoggin}) => {
  console.log("Nav", loggin);


  return (
    <>
      <header className="flex justify-between items-center">

        <div className="flex justify-between items-center">
          {" "}
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-16 p-1" />
          </Link>
          <Link to="/">
            <h1 className="text-xl text-green-900 body-font font-Yeseva">Wonderflower</h1>
          </Link>
        </div>

        <div>
          <ul className="flex">
            
            <li>
              {/* user connecté = bouton panier / sinon = pas de bouton */}
              { loggin === true ? <BasketButton loggin={loggin} setLoggin={setLoggin} />  : ""}
            </li>
            {/* <Link to="/panier">
              <li className="py-2 px-4">
                {" "}
                <img
                  src={PanierIcon}
                  className="h-10 w-10 rounded hover:shadow-xl "
                  alt="panier"
                />
              </li>
            </Link> */}

            <li>
              {/* admin connecté = bouton admin / sinon = pas de bouton */}
              { loggin === true ? <AdminButton loggin={loggin} setLoggin={setLoggin} />  : ""}
            </li>
            {/* <Link to="/admin">
              <li className="py-2 px-4">
                <img
                  src={AdminIcon}
                  alt="Logo admin"
                  className="h-10 w-10 rounded hover:shadow-xl"
                />
              </li>
            </Link> */}

            <li>
              {/* si utilisateur connecté : bouton déconnexion, sinon : bouton connexion */}
              { loggin === true ? <LogoutButton loggin={loggin} setLoggin={setLoggin} />  : <LoginButton />}
            </li>

          </ul>
        </div>
      </header>
    </>
  );
};

export default Nav;
