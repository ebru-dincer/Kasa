import "../sass/main.css"

function Banner({image, tagline}) {

    return (
    <section className="hp-banner">
        <img src={image} alt='Paysage' className='hp-banner__image' />
        {tagline ?
        <h1 className='hp-banner__txt'>{tagline}</h1> : null }
    </section>
    )
}

export default Banner