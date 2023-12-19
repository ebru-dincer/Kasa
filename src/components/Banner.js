import image from '../assets/image_1.jpg'
import "../sass/main.css"

function Banner() {
    return (
    <section className="hp-banner">
        <img src={image} alt='Image de rocher' className='hp-banner__image' />
        <h1 className='hp-banner__txt'>Chez vous, partout et ailleurs</h1>
    </section>
    )
}

export default Banner