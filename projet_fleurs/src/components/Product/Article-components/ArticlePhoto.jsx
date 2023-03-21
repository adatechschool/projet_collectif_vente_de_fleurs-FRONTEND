import React, { useState } from "react";

// déconstruit le premier argument pour afficher toutes les props directement
const ArticlePhoto = ({ images }) => {
  // const { images } = props : permet d'éviter de reecrire a chaque fois images.props + permet de voir directement les props passées en arguments
  //props.image renvoie un array de strings.
  // On initialize le state avec la premiere src url de l'array props.images
  //les deux noms sont en fait la source de l'image principales et une fonction qui set le src de l'image principale
  const [mainPictureSrc, setMainPictureSrc] = useState(images[0]);
  return (
    <>
      <div id="photos" className="w-1/2 flex justify-center flex-col">
        <div className="w-full flex justify-center">
          <img
            className="w-[620px] max-h-full object-cover"
            // dans la div de l'image principale, on affiche toujours le state en src au premier load.
            src={mainPictureSrc}
            alt="images"
          />
        </div>
        <div
          id="display-all-photos"
          className=" mt-[-45px] mb-[40px] w-full flex justify-center"
        >
          {
            // Quand on clique sur les petites images (on map sur l'array), on affiche toujours toutes les images de l'array et en cliquant dessus on update le state
            images.map((imgSrc, i) => (
              <div className=" w-[21%] mx-10 flex justify-center">
                <img
                  className="w-[138px] h-[115px]"
                  key={i}
                  src={imgSrc}
                  onClick={() => setMainPictureSrc(imgSrc)}
                  alt="images"
                />
              </div>
            ))
          }
        </div>
      </div>

      {/* <div id="photos" className="w-1/2 border">
        <div if="main-photo" className="mr-20 ml-20">
          <img src={photo1} alt="main photo" className="w-auto border"></img>
        </div>
        <div id="display-all-photos" className="flex space-between">
          <img src={photo1} alt="photo-1" className="w-1/4 m-5 border"></img>
          <img src={photo2} alt="photo-1" className="w-1/4 m-5 border"></img>
          <img src={photo3} alt="photo-1" className="w-1/4 m-5 border"></img>
        </div>
      </div> */}
    </>
  );
};

export default ArticlePhoto;
