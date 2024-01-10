import image from '../assets/logo_kasa_white.png'
import "../sass/main.css"

/**
 * 
 * @returns {jsx} <Footer />
 */
function Footer() {
    return (
    <footer className="footer">
        <img src={image} alt='Logo de Kasa' className='footer__image' />
        <p className='footer__txt'>© 2020 Kasa. All rights reserved</p>
    </footer>
    )
}

export default Footer