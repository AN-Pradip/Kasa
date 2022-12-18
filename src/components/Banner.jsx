import React from "react";

function Banner(bannerUrl, content){
    content = bannerUrl.content
    bannerUrl = bannerUrl.bannerUrl;
    return(
        <div className="Banner" style={{backgroundImage: `url(${bannerUrl})`}}>
            <h2> {content}</h2>
        </div>
    )
}

export default Banner;