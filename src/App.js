import "./App.css";
import Navbar from "./Componants/Navbar";
import Sidebar from "./Componants/Sidebar";
import Home from "./Componants/Pages/Home";
import Products from "./Componants/Pages/Products";
import { Outlet, Route, Routes } from "react-router-dom";
import AddProduct from "./Componants/Pages/AddProduct";
import ProductDetails from "./Componants/Pages/ProductDetails";
import EditProduct from "./Componants/Pages/EditProduct";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="products"
              element={
                <>
                  <Outlet />
                </>
              }
            >
              <Route path="" element={<Products />} />
              <Route path="add" element={<AddProduct />} />
              <Route path=":productID" element={<ProductDetails />} />
              <Route path="/products/:productId/edit" element={<EditProduct />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
