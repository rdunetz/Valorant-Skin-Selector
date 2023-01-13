import { Component } from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

class Cardlist extends Component {
  render() {
    const { skins } = this.props;
    return (
      <div className="card-list">
        {skins.map((skin) => {
          return <Card skin={skin} />;
        })}
      </div>
    );
  }
}

export default Cardlist;
