import React from "react";
import { Link } from "react-router-dom";

function PublicationItem({conference, title, authors, path}) {
    return (
    <div className="publicationItem">
        <h1> {title} </h1>
        <p> {authors} </p>
        <p> {conference} </p>
        {/* <div>
            <Link to={{ pathname: path }} target="_blank"> Click to open HereWeCode (new tab) </Link>
        </div> */}
    </div>
    );
}

export default PublicationItem;