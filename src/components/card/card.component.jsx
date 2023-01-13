import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { displayName, displayIcon, levels } = this.props.skin;

    const video = () => {
      if (levels[0].streamedVideo) {
        window.open(levels[0].streamedVideo, "", "width=400,height=200");
      } else {
        alert("there is no video for this");
      }
    };

    if (
      !displayName.includes("Standard") &&
      displayIcon !==
        "https://media.valorant-api.com/weaponskins/5211efa8-4efd-09bb-6cee-72b86a8a5972/displayicon.png" &&
      displayIcon !==
        "https://media.valorant-api.com/weaponskins/2a049f35-4bcd-af25-21fd-ec942e2d5007/displayicon.png" &&
      displayIcon !==
        "https://media.valorant-api.com/weaponskins/7122d78b-4e60-eb4d-5f65-738d7c1ce9ae/displayicon.png" &&
      displayIcon !==
        "https://media.valorant-api.com/weaponskins/4af88517-4949-9caa-9dda-1980f07202a4/displayicon.png" &&
      displayIcon !==
        "https://media.valorant-api.com/weaponskins/12cc9ed2-4430-d2fe-3064-f7a19b1ba7c7/displayicon.png"
    ) {
      if (displayIcon !== null) {
        return (
          <div className="card-container" key={displayName}>
            <img alt={`skin ${displayName}`} src={displayIcon} />
            {displayName === "Nitro Odin" ? console.log(this.props.skin) : null}
            <h2>{displayName}</h2>
            <button onClick={video}>Preview Skin</button>
          </div>
        );
      }
    }
  }
}

export default Card;
