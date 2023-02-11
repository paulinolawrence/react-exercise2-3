import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NavBar} from './components/navbar';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ShopContextProvider } from "./context/shop-context";
import { MyModal } from "./components/mymodal";



function App() {
  return (
    <div className="App">
    <ToastContainer/>
      <ShopContextProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/> 
          <Route path="/confirmation" element = {<MyModal/>}/>
        </Routes>    
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;