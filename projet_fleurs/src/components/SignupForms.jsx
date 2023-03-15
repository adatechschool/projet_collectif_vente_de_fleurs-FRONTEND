import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SignupForms = () => {

    // states
    const {register, handleSubmit} = useForm();

    // comportements
    const onSubmit = data => console.log(data);
    // ATTENTION: avec 'required: true', le formulaire ne se valide pas si un champ est manquant

    // A FAIRE : voir comment récupérer les données, comparer le mot de passe, alerte si mot de passe erronné, envoi à l'API
    

    // affichage
    return(
<div id="forms-container" className="flex justify-center mt-5">
    <form action="submit" onSubmit={handleSubmit(onSubmit)} className="flex flex-col py-2">
        <label>
            Prénom:
            <input type="text" name="firstName" {...register("firstName", {required: true})} />
        </label>
        <label>
            Nom:
            <input type="text" name="lastName" {...register("lastName", {required: true})}/>
        </label>
        <label>
            email:
            <input type="text" name="email" {...register("email", {required: true})} />
        </label>
        <label>
            Adresse : 
            <input type="text" name="adress" placeholder="adresse (rue et numéro)" {...register("adress", {required: true})}/>
        </label>
        <label>
            <input type="text" name="postalCode" placeholder="code postal"  {...register("postalCode", {required: true})}/>
            <input type="text" name="city" placeholder="ville" {...register("city", {required: true})}/>
        </label>
        <label>
            Mot de passe :
            <input type="password" name="password" {...register("password", {required: true})}/>
        </label>
        <label>
            Mot de passe (vérification) :
            <input type="password" name="passwordCheck" {...register("passwordCheck", {required: true})}/>
        </label>

        <button>Créer mon compte</button>
    </form>
</div>
    )}

export default SignupForms;