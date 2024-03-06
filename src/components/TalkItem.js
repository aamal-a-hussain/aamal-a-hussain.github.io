import React from "react";

function TalkItem({description, location, title}) {
    return (
    <div className="talk-item">
        <p className="talk-title"> {title} </p>
        <p className="talk-location"> {location} </p>
        <p className="talk-description"> {description} </p>
    </div>
    );
}

export default TalkItem;