import { Navdashboard } from "../../Components/Navdashboard";
import { Forms } from "../../Components/Forms";
import { List } from "../../Components/List";
import "./Style.css";
import { Reduce } from "../../Components/Total";

export function Dashboard({
  isHome,
  setIsHome,
  listTransactions,
  setListTransactions,
}) {
  return (
    <div className="div-gap">
      <Navdashboard isHome={isHome} setIsHome={setIsHome} />

      <div className="Container">
        <div className="Forms-and-reduce">
          <Forms
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <Reduce listTransactions={listTransactions} />
        </div>
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </div>
    </div>
  );
}
