import "./App.css";
import CountDown from "./Components/CountDown.jsx";
import Header from "./Components/Header.jsx";
import Assists from "./Components/Stats/Assists.jsx";
import Goals from "./Components/Stats/Goals.jsx";
import Titles from "./Components/Stats/Titles.jsx";

function App() {
  const WORLD_CUP_START_DATE = new Date("2026-06-10T23:59:59-03:00").getTime();

  return (
    <>
      <Header />
      <CountDown
        futureDate={WORLD_CUP_START_DATE}
        title={"Contagem regressiva para a Copa do Mundo de 2026:"}
      />
      <h1 className="title">Alguns recordes do campeonato</h1>
      <div className="gridStats">
        <Goals />
        <Assists />
        <Titles />
      </div>
    </>
  );
}

export default App;
