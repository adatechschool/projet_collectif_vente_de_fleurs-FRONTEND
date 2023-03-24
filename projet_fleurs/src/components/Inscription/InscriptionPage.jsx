import React from "react";
import InscriptionForms from "./Inscription-components/InscriptionForms";
import InscriptionHeader from "./Inscription-components/InscriptionHeader";
//import Header from "../Header/Header";
// A vérifier à quoi ça sert mais pour l'instant ce n'est pas utilisé
//import { createStore } from 'state-pool';

const InscriptionPage = () => {
    
  return (
    <>
    {/* <Header /> */}
    <div class=" flex flex-col space-y-10 justify-center items-center">
        <div class="bg-white shadow-xl rounded p-8">
            <InscriptionHeader />
            <InscriptionForms />
        </div>
    </div>
    </>
  );
};

export default InscriptionPage;
