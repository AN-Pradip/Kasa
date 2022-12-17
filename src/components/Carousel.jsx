import React from "react";
import rightArrow from "../assets/ARROW-RIGHT.png";
import leftArrow from "../assets/ARROW-LEFT.png";
import { useState } from "react";

function Carrousel(lodgingPictures){
    lodgingPictures = lodgingPictures.lodgingPictures
    const [currentCarousel, updateCarousel] = useState(0);

    const carouselLength = lodgingPictures.length - 1;
    function nextCarouselImage() {
        updateCarousel(currentCarousel === carouselLength ? 0 : currentCarousel + 1)
    }
    function previousCarouselImage() {
        updateCarousel(currentCarousel === 0 ? carouselLength : currentCarousel - 1)
    }

    return(
        <div className="Carousel">
            <img src={lodgingPictures[currentCarousel]} alt="carouselImage" className="carousel--image" />
            <img src={leftArrow} alt="left-arrow" className="carousel--leftArrow" onClick={() => previousCarouselImage()}/>
            <img src={rightArrow} alt="right-arrow" className="carousel--rightArrow" onClick={() => nextCarouselImage()}/>
        </div>
    )
}

export default Carrousel;