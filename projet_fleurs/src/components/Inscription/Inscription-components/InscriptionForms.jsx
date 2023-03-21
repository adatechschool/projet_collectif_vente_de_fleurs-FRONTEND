// Liste des librairies importées:
//  1)  React Hook Form est une librairie/framework pour gérer des formulaires.
//  2)  yup est une librarie complémentaire pour la gestion des formulaires
//        - {yupResolver} permet de valider le formulaire
//  3)  axios librairie qui facilite les requete http
//  4)  {Link} dans react-router-dom permet le changement de page

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";
import { Link } from 'react-router-dom';

// on définit un "schéma" pour utiliser la librairie yup afin de récupérer les données du formulaire
const schema = yup.object().shape({
  // .required : le formulaire ne se valide pas si le champ n'est pas rempli
  email: yup.string().email().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  // minimum 4 caractères, maximum 15
  password: yup.string().min(4).max(15).required(),
  // confirmation : yup vérifie si la confirmation correspond au mot de passe saisi par l'utilisateur
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required(),
  streetNumber: yup.string().required(),
  //zipCode je mettrai en string
  zipCode: yup.number().positive().integer().required(),
  city: yup.string().required(),
});

const InscriptionForms = () => {
  // UseForm utilise le résolveur Yup pour le traitement du formulaire:
  //    - register => enregistre un élément et applique les règles de validation
  //    - handleSubmit => fonction qui reçoit les info du formulaire
  //    - reset => clear le formulaire
  //    - formState: {errors} => renvoie les erreurs de remplissage
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  //useState pour l'affichage de confirmation de création de compte
  const [confirm, setConfirm] = useState(false);
  const displayConfirm = () => {
    setConfirm(true);
  };

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
    // Requête post à l'API avec axios
    //axios.post("https://wonderouman.vercel.app/users/signup",{
     axios.post("http://localhost:8000/users/signup", {
      email : data.email,
      firstname : data.firstname,
      lastname : data.lastname,
      password : data.password,
      streetNumber : data.streetNumber,
      zipCode : data.zipCode,
      city : data.city,
    })
    .then((res) => {
      console.log(res.data)
      if(res.data === 'ok') { 
        // afficher la div de confirmation
        displayConfirm();
      }
    })
    .catch((error) => {
      console.log(error)
    });
  };

  // affichage
  return (
    <div id="forms-container" class="flex justify-center mt-5"> 
      <form
        class="flex flex-col space-y-1 mt-1"
        onSubmit={handleSubmit(onSubmitHandler)}
        style={{ display: confirm ? 'none' : 'flex' }}
      >
        <label class="p-1">
          <input
            class="w-full h-12 border border-gray-800 rounded px-3"
            placeholder='Prénom' 
            type="text" name="firstname" {...register('firstname')} 
          />
          <p>{errors.firstname?.message}</p>
        </label >
        <label class="p-1">
          <input 
            class="w-full h-12 border border-gray-800 rounded px-3"
            placeholder='Nom'
            type="text" name="lastname" {...register('lastname')} 
          />
          <p>{errors.lastname?.message}</p>
        </label>
        <label class="p-1">
          <input
            class="w-full h-12 border border-gray-800 rounded px-3"
            placeholder='email' 
            type="text" name="email" {...register('email')} 
          />
          <p>{errors.email?.message}</p>
        </label>
        <label class="p-1">
          <input
            class="w-full h-12 border border-gray-800 rounded px-3"
            placeholder="Numéro et rue"
            type="text" name="streetNumber" {...register('streetNumber')}
          />
          <p>{errors.streetNumber?.message}</p>
        </label>
        <label class="p-1">
          <input
            class="w-full h-12 border border-gray-800 rounded px-3"
            placeholder="Code postal"
            type="text" name="zipCode" {...register('zipCode')}
          />
          <p>{errors.zipCode?.message}</p>
        </label>
        <label class="p-1">
          <input
            class="w-full h-12 border border-gray-800 rounded px-3"
            placeholder="Ville"
            type="text" name="city" {...register('city')}
          />
          <p>{errors.city?.message}</p>
        </label>
        <label class="p-1">
          <input 
            class="w-full h-12 border border-gray-800 rounded px-3"
            placeholder='Mot de passe'
            type="password" name="password" {...register('password')}
          />
          <p>{errors.password?.message}</p>
        </label>
        <label class="p-1">
          <input
            class="w-full h-12 border border-gray-800 rounded px-3"
            placeholder='Confirmez le mot de passe'
            type="password" name="passwordCheck" {...register('passwordCheck')}
          />
          <p>
            {errors.passwordCheck &&
              'Les mots de passe saisis ne correspondent pas'}
          </p>
        </label>

        <button
          class="border bg-green-800 m-100 w-25 rounded-full py-3 text-white hover:shadow-xl"
          type="submit"
        >
          Je crée mon compte
        </button>
      </form>

      <div
        id="registration-ok"
        class="flex flex-col m-5"
        style={{ display: confirm ? 'flex' : 'none' }}
      >
        <div class="text-xl text-green-700 m-5">
          Votre compte a bien été créé !
        </div>
        <Link
          to="/users/signin"
          class="border bg-green-800 m-100 w-25 rounded-full py-3 text-white hover:shadow-xl text-center"
        >
          Connectez-vous
        </Link>
      </div>
    </div>
  );
};

export default InscriptionForms;
