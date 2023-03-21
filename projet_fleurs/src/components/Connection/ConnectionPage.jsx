import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// on définit un "schéma" pour utiliser la librairie yup afin de récupérer les données du formulaire
const schema = yup.object().shape({
  // .required : le formulaire ne se valide pas si le champ n'est pas rempli
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const ConnectionPage = () => {
  // utilisation du résolveur yup
    const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  //useState pour l'affichage d'erreur en cas d'email/mdp invalide
    const [confirm, setConfirm] = useState(false);
    const displayConfirm = () => {
      setConfirm(true);
    };

    // variable pour la redirection
    const navigate = useNavigate();
  

  const onSubmitHandler = (data) => {
    reset()
    // Requête post à l'API avec axios
    // axios.post("https://wonderouman.vercel.app/users/signup",{
     axios.post("http://localhost:4000/users/signin", {
      email : data.email,
      password : data.password,
    })
    .then((res) => {
      // réponse du serveur : objet contenant l'ID utilisateur et le token (cf back)
      //console.log(res.data);
           
      if(res.status === 200) { 
        // stockage de l'ID et du token en sessionStorage (attention : valable pour un seul onglet,
        // s'efface à la fermeture du navigateur !)
        // -------   Amélioration possible : utiliser un gestionnaire plus sécurisé -----
        sessionStorage.setItem("userId", res.data.userId)
        sessionStorage.setItem("token", res.data.token)
        sessionStorage.setItem('admin', res.data.admin)

        // Récupération des deux variables id et token :
        // console.log("id stocké", sessionStorage.getItem("userId"))
        // console.log("token stocké", sessionStorage.getItem("token"))
        navigate('../')
      }       
    })
    .catch((error) => {
      console.log(error)
      displayConfirm()
    });
  };

  return (
    <div class="  flex flex-col space-y-10 justify-center items-center">
      <div class="bg-white w-96 shadow-xl rounded p-5">
        <h1 class="text-3xl font-medium">S’identifier</h1>

        <form class="space-y-5 mt-5"
        onSubmit={handleSubmit(onSubmitHandler)} >
          <input
            type="text"
            class="w-full h-12 border border-gray-800 rounded px-3"
            placeholder="Email"
            name="email" {...register('email')} 
          />
          <p>{errors.email?.message}</p>
          <div class="w-full flex items-center  border border-gray-800 rounded px-3">
            <input
              type="password"
              class="w-4/5 h-12"
              placeholder="Mot de passe"
              name="password" {...register('password')}
            />
            <span class=" hover:bg-green-700 rounded-full px-3 ">afficher</span>
          </div>
          <p>{errors.password?.message}</p>

          <div class="">
            <a href="#!" class="font-medium   rounded-full p-2">
              Mot de passe oublié ?
            </a>
          </div>

          <button
            type="submit"
            class="text-center w-full bg-green-800 rounded-full text-white py-3 font-medium"
          >
            S'identifier
          </button>
        <div id="confirm signin" class="text-xl text-green-700 m-5"           
        style={{ display: confirm ? 'flex' : 'none' }}
        >
          email ou mot de passe invalide !
        </div>
          <p>
            {' '}
            <a href="../users/signup" class=" font-medium">
              S’inscrire
            </a>{' '}
          </p>
        </form>
      </div>
    </div>
  );
};

export default ConnectionPage;


