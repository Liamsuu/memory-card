import "./App.css";
import { useState } from "react";
import CardList from "./CardList";

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  score > highscore && setHighscore(score);
  return (
    <>
      <section id="scoreboards">
        <h2 id="current-score">Score: {score}</h2>
        <h2 id="high-score">Highscore: {highscore}</h2>
      </section>
      <section id="cards">
        <p>Click the cards below, but only click them once!</p>

        <CardList score={score} setScore={setScore} />
      </section>
    </>
  );
}

export default App;
