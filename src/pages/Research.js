import React from "react";
import PublicationItem from "../components/PublicationItem";
import {publicationList} from "../helpers/publicationList";
import "../styles/Research.css"

function Research() {
    return (
        <div className="publication">

            <div className="container publication__container">
                <p className="title-1">Publications</p>

                <div className="publication-list">
                    {publicationList.map((publication) => {
                        return <PublicationItem 
                            title={publication.title} 
                            authors={publication.authors} 
                            conference={publication.conference}
                            description={publication.description}
                            path={publication.path}/>
                    })}
                </div>
            </div>

        </div>
    );      
}

export default Research;