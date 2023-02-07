import React from "react";
import { BsTrash } from "react-icons/bs";
import "./Style.css";

export function Card({ item, setListTransactions, listTransactions }) {
  return (
    <li className="li-container">
      <div className={item.type == "entrada" ? "position" : "position grey"}>
        <div className="div-container-desc">
          <h1>{item.description}</h1>
          <span> {item.type} </span>
        </div>
        <div className="div-container-btn">
          <span>R$:{item.value}</span>
          <button
            onClick={() => {
              setListTransactions(
                listTransactions.filter(
                  (transaction) => transaction.description !== item.description
                )
              );
            }}
          >
            <BsTrash />
          </button>
        </div>
      </div>
    </li>
  );
}
