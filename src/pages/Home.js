import "../sass/main.css"
import RentalItem from "../components/RentalItem"
import Banner from "../components/Banner"
import image from '../assets/image_1.jpg'



function Homepage() {
    return (
    <div className="homepage">
        <Banner image={image} tagline={["Chez vous, ", <br className="br-mobile"/>, "partout et ailleurs"]} />

        <section className="hp-rental">
        <RentalItem />
        </section>
        
    </div>
    )
}

export default Homepage