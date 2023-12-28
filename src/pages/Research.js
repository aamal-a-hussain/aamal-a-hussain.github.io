import React from "react";
import PublicationItem from "../components/PublicationItem";
import {publicationList} from "../helpers/publicationList";
import "../styles/Research.css"

function Research() {
    return <div className="publication">
        <h1>Publications</h1>
        <div className="publicationList">
            {publicationList.map((publication) => {
                return <PublicationItem 
                    title={publication.title} 
                    authors={publication.authors} 
                    conference={publication.conference}
                    path={publication.path}/>
            })}
        </div>
    </div>;
}

export default Research;