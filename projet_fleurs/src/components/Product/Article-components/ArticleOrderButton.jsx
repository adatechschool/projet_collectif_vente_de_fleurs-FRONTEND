import React, {useState} from "react";

const ArticleOrderButton = () => {

    const [count, setCount] = useState(0);

    // ajoute article
  function handleClick() {
        setCount(count + 1);
    
  }

//   supprime articl
  function handleClickDecount() {
    if(count <= 0){
        setCount(count = 0)
    }else{

        setCount(count - 1);
    }
  }

    return (
        <div id="order-button-container" className="flex justify-end">
            <label for="quantity_6411e0ddac09b">Quantité : </label>
            {/* Input quantité à revoir/coder */}
            <input type="number" id="quantity" className="d-none d-md-inline-block input-text qty text" step="1" min="1" max="" name="quantity" value={count} title="Qté" size="2" inputmode="numeric" autocomplete="off"></input>
            <button onClick={handleClick}>click+</button>
            <button onClick={handleClickDecount}>click-</button>
            <button type="submit" name="add-to-cart" className="bg-green-700 px-2 py-1 text-white border hover:shadow-xl">J'achète</button>
        </div>
    )
}

export default ArticleOrderButton;