import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";

// import { redirect } from 'react-router-dom';
import { Link, Routes, Route } from 'react-router-dom';
import ConnectionPage from '../../Connection/ConnectionPage';

// cette fonction semble ne pas être utilisée
// function RedirectReactRouterExample() {
//     return (
//         <Routes>
//             <Route path="connexion" element={<ConnectionPage />} />
//         </Routes>
//     );
// }

// on définit un "schéma" pour utiliser la librairie yup afin de récupérer les données du formulaire
const schema = yup.object().shape({
  // .required : le formulaire ne se valide pas si le champ n'est pas rempli
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    streetNumber: yup.string().required(),
    zipCode: yup.number().positive().integer().required(),
    city: yup.string().required(),
    // minimum 4 caractères, maximum 15
    password: yup.string().min(4).max(15).required(),
    // confirmation : yup vérifie si la confirmation correspond au mot de passe saisi par l'utilisateur
    passwordCheck: yup
        .string()
        .oneOf([yup.ref('password'), null])
        .required(),
});

const InscriptionForms = () => {
    // UseForm utilisant le résolveur Yup pour le traitement du formulaire
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });

    //useState pour l'affichage de confirmation de création de compte
    const [confirm, setConfirm] = useState(false);
    const displayConfirm = () => {
      setConfirm('true');
    };

    const onSubmitHandler = (data) => {
      console.log({ data });

      // Requête à l'API à coder
      axios.post("https://wonderouman.vercel.app/users/signup",{
            email : data.email,
            firstname : data.firstName,
            lastname : data.lastName,
            password : data.password
        })
          .then((res) => {
            console.log(res.data)
              if(res.data==='ok') { 
                console.log("coucou");
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
        <div id="forms-container" className="flex justify-center mt-20"> 
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            class="flex flex-col space-y-5 mt-5"
            style={{ display: confirm ? 'none' : 'flex' }}
          >
            <label className="p-2">
              <input
              placeholder='Prénom' 
              type="text" name="firstName" {...register('firstName')} 
              class="w-full h-12 border border-gray-800 rounded px-3"/>
              <p>{errors.firstName?.message}</p>
            </label>
            <label className="p-2">
              <input 
              placeholder='Nom'
              type="text" name="lastName" {...register('lastName')} 
              class="w-full h-12 border border-gray-800 rounded px-3"/>
              <p>{errors.lastName?.message}</p>
            </label>
            <label className="p-2">
              <input
              placeholder='email' 
              type="text" name="email" {...register('email')} 
              class="w-full h-12 border border-gray-800 rounded px-3"/>
              <p>{errors.email?.message}</p>
            </label>
            <label className="p-2">
              <input
                type="text"
                name="adress"
                class="w-full h-12 border border-gray-800 rounded px-3"
                placeholder="numéro et rue"
                {...register('adress')}
              />
              <p>{errors.adress?.message}</p>
            </label>
            <label className="p-2">
              <input
                class="w-full h-12 border border-gray-800 rounded px-3"
                type="text"
                name="zipCode"
                placeholder="code postal"
                {...register('zipCode')}
              />
              <p>{errors.zipCode?.message}</p>
              </label>
              <label className='p-2'>
              <input
                class="w-full h-12 border border-gray-800 rounded px-3"
                type="text"
                name="city"
                placeholder="ville"
                {...register('city')}
              />
              <p>{errors.city?.message}</p>
            </label>
            <label className="p-2">
              <input 
              placeholder='Mot de passe'
              type="password" name="password" {...register('password')}
              class="w-full h-12 border border-gray-800 rounded px-3"/>
              <p>{errors.password?.message}</p>
            </label>
            <label className="p-2">
              <input
                placeholder='Confirmez le mot de passe'
                class='border border-gray-800 rounded px-3'
                type="password"
                name="passwordCheck"
                {...register('passwordCheck')}
              />
              <p>
                {errors.passwordCheck &&
                  'Les mots de passe saisis ne correspondent pas'}
              </p>
            </label>

            <button
              type="submit"
              className="border bg-green-800 m-10 w-25 rounded-full py-3 text-white hover:shadow-xl"
            >
              Je crée mon compte
            </button>
          </form>

          <div
            id="registration-ok"
            className="flex flex-col m-5"
            style={{ display: confirm ? 'flex' : 'none' }}
          >
            <div className="text-xl text-green-700 m-5">
              Votre compte a bien été créé !
            </div>
            <Link
              to="/connexion"
              className="border bg-green-600 m-10 w-25 hover:shadow-xl text-center"
            >
              Connectez-vous
            </Link>
          </div>
        </div>
    );
};

export default InscriptionForms;
