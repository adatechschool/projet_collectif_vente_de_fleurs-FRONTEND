import React, { useState, createContext } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import ProductPage from "./components/Product/ProductPage";
import BasketPage from "./components/Basket/BasketPage";
import InscriptionPage from "./components/Inscription/InscriptionPage";
import ConnectionPage from "./components/Connection/ConnectionPage";
import AdminPage from "./components/Admin/AdminPage.jsx";
import AdminProducts from "./components/Admin/AdminComponents/AdminProducts";
import AdminForm from "./components/Admin/AdminComponents/AdminForm.jsx";
import Footer from "./components/Footer/Footer";
import User from "./components/User/UserPage";

export const BasketContext = createContext();


function App() {
  let log;
  if (sessionStorage.getItem('token')) {
    log = true; 
  } else {
    log = false;
  }
  const [loggin, setLoggin] = useState(log);
  const [basket, setBasket] = useState([]);
  console.log(basket);
  return (

    <BasketContext.Provider value={{ basket, setBasket }}>
      <div className="body-font font-Josefin">
      <Header loggin={loggin} setLoggin={setLoggin} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produit/:produitId" element={<ProductPage />} />{" "}
          <Route path="/panier/" element={<BasketPage />} />
          <Route path="/users/signup" element={<InscriptionPage />} />
        <Route path="/users/signin" element={<ConnectionPage loggin={loggin} setLoggin={setLoggin} />} />
          <Route path="/user/:id" element={<User />} />
           <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/form" element={<AdminForm />} />
        </Routes>
        <Footer />
      </div>
    </BasketContext.Provider>

  );
}

export default App;
