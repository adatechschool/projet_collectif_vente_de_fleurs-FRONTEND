import React from "react";
import InscriptionForms from "./Inscription-components/InscriptionForms";
import InscriptionHeader from "./Inscription-components/InscriptionHeader";
// A vérifier à quoi ça sert mais pour l'instant ce n'est pas utilisé
//import { createStore } from 'state-pool';

const InscriptionPage = () => {
    
  return (
    <div class=" flex flex-col space-y-10 justify-center items-center">
        <div class="bg-white w-150 shadow-xl rounded p-5">
            <InscriptionHeader />
            <InscriptionForms />
        </div>
    </div>
  );
};

export default InscriptionPage;
