import "../sass/main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function StarRating({star}) {
  
    console.log("star=",star)
    const test = [...Array(5)].map((star, index) => {
      index += 1;
      console.log("index=",index)
      // const starResult = index < parseInt(star) ? "star_on" : "star_off"
      let starResult 
      let starNumber = parseInt(star)
      console.log(typeof(starNumber))
      console.log(typeof(index))

      if (index === starNumber) {
        starResult = "star_on" 
      } else {
        starResult = "star_off" 
      }


      console.log("starResult=",starResult)
      
      return (
        `<div
          key={index}
          
        >
        <FontAwesomeIcon icon={faStar} 
        className={${starResult}}
        />
        </div>`
      );
    })

    console.log(test)

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
                  className={index <= parseInt(star) ? "star_on" : "star_off"} 
                  // className="star_off"
                  />
                  </div>
                );
              })}
            </div>
  );
};
        


export default StarRating