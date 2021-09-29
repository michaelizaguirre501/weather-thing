import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    icon: "sun",
    color: "orange",
  },
  winter: {
    text: "Burr, it's chilly!",
    icon: "snowflake",
    color: "lightblue",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon, color } = seasonConfig[season];
  return (
    <div>
      <h1>
        <i
          class={`${icon} icon`}
          style={{ color: { color }, fontSize: 100 }}
        ></i>
        {text}
        <i
          class={`${icon} icon`}
          style={{ color: { color }, fontSize: 100 }}
        ></i>
      </h1>
    </div>
  );
};

export default SeasonDisplay;
