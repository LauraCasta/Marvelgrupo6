import React from "react";
import marvel from '../images/bannercomic.jpg'
import "./banner.css"

const Banner = () => {
    return (
            <div className="banner">
                <img src={marvel}  className="banner_img"/>
            </div>
        )
}

export default Banner