import homeImg from "../../img/HomeImg.svg";
import "./style.css";

export function Home({ isHome, setIsHome }) {
  return (
    <div className="div-bgc">

        <div className="Div-row">
      <h2 className="h2-redColor">
        Nu<span className="span-White">Kenzie</span>
      </h2>
      <div className="div-desc">
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>

        <button
          onClick={() => {
              setIsHome(!isHome);
          }}
        >
          Iniciar
        </button>

        </div>
      </div>
      <img src={homeImg} alt="" />

      </div>
  );
}
