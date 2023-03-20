import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ConnectionPage = () => {
  //useNavigate permet de naviguer entre différente page ou route dans une app React
  let navigate = useNavigate();
  const angela = (id) => {
    navigate('../user/' + id);
    console.log(id);
  };

  return (
    <div class="  flex flex-col space-y-10 justify-center items-center">
      <div class="bg-white w-96 shadow-xl rounded p-5">
        <h1 class="text-3xl font-medium">S’identifier</h1>

        <form class="space-y-5 mt-5">
          <input
            type="text"
            class="w-full h-12 border border-gray-800 rounded px-3"
            placeholder="Email"
          />
          <div class="w-full flex items-center  border border-gray-800 rounded px-3">
            <input
              type="password"
              class="w-4/5 h-12"
              placeholder="Mot de passe"
            />
            <span class=" hover:bg-green-700 rounded-full px-3 ">afficher</span>
          </div>

          <div class="">
            <a href="#!" class="font-medium   rounded-full p-2">
              Mot de passe oublié ?
            </a>
          </div>

          <button
            //Utilisation de l'évenement onClick angela est une fonction qui prend l'argument 6 = id
            onClick={() => angela(6)}
            class="text-center w-full bg-green-800 rounded-full text-white py-3 font-medium"
          >
            S'identifier
          </button>
          <p>
            {' '}
            <a href="../Inscription" class=" font-medium">
              S’inscrire
            </a>{' '}
          </p>
        </form>
      </div>
    </div>
  );
};

export default ConnectionPage;
