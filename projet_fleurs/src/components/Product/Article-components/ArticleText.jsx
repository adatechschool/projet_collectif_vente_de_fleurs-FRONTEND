import React, { useState } from "react";

const ArticleText = (props) => {
  const [count, setCount] = useState(1);
  // ajoute article jusqu'à max articl exisstant en stock
  function handleClick() {
    if (count < props.stock) {
      setCount(count + 1);
    }
  }

  //   supprime articl
  function handleClickDecount() {
    if (count <= 1) {
      setCount((count = 1));
    } else {
      setCount(count - 1);
    }
  }
  console.log(props.name);
  return (
    <div className="w-[40%]">
      <div id="productName" className="text-4xl p-5 font-bold">
        <h1>{props.name}</h1>
      </div>
      <div id="article-text-content" className="p-5">
        <p>{props.description}</p>
        <div id="price" className="mt-5 text-green-700 text-xl font-bold">
          {props.price}€
        </div>
      </div>

      <div id="order-button-container" className="flex content-center">
        {/* Input quantité à revoir/coder */}
        <div className="w-[50%] flex m-5">
          <button className="w-10% text-4xl" onClick={handleClick}>
            +
          </button>
          <div className="w-[70px] mx-[20px] flex items-center border-2 justify-center">
            <p className="w-10% text-[20px]">{count}</p>
          </div>
          <button className="w-10% text-4xl" onClick={handleClickDecount}>
            -
          </button>
        </div>
      </div>
      <div className="w-[30%] my-5">
        <button
          type="submit"
          name="add-to-cart"
          className="ml-[20px] w-[150px] h-[40px] rounded-[4px] bg-green-700 px-2 py-1 text-white border hover:shadow-xl"
        >
          J'achète !
        </button>
      </div>
    </div>
  );
};

export default ArticleText;
