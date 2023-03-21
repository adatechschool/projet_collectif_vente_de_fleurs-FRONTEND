import React, {useState} from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";
import AdminPage from "../AdminPage";

// On définit un "schéma" pour utiliser la librairie yup afin de récupérer les données du formulaire
const schema = yup.object().shape({
    // .required : le formulaire ne se valide pas si le champ n'est pas rempli
    name: yup.string().email().required(),
    description: yup.string().required(),
    //images: yup.string().required(),
    price: yup.number().positive().integer().required(),
    size: yup.string().required(),
    //category: yup.string().required(),
    stock: yup.number().positive().integer().required(),
  });

const AdminForm = () => {
    // UseForm utilise le résolveur Yup pour le traitement du formulaire:
    //    - register => enregistre un élément et applique les règles de validation
    //    - handleSubmit => fonction qui reçoit les info du formulaire
    //    - reset => clear le formulaire
    //    - formState: {errors} => renvoie les erreurs de remplissage
    const { register, handleSubmit, formState: { errors }, reset } = useForm ({
        resolver: yupResolver(schema),
    });

    //useState pour l'affichage de confirmation de création de compte
    const [confirm, setConfirm] = useState(false);
    const displayConfirm = () => {
        setConfirm('true');
    };

    //Recevoir les infos du formulaire
    const onSubmitHandler = (data) => {
        console.log({ data });
        reset(); //efface le formulaire

        // Requête post à l'API avec axios
        axios.post("https://wonderouman.vercel.app/products/:id",{
            name : data.name,
            description : data.description,
            //images : data.images,
            price : data.price,
            size : data.size,
            //category : data.category,
            stock : data.stock,
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

    return (
    <>
    <AdminPage/>

    <div className="flex justify-center space-y-10 items-center mt-10">
        
        <div className="bg-white shadow-xl rounded p-5">

        <form
            class="flex flex-col space-y-2"
            onSubmit={ handleSubmit(onSubmitHandler) }
            style={{ display: confirm ? 'none' : 'flex' }}
        >

            <label class="p-1">
                <input
                    type="text"
                    className="h-12 border border-gray-800 rounded px-3"
                    placeholder="Nom du produit"
                    name="name"
                    {...register('name')}
                />
                <p>{errors.name?.message}</p>
            </label>

            <label class="p-1">
                <textarea
                    type="text"
                    className="h-20 border border-gray-800 rounded px-3"
                    placeholder="Description du produit"
                    name="description"
                    {...register('description')}
                />
                <p>{errors.description?.message}</p>
            </label>

            <label class="p-1">
                <input
                    type="text"
                    className="h-12 border border-gray-800 rounded px-3"
                    placeholder="Prix du produit"
                    name="price"
                    {...register('price')}
                />
                <p>{errors.price?.message}</p>
            </label>

            <label class="p-1">
                <input
                    type="text"
                    className="h-12 border border-gray-800 rounded px-3"
                    placeholder="Taille du produit"
                    name="size"
                    {...register('size')}
                />
                <p>{errors.size?.message}</p>
            </label>

            {/* <label class="p-1">
                <select
                    className="w-full h-12 border border-gray-800 rounded px-3"
                    name="category"
                    {...register('category')}
                >
                        <option value="plante">Plante verte</option>
                        <option value="fleur">Fleur</option>
                        <option value="interieur">Plante d'intérieur</option>
                        <option value="exterieur">Plante d'extérieur</option>
                </select>
                <p>{errors.category?.message}</p>
            </label> */}

            <label class="p-1">
                <input
                    type="text"
                    className="h-12 border border-gray-800 rounded px-3"
                    placeholder="Stock du produit"
                    name="stock"
                    {...register('stock')}
                />
                <p>{errors.stock?.message}</p>
            </label>

            {/* <label class="p-1">
                <input
                    type="file"
                    className=""
                    placeholder="Images du produit"
                    name="images"
                    {...register('images')}
                />
                <p>{errors.images?.message}</p>
            </label> */}

            <button type="submit" class="text-center bg-green-900 hover:bg-green-700 rounded-full text-white py-2 font-bold">
                Ajouter le produit
            </button>

        </form>

        <div class="flex flex-col m-5" style={{ display: confirm ? 'flex' : 'none' }}>
            <div class="text-xl text-green-700 m-5">Votre produit a bien été créé !</div>
        </div>

        </div>

    </div>
    </>
    );
};

export default AdminForm;
