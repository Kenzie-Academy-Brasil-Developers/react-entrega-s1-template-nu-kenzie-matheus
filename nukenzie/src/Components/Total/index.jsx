import React from "react";
import "./Style.css";

export function Reduce({ listTransactions }) {
  return (
    <div className="div-container">
      <p className="Color-p">
        <span>Valor Total:</span>
        {listTransactions.reduce((acculador, currentValue) => {
          if (currentValue.type == "saída") {
            return acculador - Number(currentValue.value);
          }
          return acculador + Number(currentValue.value);
        }, 0)}
      </p>
      <span className="span-desc">O valor se refere ao saldo</span>
    </div>
  );
}
