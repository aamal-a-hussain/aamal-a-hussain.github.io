import React from "react";

function TalkItem({description, location, title, image_name}) {
    return (
    <div className="talk-item">
        <div className="talk-img">
            <img src={require(`../assets/${image_name}.png`)}/>
        </div>
        
        <div className="talk-details">
            <p className="talk-title"> {title} </p>
            <p className="talk-location"> {location} </p>
            <p className="talk-description"> {description} </p>
        </div>
    </div>
    );
}

export default TalkItem;