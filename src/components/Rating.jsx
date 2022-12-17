import React from "react";
import GreyStar from "../assets/GREY-STAR.png";
import RedStar from "../assets/RED-STAR.png";

function Rating(rating){
    rating = rating.rating
    const allStars = [1,2,3,4,5];
    return(
        <div className="Rating--Container">
            {allStars.map((eachStar) =>
            rating >= eachStar ? 
            (<img key={eachStar} src={RedStar} alt="" />) :
            (<img key={eachStar} src={GreyStar} alt="" />)
            )}
        </div>
    )
}

export default Rating;