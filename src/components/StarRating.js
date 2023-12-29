import "../sass/main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function StarRating({star}) {
  
    return (
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                index += 1;
                console.log(index)
                return (
                  <div
                    key={index}
                    
                  >
                  <FontAwesomeIcon icon={faStar} 
                  // className={index <= star ? "star_on" : "star_off"} 
                  className="star_on"
                  />
                  </div>
                );
              })}
            </div>
          );
};
        


export default StarRating