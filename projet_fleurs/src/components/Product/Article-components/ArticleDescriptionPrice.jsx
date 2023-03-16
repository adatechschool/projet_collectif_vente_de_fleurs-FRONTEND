import React from "react";

const ArticleDescriptionPrice = () => {

    const description = "Ceci est la description de l'article, à récupérer de la BDD";
    const price = 35;



    return(
        <div id="article-text-content" className="p-5">
            <div id="description">
                {description}
            </div>
            <div id="price" className="mt-5 text-green-700 text-xl font-bold">
                {price} €
            </div>
        </div>
    )
}

export default ArticleDescriptionPrice