import './Header.css'
import { Router } from "../../navigation/routes"
import logo from "../../assets/logo.jpg"
import { BrowserRouter, NavLink, Route } from "react-router-dom";

const Header = () => {



    return (
        <div className="header">
            <Router />
        </div >
    )
}

export default Header