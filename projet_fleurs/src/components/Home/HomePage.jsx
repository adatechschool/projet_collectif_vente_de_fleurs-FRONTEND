import React, { useState, useEffect } from "react";
import Articl from "./Articl/Articl";
import Bandeau from "./Articl/Bandeau";
import axios from "axios";
import Categories from "../Header/HeaderComponent/Categories";

const HomePage = () => {
  // affichage des données
  const [posts, setPosts] = useState([]);
  // la chargement des données avant affichage
  const [loading, setLoading] = useState(true);

  // récouperer des données après api
  const fetchPosts = async () => {
    const responsePosts = await axios.get(
      `https://wonderouman.vercel.app/products`
    );
    setPosts(responsePosts.data);
    setLoading(false);
    console.log(responsePosts.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Bandeau />
      <Categories />
      {loading ? (
        <div>Data is loading</div>
      ) : (
        <div className="w-full mt-6 pl-[130px] pr-[130px] justify-items-center  grid grid-cols-3 gap-x-24">
          {posts.map((post, index) => (
            <Articl
              key={index}
              id={post._id}
              img={post.images[0]}
              nom={post.name}
              prix={post.price + "€"}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;
