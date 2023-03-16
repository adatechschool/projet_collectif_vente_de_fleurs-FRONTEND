import React from 'react';

const Articl = (props) =>{
	return(
	    <>
		<div className="w-3/4 flex flex-col items-center justify-center ">
		     <div className="w-full">
		   	<a href="#"> <img src={props.img} alt="image articl" /> </a>
		     </div>
		    <h3>{props.nom}</h3>
		    <p> {props.prix} </p>
		</div>
	    </>
)
}

export default Articl;