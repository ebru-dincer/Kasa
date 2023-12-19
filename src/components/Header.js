import logo from '../assets/logo_kasa.jpg'
import "../sass/main.css"

function Header() {
    return (
    <div className="header">
        <img src={logo} alt='Logo de Kasa' className='header_logo' />
        <div className="header_link">
            <a href="#" className='link'>Accueil</a>
            <a href="#">À propos</a>
        </div>
    </div>
    )
}

export default Header