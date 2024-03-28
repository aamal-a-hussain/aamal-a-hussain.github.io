import React from "react";

function TalkItem({description, location, title, image_name, path}) {
    return (
    <a href={path} target="_blank" rel="noopener noreferrer" className="talk-item">
        <div className="talk-img">
            <img src={require(`../assets/${image_name}.png`)}/>
        </div>
        
        <div className="talk-details">
            <p className="talk-title"> {title} </p>
            <p className="talk-location"> {location} </p>
            <p className="talk-description"> {description} </p>
        </div>
    </a>
    );
}

export default TalkItem;