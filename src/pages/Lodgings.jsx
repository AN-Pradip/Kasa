import { useParams } from "react-router-dom";
import lodgings from "../LodgingData.json";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Error from "../pages/Error";

function Lodgings(){
    //Get Url supposed lodgindId
    const {lodgingId} = useParams();
    
    //Find the id in the JSON file
    const lodging = lodgings.find((lodging) => lodging.id === lodgingId);

    //Separate Host name by space
    const nameSeparated = lodging.host.name.trim().split(/\s+/);

    //if the supposed lodging id was not found show error
    if(lodging){
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
                        <p className="Lodging--Host--Description"> {nameSeparated[0]} <br />{nameSeparated[1]} </p>
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
    } else {
        return(
            <Error />
        )
    }
}

export default Lodgings;