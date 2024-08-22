import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./pages/AddProduct.jsx";
import Header from "./pages/Header.jsx";
import Register from "./pages/Register.jsx";
import UpdateProduct from "./pages/UpdateProduct.jsx";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setAuthenticate(true);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <Header authenticate={authenticate} />
      <Routes>
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update" element={<UpdateProduct />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
