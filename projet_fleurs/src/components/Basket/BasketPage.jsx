import React from 'react'
import Products from "./Products/Products";
import Header from "../Header/Header";

const products = [
    {
        img:"https://kokomo.fr/wp-content/uploads/2023/02/groupon-1-scaled.jpg.webp",
        name:"Bouquet fête des grands-mères",
        prix: "30 €",
        quantity:1
    },
    {
      img:"https://kokomo.fr/wp-content/uploads/2023/02/IMG_6440-copie-min-scaled.jpg",
      name:"Bouquet Nany",
      prix: "31,99 €",
      quantity:2
  }
]

export default function BasketPage() {
  return (
    <>
    <Header/>
    <div className='w-full flex justify-center mt-[30px] items-center flex-col'>
      <h1>page panier</h1>

       {/* parcourire chaque produit de la composant Products */}
       {products.map((product, key) =>(
                <Products
                    index={key}
                    img={product.img}
                    name={product.name}
                    prix={product.prix}
                    quantity={product.quantity}
                />
            ))} 
    </div>
    </>
  )
}
