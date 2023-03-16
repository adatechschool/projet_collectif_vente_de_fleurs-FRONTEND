import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";
import Inscription from "./components/Inscription/Inscription";
import Connection from "./components/Connection/Connection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produit/:id" element={<Product />} />
        <Route path="/panier/:id" element={<Basket />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/conexion" element={<Connection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
