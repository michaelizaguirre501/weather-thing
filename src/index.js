import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

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
        this.setState({ lat: position.coords.latitude }); // if youre updating state you need to use set state
      },
      (err) => console.log(err)
    );
  }

  render() {
    return <div>Latitude:{this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
