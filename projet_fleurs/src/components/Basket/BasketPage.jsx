import React, { useState, useEffect, useContext } from "react";
import Products from "./Products/Products";
//import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BasketContext } from "../../App";

export default function BasketPage(props) {
  // sessionStorage.setItem("userId", 1)
  // console.log(sessionStorage.getItem(1))
  // affiche valeur de uid
  // let { userId } = useParams();
  // console.log(userId)

  const { setBasket, basket } = useContext(BasketContext);
  //console.log(basket);

  let { userId } = useParams();
  //console.log(userId);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // récuperer des données après api
  // const fetchPosts = async () => {
  //   const responsePosts = await axios.get(
  //     `https://wonderouman.vercel.app/products`
  //   );

  //   // il faut parcourire tout les objet pour comparer id avec uid
  //   setPosts(responsePosts.data);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  let result = [];
  basket.map((product) => (result.push(product._id)));
  console.log("basket", basket);
  
  const takeOrder = (data) =>{
    // Requête post à l'API avec axios
    const token = sessionStorage.getItem("token");
    const config = { headers : { Authorization: `Bearer ${token}` } }
    // console.log("basket.name :", data.name) 
    // console.log("basket=========>", data.price)
    axios.post("https://wonderouman.vercel.app/orders",{
      userId: sessionStorage.getItem("userId"), 
      products : data
    },config)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((error, res)=>{
      console.log(res.data)
      console.log("error >>>>>>>>", error)
    })
  };


  return (
    <>
        {/* <Header/> */}
  
      <div className="flex flex-col justify-center items-center mt-[30px]">
  
        <h1 className="text-center text-4xl font-Yeseva m-5">Mon panier</h1>
  
        {/* parcourir chaque produit du composant Products */}
  
        {basket.map((product, index) => (
          <div id="container" className=" w-full flex justify-center">
            {/* où on structure l'ffichages nome, description, prix */}
            <Products
              produitId={product._id}
              name={product.name}
              img={product.images[0]}
              price={product.price}
              quantity={result.filter((id) => id == product._id)}
            />
          </div>
        ))}
  
        <button
          onClick={()=>takeOrder(basket)}
          className="text-center bg-green-700 hover:bg-green-900 rounded-full text-white p-2 mt-6 font-bold w-48"
        >Passer ma commande</button>
  
      </div>
      </>
    );
}
