// GridMarker.jsx
import React, { useState } from "react";

const GridMarker = ({ cols, rows, symbol }) => {
  const [grid, setGrid] = useState(
    Array.from({ length: rows }, () => Array(cols).fill(0))
  );

  const totalHits = grid.flat().reduce((acc, cell) => acc + cell, 0);

  const handleCellClick = (rowIdx, colIdx) => {
    const newGrid = grid.map((row, rIdx) =>
      row.map((cell, cIdx) => (rIdx === rowIdx && cIdx === colIdx ? cell + 1 : cell))
    );
    setGrid(newGrid);
  };

  const handleHeal = () => {
    const newGrid = grid.map(row => row.map(cell => (cell > 0 ? cell - 1 : 0)));
    setGrid(newGrid);
  };

  const getCellColor = (hits) => {
    if (hits > 0) {
      const redValue = Math.min(255, 100 + hits * 30);
      return `rgb(${redValue}, 0, 0)`;
    }
    return "transparent";
  };

  return (
    <div>
      <h3>Total Hits: {totalHits}</h3>
      <button onClick={handleHeal}>Heal</button>
      <table style={{ borderCollapse: "collapse", marginTop: "10px" }}>
        <tbody>
          {grid.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((cell, colIdx) => (
                <td
                  key={colIdx}
                  onClick={() => handleCellClick(rowIdx, colIdx)}
                  style={{
                    width: "40px",
                    height: "40px",
                    textAlign: "center",
                    border: "1px solid black",
                    cursor: "pointer",
                    backgroundColor: getCellColor(cell),
                    transition: "background-color 0.3s", 
                  }}
                >
                  {cell > 0 ? cell : symbol}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GridMarker;
