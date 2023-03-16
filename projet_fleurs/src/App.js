import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import ProductPage from "./components/Product/ProductPage";
import BasketPage from "./components/Basket/BasketPage";
import InscriptionPage from "./components/Inscription/InscriptionPage";
import ConnectionPage from "./components/Connection/ConnectionPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produit/:id" element={<ProductPage />} />
        <Route path="/panier/:id" element={<BasketPage />} />
        <Route path="/inscription" element={<InscriptionPage />} />
        <Route path="/connexion" element={<ConnectionPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
