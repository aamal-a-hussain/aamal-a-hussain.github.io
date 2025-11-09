import React, { useState } from "react";
import TalkItem from "../components/TalkItem";
import { talkList } from "../helpers/talkList";
import Button from "../components/FilterButton";
import "../styles/Talks.css";
import { Talk } from "../types";

function Talks() {
  const [menuItem, setMenuItem] = useState(talkList);

  // Filter function
  const filter = (button: string) => {
    if (button === "All") {
      setMenuItem(talkList);
      return;
    }
    const filteredTalks = talkList.filter((talk) => talk.category === button);
    setMenuItem(filteredTalks);
  };

  return (
    <div className="talks">
      <div className="container talks__container">
        <p className="title-1">Talks</p>

        <Button filter={filter} />

        <div className="talk-list">
          {menuItem.map((talk: Talk) => {
            return (
              <TalkItem
                title={talk.title}
                location={talk.location}
                image_name={talk.image_name}
                path={talk.path || undefined}
                description={talk.description}
                year={talk.year}
                category={talk.category}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Talks;
