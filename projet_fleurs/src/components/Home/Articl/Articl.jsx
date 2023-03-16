import React from 'react';
import { useNavigate } from 'react-router-dom';

const Articl = (props) =>{
	
	const navigate = useNavigate();
	// ajouter id de produit dans url: example: localhost:3000/produit/1
	const marsel = (userId)=>{
		navigate("/produit/"+userId)
	}
	
	return(
	    <>
		{/* parcourire tout les artcile: img, nom et prix */}
		<div className="w-3/4 flex flex-col items-center justify-center ">
		     <div className="w-full">
		   	 <img src={props.img} alt="image articl" /> 
		     </div>
			 {/* récouperer chaque id pour afficher l'article */}
			 <button className='text-lg' onClick={() => marsel(props.id[0])}>{props.nom}</button>
		    <p> {props.prix} </p>
		</div>
	    </>
)
}

export default Articl;