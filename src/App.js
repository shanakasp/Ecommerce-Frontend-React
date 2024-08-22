import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./pages/AddProduct.jsx";
import Header from "./pages/Header.jsx";
import Register from "./pages/Register.jsx";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setAuthenticate(true);
      console.log("User is authenticated:", authenticate);
    }
  }, [authenticate]);

  return (
    <div>
      <Header authenticate={authenticate} />
      <Routes>
        <Route path="/add" element={<AddProduct />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
