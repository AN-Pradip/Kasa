import React from "react";
import rightArrow from "../assets/ARROW-RIGHT.png";
import leftArrow from "../assets/ARROW-LEFT.png";
import { useState } from "react";

function Carrousel(lodgingPictures){
    //Initialize input
    lodgingPictures = lodgingPictures.lodgingPictures

    //set state and picture array length
    const [currentCarousel, updateCarousel] = useState(0);
    const carouselLength = lodgingPictures.length - 1;

    function nextCarouselImage() {
        updateCarousel(currentCarousel === carouselLength ? 0 : currentCarousel + 1)
    }
    function previousCarouselImage() {
        updateCarousel(currentCarousel === 0 ? carouselLength : currentCarousel - 1)
    }

    let arrowLeft;
    let arrowRight;

    //if only one picture => no arrows
    if(lodgingPictures[1] === undefined) {
        arrowLeft = ""
        arrowRight = ""
    } else {
        arrowLeft = <img src={leftArrow} alt="left-arrow" className="carousel--leftArrow" onClick={() => previousCarouselImage()}/>
        arrowRight = <img src={rightArrow} alt="right-arrow" className="carousel--rightArrow" onClick={() => nextCarouselImage()}/>
    }
    
    return(
        <div className="Carousel">
            <img src={lodgingPictures[currentCarousel]} alt="carouselImage" className="carousel--image" />
            <p className="Carousel--counter"> {currentCarousel} / {carouselLength}</p>
            {arrowLeft}
            {arrowRight}
        </div>
    )
}

export default Carrousel;