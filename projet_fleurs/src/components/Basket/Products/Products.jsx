import React, { useContext } from "react";
import { BasketContext } from "../../../App";

function Products(props) {
  // const { setBasket, basket } = useContext(BasketContext);
  // console.log(basket);

  return (
    <div className="w-3/4 border-2 flex justify-evenly mt-[30px]">
      <ul className="flex">
        <li>
          <img src={props.img} alt="fleurs" className="w-[300px] h-[200px]" />
        </li>
        <li>
          <h3>{props.name}</h3>
        </li>
        <li>
          <b className="text-[#227C20]">{props.price} euros</b>
        </li>
        <li>{props.quantity.length}</li>
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
