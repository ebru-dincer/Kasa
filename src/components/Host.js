import "../sass/main.css"

/**
 * 
 * @param {string} name
 * @param {string} picture
 * @returns <Host name={data.host.name} picture={data.host.picture} />
 */
function Host({name, picture}) {
    return (
    <section className="host">
        <p className="host__name">{name}</p>
        <img src={picture} alt='Portrait du propriètaire' className='host__picture' />   
    </section>
    )
}

export default Host