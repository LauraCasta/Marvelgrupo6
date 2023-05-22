import React from "react";
import marvel from '../images/banner.jpg'
import "./banner.css"

const banner = () => {
    return (
            <div className="banner">
                <img src={marvel}  className="banner_img"/>
            </div>
        )
}

export default banner