import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogoutButton = () => {
  const clearSession = () => {
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