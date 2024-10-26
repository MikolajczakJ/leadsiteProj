// ColoredText.jsx
import React from "react";

const ColoredText = ({ red, green, blue, text }) => (
  <h1 style={{ color: `#${red}${green}${blue}`, textAlign: "center" }}>{text}</h1>
);

export default ColoredText;
