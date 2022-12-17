import { useParams } from "react-router-dom";
import lodgings from "../LodgingData.json";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

function Lodgings(){
    const {lodgingId} = useParams();
    const lodging = lodgings.find((lodging) => lodging.id === lodgingId);
    return(
        <div className="Lodging--Container">
            <Carousel lodgingPictures={lodging.pictures}/>
            <div className="Lodging--Details">
                <h2 className="Lodging--Title"> {lodging.title} </h2>
                <p className="Lodging--Location" > {lodging.location} </p>
                <ul className="Lodging--List" >
                    {lodging.tags.map((tag, index) => (
                        <li key={index}> {tag} </li>
                    ))}
                </ul>
                <div className="Lodging--Host">
                    <p className="Lodging--Host--Description"> {lodging.host.name} </p>
                    <img src={lodging.host.picture} alt="" className="Lodging--Host--Image"/>
                </div>
                <Rating rating={lodging.rating}/>
            </div>
            <div className="Lodging--Collapse">
                <Collapse title="Description" content={lodging.description} />
                <Collapse title="Équipement" content={lodging.equipments} />          
            </div>
        </div>
    )
}

export default Lodgings;