import React, {useState} from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { BooleanInput } from 'react-admin';
import * as yup from 'yup';
import axios from "axios";
import AdminPage from "../AdminPage";


// On définit un "schéma" pour utiliser la librairie yup afin de récupérer les données du formulaire
const schema = yup.object().shape({
    // .required : le formulaire ne se valide pas si le champ n'est pas rempli
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().positive().integer().required(),
    size: yup.string().required(),
    stock: yup.number().positive().integer().required(),
    fleur: yup.boolean(),
    plante: yup.boolean(),
    intérieur: yup.boolean(),
    extérieur: yup.boolean(),
    images: yup.string().required(),
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
        const token = sessionStorage.getItem("token");
        const config = { headers : { Authorization: `Bearer ${token}` } }
        // Requête post à l'API avec axios
        //axios.post("https://wonderouman.vercel.app/products", {
        axios.post("http://localhost:4000/products", {
            name : data.name,
            description : data.description,
            price : data.price,
            size : data.size,
            stock : data.stock,
            images : data.images,
            //category : data.category,
            //category: "toto",
            fleur : data.fleur,
            plante : data.plante,
            intérieur : data.intérieur,
            extérieur : data.extérieur,
        }, config)
        .then((res) => {
            console.log(res.data)
            if(res.data === 'Product created !') { 
                // afficher la div de confirmation
                displayConfirm();
            }
        })
        .catch((error) => {
            console.log(error)
        });
    };

    //Catégories
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    };

    return (
    <>
    <AdminPage/>

    <div className="flex justify-center items-center mt-10">
        
        {/* Formulaire */}
        <div className="bg-white shadow-xl rounded p-5">

        <form
            class="flex flex-col space-y-2"
            onSubmit={ handleSubmit(onSubmitHandler) }
            style={{ display: confirm ? 'none' : 'flex' }}
        >

            <label className="p-1">
                <input
                    type="text"
                    className="h-10 border border-gray-800 rounded px-3"
                    placeholder="Nom du produit"
                    name="name"
                    {...register('name')}
                />
                <p>{errors.name?.message}</p>
            </label>

            <label className="p-1">
                <textarea
                    type="text"
                    className="h-24 border border-gray-800 rounded px-3"
                    placeholder="Description du produit"
                    name="description"
                    {...register('description')}
                />
                <p>{errors.description?.message}</p>
            </label>

            <label className="p-1">
                <input
                    type="text"
                    className="h-10 border border-gray-800 rounded px-3"
                    placeholder="Prix du produit"
                    name="price"
                    {...register('price')}
                />
                <p>{errors.price?.message}</p>
            </label>

            <label className="p-1">
                <input
                    type="text"
                    className="h-10 border border-gray-800 rounded px-3"
                    placeholder="Taille du produit"
                    name="size"
                    {...register('size')}
                />
                <p>{errors.size?.message}</p>
            </label>

            {/* <label class="p-1">
                <select
                    className="w-full h-10 border border-gray-800 rounded px-3"
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

            <label className="p-1">
                <input
                    type="text"
                    className="h-10 border border-gray-800 rounded px-3"
                    placeholder="Stock du produit"
                    name="stock"
                    {...register('stock')}
                />
                <p>{errors.stock?.message}</p>
            </label>

            {/* IMAGES */}

            <label className="p-1">
                <input
                    type="text"
                    className="h-10 border border-gray-800 rounded px-3"
                    placeholder="Image principale du produit"
                    name="images"
                    {...register('images')}
                />
                <p>{errors.images?.message}</p>
            </label>

            {/* <label className="p-1">
                <input
                    type="text"
                    className="h-10 border border-gray-800 rounded px-3"
                    placeholder="Image secondaire du produit"
                    name="images"
                    {...register('images')}
                />
                <p>{errors.images?.message}</p>
            </label> */}

            {/* CATEGORIES */}

            <div className="border border-gray-800 rounded px-3 pt-1 m-1 flex flex-col">
                <label >
                    <input
                        type="checkbox"
                        name="fleur"
                        defaultChecked={checked}
                        onChange={handleChange}
                        {...register('fleur')}
                    />
                    Fleur 
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="plante"
                        defaultChecked={checked}
                        onChange={handleChange}
                        {...register('plante')}
                    />
                    Plante verte 
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="intérieur"
                        defaultChecked={checked}
                        onChange={handleChange}
                        {...register('intérieur')}
                    />
                    Intérieur 
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="extérieur"
                        defaultChecked={checked}
                        onChange={handleChange}
                        {...register('extérieur')}
                    />
                    Extérieur 
                </label>
            </div>

            <button type="submit" class="text-center bg-green-900 hover:bg-green-700 rounded-full text-white py-2 font-bold">
                Ajouter le produit
            </button>

        </form>

        {/* Message de confirmation de création du produit */}
        <div class="flex flex-col m-5" style={{ display: confirm ? 'flex' : 'none' }}>
            <div class="text-xl text-green-700 m-5">Votre produit a bien été ajouté à la base de données !</div>
        </div>

        </div>

    </div>
    </>
    );
};

export default AdminForm;
