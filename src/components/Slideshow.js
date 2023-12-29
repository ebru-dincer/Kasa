import "../sass/main.css"
// import image from "../assets/image_1.jpg"
import { rentaldata } from "../rentaldata"
import { useState } from "react"
import arrowRight from "../assets/arrow_right.png"
import arrowLeft from "../assets/arrow_left.png"



function Slideshow({ id, pictures, totalIndex }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? rentaldata[0].pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);    
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === rentaldata[0].pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    // const picture = rentaldata[currentIndex].picture.length;
    // console.log(picture)
    // pictures[currentIndex].length}

    return (
    <section className="slideshow">
            <div key={id}>
                <img src={pictures[currentIndex]} alt='Paysage' className='slideshow__image' />
                <img src={arrowLeft} alt='Flèche gauche' className='slideshow__arrow-left' onClick={goToPrevious} />
                <img src={arrowRight} alt='Flèche droite' className='slideshow__arrow-right' onClick={goToNext} />
                <span className="slideshow__index">{currentIndex + 1}/{totalIndex}</span>      
            </div>	
    </section>
    )
}

export default Slideshow