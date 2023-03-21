import React from "react";
import { useNavigate } from "react-router-dom";

const Articl = (props) => {
  
  const navigate = useNavigate();
  // ajouter id de produit dans url: example: localhost:3000/produit/1
  const marsel = (produitId) => {
    navigate("/produit/" + produitId);
  };

  return (
    <>
      {/* parcourire tout les artcile: img, nom et prix */}
      <div
        className="w-full relative m-5 cursor-pointer"
        onClick={() => marsel(props.id)}
      >
        <img
          className="max-h-96 w-full object-cover"
          src={props.img}
          alt="image article"
        />
        <div className="absolute w-full bottom-0 py-3 inset-x-0 text-center leading-4 bg-white m-auto mb-8 w-9/12 bg-opacity-90">
          {/* récouperer chaque id pour afficher l'article */}
          <p className="text-2xl">{props.nom}</p>
          <p> {props.prix} </p>
        </div>
      </div>
    </>
  );
};

export default Articl;
