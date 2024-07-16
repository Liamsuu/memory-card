import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

// POKEMON JSON DATA FROM POKEAPI
const pikachuData = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
  mode: "cors",
});
const pikachuJson = await pikachuData.json();
const dittoData = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
  mode: "cors",
});
const dittoJson = await dittoData.json();

const charmanderData = await fetch(
  "https://pokeapi.co/api/v2/pokemon/charmander",
  {
    mode: "cors",
  }
);
const charmanderJson = await charmanderData.json();

const raichuData = await fetch("https://pokeapi.co/api/v2/pokemon/raichu", {
  mode: "cors",
});
const raichuJson = await raichuData.json();

const jigglypuffData = await fetch(
  "https://pokeapi.co/api/v2/pokemon/jigglypuff",
  { mode: "cors" }
);
const jigglypuffJson = await jigglypuffData.json();

const squirtleData = await fetch("https://pokeapi.co/api/v2/pokemon/squirtle", {
  mode: "cors",
});
const squirtleJson = await squirtleData.json();

const charizardData = await fetch(
  "https://pokeapi.co/api/v2/pokemon/charizard",
  { mode: "cors" }
);
const charizardJson = await charizardData.json();

const lucarioData = await fetch("https://pokeapi.co/api/v2/pokemon/lucario", {
  mode: "cors",
});
const lucarioJson = await lucarioData.json();

function Card({ shuffleCards, alreadyClicked, pokeName, pokeImage }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    // will run after click of button
    if (clicked === true) {
      alreadyClicked();
    } else {
      setClicked(true);
      shuffleCards();
    }
  }

  return (
    <button onClick={handleClick}>
      <div>
        <img src={pokeImage} alt="A Pokemon" />
        <h2>{pokeName}</h2>
      </div>
    </button>
  );
}

// use the pokemon API when back to create some details
export default function CardList({ score, setScore, highscore, setHighscore }) {
  const [cardArr, setCardArr] = useState([
    <Card
      key={uuidv4()}
      shuffleCards={shuffleCards}
      alreadyClicked={alreadyClickedHandler}
      pokeName="Pikachu"
      pokeImage={pikachuJson.sprites.front_default}
    />,
    <Card
      key={uuidv4()}
      shuffleCards={shuffleCards}
      alreadyClicked={alreadyClickedHandler}
      pokeName={"Ditto"}
      pokeImage={dittoJson.sprites.front_default}
    />,
    <Card
      key={uuidv4()}
      shuffleCards={shuffleCards}
      alreadyClicked={alreadyClickedHandler}
      pokeName={"Charmander"}
      pokeImage={charmanderJson.sprites.front_default}
    />,
    <Card
      key={uuidv4()}
      shuffleCards={shuffleCards}
      alreadyClicked={alreadyClickedHandler}
      pokeName={"Raichu"}
      pokeImage={raichuJson.sprites.front_default}
    />,
    <Card
      key={uuidv4()}
      shuffleCards={shuffleCards}
      alreadyClicked={alreadyClickedHandler}
      pokeName={"Jigglypuff"}
      pokeImage={jigglypuffJson.sprites.front_default}
    />,
    <Card
      key={uuidv4()}
      shuffleCards={shuffleCards}
      alreadyClicked={alreadyClickedHandler}
      pokeName={"Squirtle"}
      pokeImage={squirtleJson.sprites.front_default}
    />,
    <Card
      key={uuidv4()}
      shuffleCards={shuffleCards}
      alreadyClicked={alreadyClickedHandler}
      pokeName={"Charizard"}
      pokeImage={charizardJson.sprites.front_default}
    />,
    <Card
      key={uuidv4()}
      shuffleCards={shuffleCards}
      alreadyClicked={alreadyClickedHandler}
      pokeName={"Lucario"}
      pokeImage={lucarioJson.sprites.front_default}
    />,
  ]);

  function alreadyClickedHandler() {
    setCardArr([
      <Card
        key={uuidv4()}
        shuffleCards={shuffleCards}
        alreadyClicked={alreadyClickedHandler}
      />,
      <Card
        key={uuidv4()}
        shuffleCards={shuffleCards}
        alreadyClicked={alreadyClickedHandler}
      />,
      <Card
        key={uuidv4()}
        shuffleCards={shuffleCards}
        alreadyClicked={alreadyClickedHandler}
      />,
      <Card
        key={uuidv4()}
        shuffleCards={shuffleCards}
        alreadyClicked={alreadyClickedHandler}
      />,
      <Card
        key={uuidv4()}
        shuffleCards={shuffleCards}
        alreadyClicked={alreadyClickedHandler}
      />,
      <Card
        key={uuidv4()}
        shuffleCards={shuffleCards}
        alreadyClicked={alreadyClickedHandler}
      />,
      <Card
        key={uuidv4()}
        shuffleCards={shuffleCards}
        alreadyClicked={alreadyClickedHandler}
      />,
      <Card
        key={uuidv4()}
        shuffleCards={shuffleCards}
        alreadyClicked={alreadyClickedHandler}
      />,
    ]);
    if (score > highscore) {
      setHighscore(score);
      setScore(0);
    } else {
      setScore(0);
    }
    shuffleCards();
  }

  function shuffleCards() {
    const shuffledCardsArr = cardArr
      .map((val) => ({ val, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ val }) => val);
    setCardArr(shuffledCardsArr);
  }

  function displayCards() {
    return cardArr.map((card) => {
      return <>{card}</>;
    });
  }

  return <div>{displayCards()}</div>;
}

// NOTE: IT RESHUFFLES BUT IT DOES NOT REGISTER A CLICK PERHAPS IT CREATES A NEW OBJECT EACH RESHUFFLE BUT JUST KEEPS IT VALUES FROM THE OLD OBJECT
// WHICH IS WRONGGGGGGG
