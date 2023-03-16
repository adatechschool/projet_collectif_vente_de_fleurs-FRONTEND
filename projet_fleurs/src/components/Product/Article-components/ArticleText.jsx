import React from "react";
import ArticleDescriptionPrice from "./ArticleDescriptionPrice";
import ArticleName from "./ArticleName";
import ArticleOrderButton from "./ArticleOrderButton";

const ArticleText = () => {
    return(
        <div>
            <ArticleName />
            <ArticleDescriptionPrice />
            <ArticleOrderButton />
        </div>
    )
}

export default ArticleText;