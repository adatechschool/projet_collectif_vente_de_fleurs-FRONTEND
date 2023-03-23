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
        <li className="p-5">
          <button onClick={clearSession}>Déconnexion</button>
          <img
            src={LogoutIcon}
            className="h-10 w-10 rounded hover:shadow-xl"
            alt="login"
          />
        </li>
      </Link>
    )
}

export default LogoutButton;