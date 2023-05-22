import React from "react";
import log from '../images/log.jpeg'
import "./nav.css"

const nav = () => {
    return (
            <div className="nav">
                <img src={log}  className="nav_logo"/>
                <div className="nav_items">
                    <a href="https://mcharacters6.s3.us-east-1.amazonaws.com/index.html" className="nav_items_cuadro"> CHARACTERS </a>
                    <a href="https://comics6-bucket.s3.us-east-1.amazonaws.com/index.html" className="nav_items_cuadro"> COMICS </a>
                    <a href="https://series6-bucket.s3.us-east-1.amazonaws.com/index.html" className="nav_items_cuadro"> SERIES </a>
                    <a href="https://stories6-bucket.s3.us-east-1.amazonaws.com/index.html" className="nav_items_cuadro"> STORIES </a>                                        
                </div>
            </div>
        )
}

export default nav