import logo from '../assets/logo_kasa.jpg'
import "../sass/main.css"
import { NavLink } from "react-router-dom";

function Header() {
    return (
    <div className="header">
        <img src={logo} alt='Logo de Kasa' className='header_logo' />
        <div className="header_link">
            {/* <a href="#" className='link'>Accueil</a> */}
            <NavLink to="/">Accueil</NavLink>
            {/* <a href="#">À propos</a> */}
            <NavLink to="/about">À propos</NavLink>

        </div>
    </div>
    )
}

export default Header