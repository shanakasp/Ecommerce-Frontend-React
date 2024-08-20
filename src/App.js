import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./pages/AddProduct.jsx";
import Header from "./pages/Header.jsx";

function App() {
  return (
    <div>
      <Header> </Header>
      <Routes>
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
