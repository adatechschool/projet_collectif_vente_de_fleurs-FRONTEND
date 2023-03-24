import React from "react";
import Banner from "./HeaderComponent/Banner";
import Nav from "./HeaderComponent/Nav";

const Header = ({ loggin, setLoggin }) => {
  console.log("header", loggin);

  return (
    <>
      <Banner />
      <Nav loggin={loggin} setLoggin={setLoggin} />
    </>
  );
};

export default Header;
