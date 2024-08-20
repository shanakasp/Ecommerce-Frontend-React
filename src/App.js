import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./pages/AddProduct.jsx";
import Header from "./pages/Header.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <div>
      <Header> </Header>
      <Routes>
        <Route path="/add" element={<AddProduct />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
