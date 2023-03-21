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

function App() {
  return (
    <div className="body-font font-Josefin">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produit/:uid" element={<ProductPage />} />{" "}
        {/* TODO : changer "uid" par produit id */}
        <Route path="/panier/:id" element={<BasketPage />} />
        <Route path="/inscription" element={<InscriptionPage />} />
        <Route path="/connexion" element={<ConnectionPage />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
