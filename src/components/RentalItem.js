import "../sass/main.css"
import rentalData from "../rental.json"



function RentalItem({ id, title, cover }) {

    console.log(rentalData)

    return (
        <div className="hp-rental-container">
        {rentalData.map(({ id, title, cover}) => (
            <div key={id}>
                <article>  
                    <a href="#">
                        <img src={cover} alt="Image d'un logement" className='hp-rental__image'/>
                        <div className="shadow"></div>
                        <h2 className='hp-rental__txt'>{title}</h2>
                    </a>
                </article>
            </div>	
        )
        )}
        </div>

	)
}

export default RentalItem