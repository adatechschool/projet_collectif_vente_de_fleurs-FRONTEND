import React from "react";
import { Link } from "react-router-dom";
import LogoutIcon from "../../../img/exit.png";

const LogoutButton = ({loggin, setLoggin}) => {
  console.log("LogoutButton", loggin);
  
  const clearSession = () => {
    setLoggin(false)
    sessionStorage.clear();
  }


    return (
        <Link to="/">
        <li className="pl-4 pr-6 pt-3">
          <button onClick={clearSession} className="bg-green-900 rounded-full hover:shadow-xl">
          {/* Déconnexion */}
          {/* <span class="mr-2">Déconnexion</span> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24">
            <path fill="white" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
          </svg>
          </button>
        </li>
      </Link>
    )
}

export default LogoutButton;