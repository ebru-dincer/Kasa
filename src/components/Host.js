import "../sass/main.css"

function Host({name, picture}) {

    return (
    <section className="host">
        <p className="host__name">{name}</p>
        <img src={picture} alt='Portrait du propriètaire' className='host__picture' />   
    </section>
    )
}

export default Host