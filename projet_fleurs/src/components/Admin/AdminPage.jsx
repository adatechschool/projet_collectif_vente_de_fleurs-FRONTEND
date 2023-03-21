import React, {useEffect, useState, useNavigate} from "react";
import Header from "../Header/Header";
import axios from "axios";

const AdminPage = () => {
    // affichage des données
    const [products, setProducts] = useState([]);
    // le chargement des données avant affichage
    const [loading, setLoading] = useState(true);

    // récupérer les données auprès de l'api
    const fetchProducts = async () => {
        const responseProducts = await axios.get(`https://wonderouman.vercel.app/products`);
        setProducts(responseProducts.data);
    setLoading(false);
    console.log(responseProducts.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //Récupérer l'id du produit...
  const navigate = useNavigate();
  //...pour l'ajouter dans url : localhost:3000/products/1
  const marsel = (productId) => {
    navigate("/products/" + productId);
  };

  //Supprimer un produit de la BDD
  const deleteProduct = event => {
    event.preventDefault(); //empêcher le rechargement de la page
    axios
        .delete(`https://wonderouman.vercel.app${marsel}`)
        .then(res => {
            alert("Product deleted!");
            setProducts(null);
        })
  }

  return (
    <>
    <Header/>
    <div className="">
        <h1 className="text-3xl font-bold text-center">Espace administrateur·ice</h1>
        {loading ? (<div>Data is loading</div>) : (
            <div className="grid justify-items-center m-10">
                {products.map((post, index) => (
                    <table class="table-fixed w-6/12 border-collapse border border-slate-400">
                        {/* <thead>
                            <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                            </tr>
                        </thead> */}
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 w-72 p-2 font-bold">{post.name}</td>
                                <td className="border border-slate-300 w-20 p-2 text-center">{post.price + "€"}</td>
                                <td className="border border-slate-300 w-96 p-2">{post.description}</td>
                                {/* <td>{post.category}</td> */}
                                <td className="border border-slate-300 w-20 p-2 text-center">{post.stock}</td>
                                <td>
                                    <button
                                        onClick={deleteProduct}
                                        class="inline-flex items-center justify-center w-8 h-8 ml-2 text-white transition-colors duration-150 bg-green-900 rounded-lg focus:shadow-outline hover:bg-green-700"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    </button>                                
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ))}
            </div>
            
        )}
    </div>
    </>
  );
};

export default AdminPage;
