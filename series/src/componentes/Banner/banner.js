import React from "react";
import marvel from '../images/series_marvel2.png'
import "./banner.css"

const banner = () => {
    return (
            <div className="banner">
                <img src={marvel}  className="banner_img"/>
            </div>
        )
}

export default banner