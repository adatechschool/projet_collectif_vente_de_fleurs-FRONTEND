import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import ProductPage from "./components/Product/ProductPage";
import BasketPage from "./components/Basket/BasketPage";
import InscriptionPage from "./components/Inscription/InscriptionPage";
import ConnectionPage from "./components/Connection/ConnectionPage";
import Footer from "./components/Footer/Footer";
import User from "./components/User/UserPage";
import Nav from "./components/Header/HeaderComponent/Nav";
import Navbar from "./components/Header/HeaderComponent/Categories";
import { useState, createContext } from "react";

export const BasketContext = createContext();

function App() {
  const [basket, setBasket] = useState([]);
  console.log(basket);
  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      <div className="body-font font-Josefin">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produit/:produitId" element={<ProductPage />} />{" "}
          {/* TODO : changer "uid" par produit id */}
          <Route path="/panier/" element={<BasketPage />} />
          <Route path="/users/signup" element={<InscriptionPage />} />
          <Route path="/users/signin" element={<ConnectionPage />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
        <Footer />
      </div>
    </BasketContext.Provider>
  );
}

export default App;
