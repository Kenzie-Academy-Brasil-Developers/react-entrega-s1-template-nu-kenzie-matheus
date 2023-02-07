import React, { useState } from "react";
import "./style.css";

export function Forms({ listTransactions, setListTransactions }) {
  const [inputDescription, setinputDescription] = useState("");
  const [inputValue, setinputValue] = useState("");
  const [inputSelect, setinputSelect] = useState("entrada");

  function handleSubmit(event) {
    event.preventDefault();

    const card = {
      description: inputDescription,
      value: inputValue,
      type: inputSelect,
    };

    setListTransactions([...listTransactions, card]);
  }

  return (
    <form className="ContainerForms" onSubmit={handleSubmit}>
      <label htmlFor="">
        Descrição
        <input
          type="text"
          className="inputDesc"
          placeholder="Digite aqui sua descrição"
          id="desc"
          onChange={(event) => {
            setinputDescription(event.target.value);
          }}
        />
      </label>

      <div className="Div-gap">
        <label htmlFor="">
          Valor
          <input
            type="value"
            className="inputValue"
            placeholder="1"
            id="value"
            onChange={(event) => {
              setinputValue(event.target.value);
            }}
          />
        </label>

        <label htmlFor="">
          Tipo de valor
          <select
            name="Select"
            className="inputSelect"
            id="select"
            onChange={(event) => {
              setinputSelect(event.target.value);
            }}
          >
            <option value="entrada">Entrada</option>
            <option value="saída">Saida</option>
          </select>
        </label>
      </div>

      <button type="submit">Inserir valor</button>
    </form>
  );
}
