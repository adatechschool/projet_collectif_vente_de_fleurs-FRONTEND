import React from "react";

const SignupForms = () => {

    // states

    // comportements
    const handleSubmit = () => {
        alert("Compte créé");
    }

    // affichage
    return(
<div id="forms-container" className="flex justify-center mt-5">
    <form action="submit" onSubmit={handleSubmit} className="flex flex-col py-2">
        <label>
            Prénom:
            <input type="text" name="firstName" />
        </label>
        <label>
            Nom:
            <input type="text" name="lastName" />
        </label>
        <label>
            email:
            <input type="text" name="email" />
        </label>
        <label>
            Adresse : 
            <input type="text" name="streetNumber" placeholder="numéro" />
            <input type="text" name="streetName" placeholder="rue" />
        </label>
        <label>
            <input type="text" name="postalCode" placeholder="code postal"  />
            <input type="text" name="city" placeholder="ville" />
        </label>
        <label>
            Mot de passe :
            <input type="password" name="password" />
        </label>
        <label>
            Mot de passe (vérification) :
            <input type="password" name="passwordCheck" />
        </label>

        <button>Créer mon compte</button>
    </form>
</div>
    )}

export default SignupForms;