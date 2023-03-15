import React from "react";
import ArticlePhoto from "./ArticlePhoto";
import Header from "./Header";
import ArticleText from "./ArticleText";

const ProductPage = () => {
    return (<div>
        <Header />
        <div id="container" className="w-full flex">
            <ArticlePhoto />
            <ArticleText />
        </div>
        
    </div>)
}

export default ProductPage;