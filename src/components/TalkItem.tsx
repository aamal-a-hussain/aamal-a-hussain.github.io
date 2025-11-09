import React from "react";
import TuringSeminar from "../assets/TuringSeminar.png";
import FI from "../assets/FI.png";
import AAMAS22 from "../assets/AAMAS22.png";
import wICML23 from "../assets/wICML23.png";
import ICML23 from "../assets/ICML23.png";
import IJCAI23 from "../assets/IJCAI23.png";
import AAAI24 from "../assets/AAAI24.png";
import AAMAS23 from "../assets/AAMAS23.png";
import AAMAS24 from "../assets/AAMAS24.png";
import { Talk } from "../types";

function TalkItem({ description, location, title, image_name, path }: Talk) {
  const images: Record<string, string> = {
    TuringSeminar,
    FI,
    AAMAS22,
    wICML23,
    ICML23,
    IJCAI23,
    AAAI24,
    AAMAS23,
    AAMAS24,
  };

  const imageSrc = images[image_name] || "";

  return (
    <a
      href={path || undefined}
      target="_blank"
      rel="noopener noreferrer"
      className="talk-item"
    >
      <div className="talk-img">
        <img src={imageSrc} alt={title} />
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
