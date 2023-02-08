import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NavBar} from './components/navbar';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
import "react-notifications/lib/notifications.css"
import {NotificationContainer} from 'react-notifications';
import { ShopContextProvider } from "./context/shop-context";
import { Modal } from "./pages/cart/modal";

function App() {
  return (
    <div className="App">
    <NotificationContainer/>
      <ShopContextProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/> 
          <Route path="/checkout" element= {<Modal/>}/> 
        </Routes>    
      </Router>
      </ShopContextProvider>
      
    </div>
  );
}

export default App;