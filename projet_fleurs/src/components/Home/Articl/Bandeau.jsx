import React from "react";
import Accueil from "../../../img/fleurs_accueil.jpg";
import Nav from "../../Header/HeaderComponent/Nav";
import Banner from "../../Header/HeaderComponent/Banner";

const Bandeau = () => {
  return (
    <>
      <Banner />
      <div className="w-full relative">
        <img
          className="max-h-screen w-full object-cover object-bottom"
          src={Accueil}
          alt="fleurs poétiques dans le vent à la campagne"
        />
        <div className="absolute w-full top-0 inset-x-0 text-center leading-4">
          <Nav />
        </div>
        <div className="absolute w-full top-40 py-3 inset-x-0 text-center leading-4">
          <h1 className="text-6xl body-font font-Yeseva m-5">Wonderflower</h1>
          <p className="text-3xl m-5">Embellissons la vie des personnes qui nous entourent</p>
          <button
            id="button"
            type="submit"
            className="bg-pink-900 shadow hover:bg-pink-700 text-white font-bold rounded-full p-3 w-40"
          >
            Notre collection
          </button>
        </div>
      </div>
    </>
  );
};

export default Bandeau;
