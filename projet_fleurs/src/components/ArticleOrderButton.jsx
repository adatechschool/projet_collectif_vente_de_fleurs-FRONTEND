import React from "react";

const ArticleOrderButton = () => {
    return (
        <div id="order-button-container" className="flex justify-end">
            <label for="quantity_6411e0ddac09b">Quantité : </label>
            {/* Input quantité à revoir/coder */}
            <input type="number" id="quantity" className="d-none d-md-inline-block input-text qty text" step="1" min="1" max="" name="quantity" value="1" title="Qté" size="2" inputmode="numeric" autocomplete="off"></input>
            <button type="submit" name="add-to-cart" className="bg-green-700 px-2 py-1 text-white border hover:shadow-xl">J'achète</button>
        </div>
    )
}

export default ArticleOrderButton;