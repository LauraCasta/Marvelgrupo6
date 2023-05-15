import React from "react";
import log from '../images/log.jpeg'
import "./nav.css"

const nav = () => {
    return (
            <div className="nav">
                <img src={log}  className="nav_logo"/>
                <div className="nav_items">
                    <a href="#" className="nav_items_cuadro"> CHARACTERS </a>
                    <a href="#" className="nav_items_cuadro"> COMICS </a>
                    <a href="#" className="nav_items_cuadro"> SERIES </a>
                    <a href="#" className="nav_items_cuadro"> STORIES </a>                                        
                </div>
            </div>
        )
}

export default nav