import "../sass/main.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import image from "../assets/image_2.jpg";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";

const textContentAbout = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

/**
 *
 * @returns <About />
 */
function About() {
  return (
    <div className="about">
      <Header />
      <Banner image={image} />

      <div className="about-dpd-container">
        {textContentAbout.map((item) => (
          <Dropdown title={item.title} content={item.content} key={item.title} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default About;
