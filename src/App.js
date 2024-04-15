import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './pages/Home/home';
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Login } from './pages/LogIn/login';
import { SignIn } from './pages/sign-in/sign-in';
import { Payment } from './pages/Payment/payment';
import { Sugest } from './pages/sugest/sugest';
import { ShopContextProvider } from './context/shop-context';


function App() {
    return ( <
        div className = "App" >
        <
        ShopContextProvider >
        <
        Router >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = '/Home'
        element = { < Home / > }
        /> <
        Route path = "/"
        element = { < Shop / > }
        /> <
        Route path = "/cart"
        element = { < Cart / > }
        /> <
        Route path = '/login'
        element = { < Login / > }
        /> <
        Route path = '/signin'
        element = { < SignIn / > }
        /> <
        Route path = '/Payment'
        element = { < Payment / > }
        /> <
        Route path = '/Sugest'
        element = { < Sugest / > }
        /> <
        /Routes> <
        /Router> <
        /ShopContextProvider> <
        /div>
    );
}

export default App;