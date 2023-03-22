import React from "react";
import { Link } from "react-router-dom";

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
        </li>
      </Link>
    )
}

export default LogoutButton;