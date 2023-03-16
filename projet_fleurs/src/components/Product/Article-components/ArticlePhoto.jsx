import React, {useState} from "react";
import photo1 from "../../../img/ficus-1.jpg";
import photo2 from "../../../img/ficus-2.jpg";
import photo3 from "../../../img/ficus-3.jpg";

// A coder : mécanique d'affichage des images en cliquant dessus

const ArticlePhoto = () => {

  const imgs=[
    {id:0, value:"https://kokomo.fr/wp-content/uploads/2023/02/groupon-1-scaled.jpg.webp"},
    {id:0, value:"https://kokomo.fr/wp-content/uploads/2023/02/groupon-2-scaled.jpg.webp"},
    {id:0, value:"https://kokomo.fr/wp-content/uploads/2023/02/groupon-scaled.jpg.webp"}
  ]

  const[sliderData, setSliderData] = useState(imgs[0]);

  const handleClick=(index)=>{
    const slider=imgs[index];
    setSliderData(slider);
  }

  return (
    <>
      <div id="photos" className="w-1/2 flex justify-cente flex-col">
        <div className="w-full flex justify-center">
          <img if="main-photo" className="w-[620px] h-[370px]" src={sliderData.value} alt="images" />
        </div>
        <div id="display-all-photos" className=" mt-[-45px] mb-[40px] w-full flex justify-center">
          {
            imgs.map((data, i)=>
              <div className=" w-[21%] flex justify-center">
                <img className="w-[138px] h-[115px]" key={i} src={data.value} onClick={()=>handleClick(i)} alt="" />

              </div>
            )
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