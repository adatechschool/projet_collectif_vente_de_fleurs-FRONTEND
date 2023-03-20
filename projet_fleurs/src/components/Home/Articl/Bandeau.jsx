import React from 'react';
import Accueil from '../../../img/fleurs_accueil.jpg';

const Bandeau = () => {
    return(
		<div className="w-full relative">
		   	<img className="z-0" src={Accueil} alt="fleurs poétiques dans le vent à la campagne" />
		    <div className="absolute w-full top-40 py-3 inset-x-0 text-center leading-4 hover:translate-y-1 delay-500">
                <h1>Wonderouman</h1>
                <p>Bienvenue chez nous</p>
			    <button className='text-lg'>Découvrez nos nouveautés</button>
		    </div>
		</div>
    )

}

export default Bandeau;