import React from "react";
import ReactDOM from "react-dom";
// import SeasonDisplay from "./SeasonDisplay";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => position,
//     (err) => console.log(err)
//   );
//   return <div>latitude</div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude, errorMessage: "" }); // if youre updating state you need to use setState!!
        console.log(position);
      },

      (err) => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
