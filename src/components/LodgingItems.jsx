import React from "react";
import { Link } from "react-router-dom";

import lodgings from "../LodgingData.json";

function LodgingItems(){
    return(
        <section className="LodgingItems--Container">
            {lodgings.map((lodging) => {
                return(
                    <article key={lodging.id}>
                        <Link to={`/lodging/${lodging.id}`} style={{ textDecoration: 'none' }}>
                            <div className="LodgingItems--articles">
                                <img src={lodging.cover} alt="" className="articles--img" />
                                <h2 className="articles--title">{lodging.title}</h2>
                            </div>
                        </Link>
                    </article>
                )
                })}
        </section>
    )
}

export default LodgingItems;