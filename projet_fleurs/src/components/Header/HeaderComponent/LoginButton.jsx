import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginIcon from "../../../img/login.png";

const LoginButton = () => {
    return (
        <Link to="/users/signin">
        <li className="p-5">
          <img
            src={LoginIcon}
            className="h-10 w-10 rounded hover:shadow-xl"
            alt="login"
          />
        </li>
      </Link>
    )
}

export default LoginButton;