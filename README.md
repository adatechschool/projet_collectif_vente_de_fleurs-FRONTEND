# WonderFlower_frontend
Naviguez sur le site __[Wonder Flower](https://wonderflower.vercel.app/)__ -- Voir le repo __[WonderFlower_backend](https://github.com/adatechschool/projet_collectif_vente_de_fleurs-BACKEND)__

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

__*5<sup>ème</sup> projet proposé par [Ada Tech School](https://adatechschool.fr/) : Site e-commerce*__



## Présentation du projet 
- __Dates:__ du 13 au 23 Mars 2023
- __Collaborateurs:__ [Audrey Doyen](https://github.com/Dre-Drey), [Angéla Duton](https://github.com/Angy41), [Anastasia Korotkova](https://github.com/Nastiakor), [Angelina Liborom](https://github.com/AngelinaLbm), [Hélène Veber](https://github.com/HeleneVeber), [Iris Gaudin](https://github.com/irisgaudin), [Marie Koscianski-Ducharlet](https://github.com/MarieKosDuc), [Morgane Lepine Utter](https://github.com/morganelepine), [Rouhullah KARIMI](https://github.com/Huor97)
- __Objectifs:__ 
  - Concevoir un site e-commerce 
  - Créer des comptes donnant des droits différents aux utilisateurs: 
      - Une page admin permettant la gestion du stock.
      - Une page client permettant d'effectuer une commande
  - Décider la stack technique en équipe: MERN
  - Concevoir l'archicteture du projet
  - Etre capable de changer de rôle au cours du projet et récupérer le code des autres (l'équipe est scindée en 2, une partie commence en front et l'autre en back, à la deuxième semaine les rôles sont inversés)

## Réalisation du Projet
### Création d'une application avec navigation
Utilisation du __router React__ pour permettre la navigation entre les différentes pages du site.

### Page d'inscription client
Formulaire créé avec les librairies __React Hook Forms__ et __Yup__. La requête de création d'un nouveau compte n'est envoyée au back-end que si le résolveur Yup valide que l'utilisateur a correctement rempli tous les champs (aucun champ incomplet, typage des champs email et code postal, correspondance des champs de saisie de mot de passe).

### Page de connexion
Champ de saisie du mot de passe qui peut être rendu visible en cliquant sur un bouton pour vérification. Récupération d'un token d'authentification et stockage en session storage.

### Navbar qui s'adapte Loggin/Logout
Grâce aux __useState__, la navbar s'adapte lorsqu'un utilisateur est connecté, lui donnant la possibilité d'accéder au panier.

### Page principale avec un système de catégories
Affichage par défaut de tous les produits proposés par le site, tri par catégorie selon le choix de l'utilisateur. Le clic sur un produit permet d'accéder à sa page détaillée.

### Page produit détaillée
Récupération et affichage des photos, de l'intitulé, de la description, du prix du produit. Ajout au panier avec gestion de la quantité commandée.

### Page panier permettant la commande
Avec __useContext__, récupération du contenu du panier créé par l'utilisateur. Requête HTTP vers l'API pour la création d'une commande en base de données, sous condition de vérification du token utilisateur. Nous avons cependant manqué de temps pour créer un affichage "Commande validée".

### Page admin
Connection en tant qu'administrateur et récupération d'un token d'authentification spécifique.

### Page ajout de produit
Formulaire de création d'un nouveau produit en base de données sous condition de vérification du token administrateur. Page d'affichage du stock.


