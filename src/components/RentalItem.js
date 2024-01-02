import "../sass/main.css";
import { rentaldata } from "../rentaldata.js";
import { NavLink } from "react-router-dom";

function RentalItem({ id, title, cover }) {
  console.log(rentaldata);

  return (
    <div className="hp-rental-container">
      {rentaldata.map(({ id, title, cover }) => (
        <div key={id}>
          <article>
            <NavLink to={`/${id}`} className="hp-rental__link">
              <img
                src={cover}
                alt="Logement"
                className="hp-rental__image"
              />
              <div className="shadow"></div>
              <h2 className="hp-rental__txt">{title}</h2>
            </NavLink>
          </article>
        </div>
      ))}
    </div>
  );
}

export default RentalItem;
