// HotButton.jsx
import React, { useEffect } from "react";

const HotButton = ({ name, onClick }) => {
  // Wypisuje nazwę przycisku przy montowaniu komponentu
  useEffect(() => {
    console.log("HotButton: " + name);
  }, [name]);

  return (
    <button onClick={() => onClick({ name })}>
      {name}
    </button>
  );
};

export default HotButton;