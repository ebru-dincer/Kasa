import "../sass/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import RentalTags from "../components/RentalTags";
import { useNavigate , useParams } from "react-router-dom";
import { rentaldata } from "../rentaldata";
import Host from "../components/Host";
import StarRating from "../components/StarRating";
import Dropdown from "../components/Dropdown";
import ErrorPage from "./Error";


/**
 * 
 * @returns {jsx} <Rental />
 */
function Rental() {
  const { id } = useParams();
  const data = rentaldata.filter((rental) => rental.id === id)[0];

  const navigate = useNavigate();
  if (!data) {
    navigate("/error");
    return <ErrorPage />
  }

  const equipments = data.equipments;
  const eqlist = equipments.map((element) => (
    <li key={element}>
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
              <RentalTags tag={tag} key={tag} />
            ))}
          </section>
        </div>

        {/* PARTIE 2 */}
        <div className="host-mobile">
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
          <Dropdown title={"Equipements"} content={<ul className="eq-item__list"> {eqlist} </ul>} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Rental;
