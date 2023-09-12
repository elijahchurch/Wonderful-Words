import React from "react";
import Header from "./Header";
import GameControl from "./GameControl"
import WordDisplay from "./WordDisplay";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <WordDisplay/>
      <GameControl/>
    </React.Fragment>
  );
}

export default App;
