import React from "react";

function TalkItem({description, location, title, path}) {
    return (
    <div className="talk-item">
        <p className="talk-location"> {location} </p>
        <a href={path} target="_blank" rel="noopener noreferrer" className="talk-link">
            <p className="talk-title"> {title} </p>
            <p className="talk-description"> {description} </p>
        </a>
    </div>
    );
}

export default TalkItem;