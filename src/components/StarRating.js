import "../sass/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function StarRating({ star }) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((starLoop, index) => {
        index += 1;
        return (
          <div key={index}>
            <FontAwesomeIcon
              icon={faStar}
              className={index <= parseInt(star) ? "star_on" : "star_off"}
            />
          </div>
        );
      })}
    </div>
  );
}

export default StarRating;
