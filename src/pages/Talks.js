import React from "react";
import TalkItem from "../components/TalkItem";
import {talkList} from "../helpers/talkList";
import "../styles/Talks.css"

function Talks() {
    return (
        <div className="talks">

            <div className="container talks__container">
                <p className="title">Talks</p>

                <div className="talk-list">
                    {talkList.map((talk) => {
                        return <TalkItem 
                            title={talk.title} 
                            location={talk.location}
                            description={talk.description}/>
                    })}
                </div>
            </div>

        </div>
    );      
}

export default Talks;