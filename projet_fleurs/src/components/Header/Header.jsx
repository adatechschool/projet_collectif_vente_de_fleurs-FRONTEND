import React from "react";
// import Logo from "../../img/logo_720.jpg";
// import PanierIcon from "../../img/panier.png";
// import LoginIcon from "../../img/login.png";
// import { Link } from "react-router-dom";
import Banner from "./HeaderComponent/Banner";
import Nav from "./HeaderComponent/Nav";

const Header = () => {
  return (
    <>
      <Banner />
      <Nav />
    </>
  );
};

export default Header;
