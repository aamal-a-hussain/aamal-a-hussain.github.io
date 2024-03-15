import React, { useState } from "react";
import TalkItem from "../components/TalkItem";
import {talkList} from "../helpers/talkList";
import Button from "../components/FilterButton";
import "../styles/Talks.css"

function Talks() {
    const [menuItem, setMenuItem] = useState(talkList);

    // Filter function
    const filter = (button) => {
        if (button === 'All'){
            setMenuItem(talkList)
            return 
        }
        const filteredTalks = talkList.filter(talk => talk.category === button)
        setMenuItem(filteredTalks)
    }

    return (
        <div className="talks">
            <div className="container talks__container">
                <p className="title">Talks</p>

                <Button filter={filter}/>

                <div className="talk-list">
                    {menuItem.map((talk) => {
                        return <TalkItem 
                            title={talk.title} 
                            location={talk.location}
                            image_name={talk.image_name}
                            description={talk.description}/>
                    })}
                </div>
                
            </div>

        </div>
    );      
}

export default Talks;