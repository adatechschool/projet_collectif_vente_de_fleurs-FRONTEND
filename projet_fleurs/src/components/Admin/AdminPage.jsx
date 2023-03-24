import React from "react";
//import Header from "../Header/Header";
import { Link } from "react-router-dom";

const AdminPage = () => {

  return (
    <>
    {/* <Header/> */}
    <div className="w-full justify-center mt-[30px]">
      <h1 className="text-center text-4xl font-Yeseva m-5">Mon espace administrateur·ice</h1>

      <div className="flex justify-center mt-10">

          <Link to="/admin/products">
              <button className="bg-green-700 shadow hover:bg-green-900 text-white font-bold rounded-full p-3 m-3">Voir tous les produits</button>
          </Link>

          <Link to="/admin/form">
              <button className="bg-green-700 shadow hover:bg-green-900 text-white font-bold rounded-full p-3 m-3">Ajouter un nouveau produit</button>
          </Link>

      </div>

    </div>


    </>
  );
};

export default AdminPage;
