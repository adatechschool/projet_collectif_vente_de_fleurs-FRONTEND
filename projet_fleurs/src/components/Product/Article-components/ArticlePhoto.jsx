import React from "react";
import photo1 from "../img/ficus-1.jpg";
import photo2 from "../img/ficus-2.jpg";
import photo3 from "../img/ficus-3.jpg";


// A coder : mécanique d'affichage des images en cliquant dessus



const ArticlePhoto = () => {
    return (
    <>
        <div id="photos" className="w-1/2 border">
            <div if="main-photo" className="mr-20 ml-20">
                <img src={photo1} alt="main photo" className="w-auto border"></img>
            </div>
            <div id="display-all-photos" className="flex space-between">
                <img src={photo1} alt="photo-1" className="w-1/4 m-5 border"></img>
                <img src={photo2} alt="photo-1" className="w-1/4 m-5 border"></img>
                <img src={photo3} alt="photo-1"className="w-1/4 m-5 border"></img>
            </div>
        </div>       
    </>
    ) 
};

export default ArticlePhoto;