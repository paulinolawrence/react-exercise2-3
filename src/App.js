import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from "./components/navbar";
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ShopContextProvider } from "./context/shop-context";
import { Admin } from "./pages/admin/admin";
import { AddProduct } from "./pages/admin/add-product";
import { EditProduct } from "./pages/admin/edit-product";


function App() {
  return (
    <div className="App">
    <ToastContainer/>
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/> 
          <Route path="/admin" element = {<Admin/>}/>
          <Route path="/product/add" element = {<AddProduct/>}/>
          <Route path="/product/edit/:id" element = {<EditProduct/>}/>
        </Routes>    
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;