import React, { useContext } from "react";
import { BasketContext } from "../../../App";

function Products(props) {
  // const { setBasket, basket } = useContext(BasketContext);
  // console.log(basket);

  return (
    <div className="w-3/4 flex justify-evenly mt-[30px]">
      <ul className="flex justify-between border-2 items-center w-3/5">
        <li className="w-1/4" >
          <img src={props.img} alt="fleurs" className="w-[200px] h-[150px]" />
        </li>
        <li className="w-1/4 text-center">
          <b>Produit</b>
          <p>{props.name}</p>
        </li>
        <li className="w-1/4 text-center">
          <b className="">Prix</b>
          <p className="">{props.price}€ </p>
        </li>
        <li className="w-1/4 text-center" >
          <b>Quantité</b>
          <p>

          <input className="w-[20px]" type="text" value={props.quantity.length} /> 
          </p>
        </li>
      </ul>
    </div>
    // <div className="w-3/4 border-2 flex justify-evenly items-center mt-[30px]">
    //   <div className="w-1/3 ml-[200px]">
    //     <img src={props.img} alt="fleurs" className="w-[300px] h-[200px]" />
    //   </div>
    //   <div className="w-1/2">
    //     <h3>{props.name}</h3>
    //     <b className="text-[#227C20]">{props.price}</b>
    //     <p>1</p>
    //   </div>
    // </div>
  );
}

export default Products;
