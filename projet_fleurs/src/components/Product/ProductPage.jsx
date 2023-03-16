import React from "react";
import ArticlePhoto from "./Article-components/ArticlePhoto";
import ArticleText from "./Article-components/ArticleText";

const ProductPage = () => {
  return (
    <div>
      <div id="container" className="w-full flex">
        <ArticlePhoto />
        <ArticleText />
      </div>
    </div>
  );
};

export default ProductPage;
