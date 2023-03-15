import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Header />

      <Navbar />
      <Login />
    </div>
  );
}

export default App;
