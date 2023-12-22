import "../sass/main.css"
import Header from "../components/Header"
import Banner from "../components/Banner"
import image from '../assets/image_2.jpg'
import Collapse from "../components/Collapse"
import Footer from "../components/Footer"



function About() {
    return (
    <div className="about">
        <Header />
        <Banner image={image} />
        <Collapse />
        <Footer />
    </div>
    )
}

export default About