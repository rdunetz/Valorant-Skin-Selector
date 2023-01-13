import { Component } from "react";
import SearchBox from "./components/search-box/search-box.component";
import Cardlist from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      skins: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://valorant-api.com/v1/weapons/skins")
      .then((response) => response.json())
      .then((skins) =>
        // skins.data.forEach((skin) => {
        // })
        this.setState(() => {
          return { skins: skins.data };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { skins, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredSkins = skins.filter((skin) => {
      return skin.displayName.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Valorant Skin Search</h1>
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={onSearchChange}
          placeholder="Search Skins"
        />
        <Cardlist skins={filteredSkins} />
      </div>
    );
  }
}

export default App;
