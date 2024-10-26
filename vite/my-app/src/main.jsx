// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GridMarker from "./GridMaker.jsx";

ReactDOM.createRoot(document.getElementById("myapp")).render(
  <React.StrictMode>
    <GridMarker cols={10} rows={10} symbol="-" />
  </React.StrictMode>,
);
