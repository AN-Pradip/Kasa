import * as React from "react";
import HomepageBanner from "../components/HomepageBanner";
import LodgingItems from "../components/LodgingItems";

function Homepage(){
    return(
        <div className="Homepage">
            <HomepageBanner />
            <LodgingItems />
        </div>
    )
}

export default Homepage;