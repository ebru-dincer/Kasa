import "../sass/main.css"
import LogItem from "../components/RentalItem"
import Banner from "../components/Banner"
import image from '../assets/image_1.jpg'



function Homepage() {

    const tagline = "Chez vous, partout et ailleurs"

    return (
    <div className="homepage">
        <Banner image={image} tagline={tagline} />

    <section className="hp-rental">
        <LogItem />
    </section>
        
    </div>
    )
}

export default Homepage