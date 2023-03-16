import React from "react";
import Articl from "./Articl/Articl";
const products = [
	{
	id:"1",
	nom:"Bouquet fête des grands-mères",
	img:"https://kokomo.fr/wp-content/uploads/2023/02/groupon-1-scaled.jpg.webp",
	prix:"70€"
},
	{
	id:"2",
	nom:"Bouquet fête des grands-mères",
	img:"https://kokomo.fr/wp-content/uploads/2023/02/groupon-1-scaled.jpg.webp",
	prix:"70€"
},
	{
	id:"3",
	nom:"Bouquet fête des grands-mères",
	img:"https://kokomo.fr/wp-content/uploads/2023/02/groupon-1-scaled.jpg.webp",
	prix:"70€"
},
	{
	id:"4",
	nom:"Bouquet fête des grands-mères",
	img:"https://kokomo.fr/wp-content/uploads/2023/02/groupon-1-scaled.jpg.webp",
	prix:"70€"
},
	{
	id:"5",
	nom:"Bouquet fête des grands-mères",
	img:"https://kokomo.fr/wp-content/uploads/2023/02/groupon-1-scaled.jpg.webp",
	prix:"70€"
},
	{
	id:"6",
	nom:"Bouquet fête des grands-mères",
	img:"https://kokomo.fr/wp-content/uploads/2023/02/groupon-1-scaled.jpg.webp",
	prix:"70€"
}
]


const HomePage = () =>{
    return(
        <>
         <div className="w-full mt-6 pl-[130px] pr-[130px] justify-items-center  grid grid-cols-3 gap-x-8">
		{products.map((produict, index)=>(
	            <Articl 
			key = {index}
			id= {produict.id}
			img = {produict.img}
			nom = {produict.nom}
			prix = {produict.prix}
			
		    />
	        ))}
	    </div>
        </>

    )

}

export default HomePage;