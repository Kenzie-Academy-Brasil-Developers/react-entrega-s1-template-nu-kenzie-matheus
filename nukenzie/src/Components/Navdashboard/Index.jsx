import React from "react";
import "./Style.css";

export function Navdashboard({ isHome, setIsHome }) {
  return (
    <nav>
      <div className="Container-Nav">
        <h2 className="H2--tittle-color">
          Nu<span className="span-tittle-color">Kenzie</span>
        </h2>

        <button
          className="Button-Nav"
          onClick={() => {
            setIsHome(!isHome);
          }}
        >
          inicio
        </button>
      </div>
    </nav>
  );
}
