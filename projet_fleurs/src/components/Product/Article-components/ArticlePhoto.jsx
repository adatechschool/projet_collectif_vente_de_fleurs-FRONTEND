import React, { useState } from "react";

const ArticlePhoto = (props) => {
  // récupérer les images
  const [sliderData, setSliderData] = useState(props.images);

  // à quelles conditions afficher les images
  const handleClick = (index) => {
    const slider = props.images[index];
    setSliderData(slider);
  };

  return (
    <>
      <div id="photos" className="w-1/2 flex justify-center flex-col">
        <div className="w-full flex justify-center">
          <img
            className="w-[620px] max-h-full object-cover"
            src={sliderData}
            alt="images"
          />
        </div>
        <div
          id="display-all-photos"
          className=" mt-[-45px] mb-[40px] w-full flex justify-center"
        >
          {
            // porps.images.map((data, i)=>
            props.images.map((image, i) => (
              <div className=" w-[21%] mx-10 flex justify-center">
                <img
                  className="w-[138px] h-[115px]"
                  key={i}
                  src={image}
                  onClick={() => handleClick(i)}
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
