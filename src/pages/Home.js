import "../sass/main.css";
import RentalItem from "../components/RentalItem";
import Banner from "../components/Banner";
import image from "../assets/image_1.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * 
 * @returns <Home />
 */
function Home() {
  return (
    <>
      <Header />

      <div className="main-container">
        <Banner
          image={image}
          tagline={[
            "Chez vous, ",
            <br className="br-mobile" key="0" />,
            "partout et ailleurs",
          ]}
        />

        <section className="hp-rental">
          <RentalItem />
        </section>
      </div>
      
      <Footer />
    </>
  );
}

export default Home;
