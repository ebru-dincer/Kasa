import "../sass/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import RentalTags from "../components/RentalTags";

import { useParams } from "react-router-dom";
import { rentaldata } from "../rentaldata";
import Host from "../components/Host";
import StarRating from "../components/StarRating";
import Dropdown from "../components/Dropdown";

function Rental() {
  const { id } = useParams();
  const data = rentaldata.filter((rental) => rental.id === id)[0];

  const equipments = data.equipments;
  const eqlist = equipments.map((element, index) => (
    <li key={index} className="eq-item__list">
      {element}
    </li>
  ));

  return (
    <div className="rental">
      <Header />
      <Slideshow pictures={data.pictures} />

      <div className="intro-container-flex">
        {/* PARTIE 1 */}
        <div>
          {/* Titre et Localisation */}
          <section className="rental-intro">
            <h1 className="rental-intro__title">{data.title}</h1>
            <p className="rental-intro__location">{data.location}</p>
          </section>
          {/* TAGS */}
          <section className="tags-container">
            {data.tags.map((tag) => (
              <RentalTags tag={tag} />
            ))}
          </section>
        </div>

        {/* PARTIE 2 */}
        <div>
          {/* PROPRIETAIRE */}
          <Host name={data.host.name} picture={data.host.picture} />
          {/* ETOILES */}
          <StarRating star={data.rating} />
        </div>
      </div>
      
      {/* DROPDOWN */}
      <div className="eq-container-flex">
        <div className="eq-item">
          <Dropdown title={"Description"} content={data.description} />
        </div>
        <div className="eq-item">
          <Dropdown title={"Equipements"} content={eqlist} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Rental;
