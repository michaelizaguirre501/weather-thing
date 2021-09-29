import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    icon: "sun",
    colorName: "orange",
  },
  winter: {
    text: "Burr, it's chilly!",
    icon: "snowflake",
    colorName: "lightblue",
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
  const { text, icon, colorName } = seasonConfig[season];
  return (
    <div className="seasonDisplay">
      <h1>
        <i
          class={`iconLeft massive ${icon} icon`}
          style={{ color: colorName }}
        ></i>
        {text}
        <i
          class={`iconRight massive ${icon} icon`}
          style={{ color: colorName }}
        ></i>
      </h1>
    </div>
  );
};

export default SeasonDisplay;
