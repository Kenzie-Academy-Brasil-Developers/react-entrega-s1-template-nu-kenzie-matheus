import { useState } from "react";
import "./Reset.css";
import "./Globalstyle.css";
import { Home } from "./Pages/Home";
import { Dashboard } from "./Pages/Dashboard" 


export function App() {
  const [isHome, setIsHome] = useState(false);
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: 150 },
  ]);
  return (
    <div className="App">
      {!isHome ? (
        <Home isHome={isHome} setIsHome={setIsHome} />
      ) : (
        <Dashboard
          isHome={isHome}
          setIsHome={setIsHome}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </div>
  );
}
