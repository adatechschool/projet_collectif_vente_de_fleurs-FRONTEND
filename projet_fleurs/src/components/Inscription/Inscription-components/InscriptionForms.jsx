import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { redirect } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ConnectionPage from "../../Connection/ConnectionPage";

function RedirectReactRouterExample() {
  return (
    <Routes>
       <Route path="connexion" element={<ConnectionPage />} />
    </Routes>
  );
}

// on définit un "schéma" pour utiliser la librairie yup afin de récupérer les données du formulaire
const schema = yup.object().shape({
    // .required : le formulaire ne se valide pas si le champ n'est pas rempli
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    adress: yup.string().required(),
    postalCode: yup.number().positive().integer().required(),
    city: yup.string().required(),
    // minimum 4 caractères, maximum 15
    password: yup.string().min(4).max(15).required(),
    // confirmation : yup vérifie si la confirmation correspond au mot de passe saisi par l'utilisateur
    passwordCheck: yup.string().oneOf([yup.ref("password"), null]).required()
})

const InscriptionForms = () => {
    
    // UseForm utilisant le résolveur Yup pour le traitement du formulaire
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    
    // fonction pour chiffrer le mot de passe avec sha256
    const hash = (pwd) => {
        // FONCTION A ECRIRE (TROUVER LIBRAIRIE DE HASH)
    }


   
    const onSubmitHandler = (data) => {
        console.log({data});
       
        // Insérer le hash du mot de passe

        // Requête à l'API à coder

        // Redirection vers la page connexion... A REFAIRE
        redirect('/connexion', { replace: true });
    }

   
    
    // affichage
    return(
<div id="forms-container" className="flex justify-center mt-5">
    <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col">
        <label className="p-2">
            Prénom: 
            <input type="text" name="firstName" {...register("firstName")} />
            <p>{errors.firstName?.message}</p>
        </label>
        <label className="p-2">
            Nom:
            <input type="text" name="lastName" {...register("lastName")} />
            <p>{errors.lastName?.message}</p>
        </label>
        <label className="p-2">
            email:
            <input type="text" name="email" {...register("email")}  />
            <p>{errors.email?.message}</p>
        </label>
        <label className="p-2">
            Adresse : 
            <input type="text" name="adress" placeholder="numéro et rue" {...register("adress")} />
            <p>{errors.adress?.message}</p>
        </label>
        <label className="p-2">
            <input type="text" name="postalCode" placeholder="code postal"  {...register("postalCode")} />
            <p>{errors.postalCode?.message}</p>
            <input type="text" name="city" placeholder="ville" {...register("city")} />
            <p>{errors.city?.message}</p>
        </label>
        <label className="p-2">
            Définissez votre mot de passe :
            <input type="password" name="password" {...register("password")} />
            <p>{errors.password?.message}</p>
        </label>
        <label className="p-2">
            Confirmez votre mot de passe :
            <input type="password" name="passwordCheck" {...register("passwordCheck")} />
            <p>{errors.passwordCheck && "Les mots de passe saisis ne correspondent pas"}</p>
        </label>


        <button type="submit" className="border bg-green-600 m-10 w-25 hover:shadow-xl">Je crée mon compte</button>
        

    </form>
    
</div>
    )}

export default InscriptionForms;