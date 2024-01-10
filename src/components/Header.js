import logo from '../assets/logo_kasa.jpg'
import "../sass/main.css"
import { NavLink } from "react-router-dom";

/**
 * 
 * @returns {jsx} <Header />
 */
function Header() {
    return (
    <div className="header">
        <img src={logo} alt='Logo de Kasa' className='header_logo' />
        <div className="header_link">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">À propos</NavLink>
        </div>
    </div>
    )
}

export default Header