import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import {BrowserRouter as Router,
Routes,Route,Link} from "react-router-dom";
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout'

function App() {
  return (
    <Router>
      <Header/>
      <Link to="/" />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route exact path="/products/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <br/>
      <Footer/>
    </Router>
  );
}

export default App;
