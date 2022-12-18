import * as React from "react";
import Banner from "../components/Banner";
import LodgingItems from "../components/LodgingItems";
import HomepageBannerURL from "../assets/HOMEPAGE-BANNER.png"

function Homepage(){
    return(
        <div className="Homepage">
            <Banner bannerUrl={HomepageBannerURL} content="Chez vous, partout et ailleurs"/>
            <LodgingItems />
        </div>
    )
}

export default Homepage;