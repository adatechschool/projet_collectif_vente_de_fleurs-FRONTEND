import React, {useState, useEffect} from 'react'
import Products from "./Products/Products";
import { useParams } from "react-router-dom";
import axios from 'axios';


export default function BasketPage(props) {
  // sessionStorage.setItem("userId", 1)
  // console.log(sessionStorage.getItem(1))
  // affiche valeur de uid
  // let { userId } = useParams();
  // console.log(userId)

  let { userId } = useParams();
  console.log(userId)

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);



   // récuperer des données après api
  const fetchPosts = async () => {
    const responsePosts = await axios.get(
      `https://wonderouman.vercel.app/products`
    );

    // il faut parcourire tout les objet pour comparer id avec uid
    setPosts(responsePosts.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  
  return (
    <div className='w-full flex justify-center mt-[30px] items-center flex-col'>
      <h1>page panier</h1>

       {/* parcourire chaque produit de la composant Products */}

       {posts.map((post, index) =>
        post._id === userId ? (
          <div id="container" className="w-full flex justify-center">

            {/* où on structure l'ffichages nome, description, prix */}
            <Products
              produitId={post._id}
              name={post.name}
              img={post.images[0]}
              description={post.description}
              price={post.price}
              stock={post.stock}
            />
          </div>
        ) : null
      )}
             
    </div>
  )
}
