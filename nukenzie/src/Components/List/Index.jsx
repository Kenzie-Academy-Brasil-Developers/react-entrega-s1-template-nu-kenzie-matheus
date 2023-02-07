import React from "react";
import { Card } from "../Card";
import NoCard from "../../img/NoCard.svg";
import "./style.css";

export function List({ listTransactions, setListTransactions }) {
  return (
    <ul className="ul-container">
      <h3>Resumo financeiro</h3>
      {listTransactions.length == 0 ? (
        <img src={NoCard} alt="" />
      ) : (
        listTransactions.map((item, index) => {
          return (
            <Card
              item={item}
              key={index}
              index={index}
              setListTransactions={setListTransactions}
              listTransactions={listTransactions}
            />
          );
        })
      )}
    </ul>
  );
}
