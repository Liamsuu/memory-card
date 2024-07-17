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

function Card({ alreadyClicked, pokeName, pokeImage, addScorePoint }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    // will run after click of button
    if (clicked === true) {
      alreadyClicked();
    } else {
      addScorePoint();
      setClicked(true);
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

export default function CardList({ score, setScore, highscore, setHighscore }) {
  const [cardArr, setCardArr] = useState([
    {
      id: uuidv4(),
      component: (
        <Card
          alreadyClicked={alreadyClickedHandler}
          pokeName="Pikachu"
          pokeImage={pikachuJson.sprites.front_default}
          addScorePoint={addScorePoint}
        />
      ),
    },
    {
      id: uuidv4(),
      component: (
        <Card
          alreadyClicked={alreadyClickedHandler}
          pokeName={"Ditto"}
          pokeImage={dittoJson.sprites.front_default}
          addScorePoint={addScorePoint}
        />
      ),
    },
    {
      id: uuidv4(),
      component: (
        <Card
          alreadyClicked={alreadyClickedHandler}
          pokeName={"Charmander"}
          pokeImage={charmanderJson.sprites.front_default}
          addScorePoint={addScorePoint}
        />
      ),
    },
    {
      id: uuidv4(),
      component: (
        <Card
          alreadyClicked={alreadyClickedHandler}
          pokeName={"Raichu"}
          pokeImage={raichuJson.sprites.front_default}
          addScorePoint={addScorePoint}
        />
      ),
    },
    {
      id: uuidv4(),
      component: (
        <Card
          alreadyClicked={alreadyClickedHandler}
          pokeName={"Jigglypuff"}
          pokeImage={jigglypuffJson.sprites.front_default}
          addScorePoint={addScorePoint}
        />
      ),
    },
    {
      id: uuidv4(),
      component: (
        <Card
          alreadyClicked={alreadyClickedHandler}
          pokeName={"Squirtle"}
          pokeImage={squirtleJson.sprites.front_default}
          addScorePoint={addScorePoint}
        />
      ),
    },
    {
      id: uuidv4(),
      component: (
        <Card
          alreadyClicked={alreadyClickedHandler}
          pokeName={"Charizard"}
          pokeImage={charizardJson.sprites.front_default}
          addScorePoint={addScorePoint}
        />
      ),
    },
    {
      id: uuidv4(),
      component: (
        <Card
          alreadyClicked={alreadyClickedHandler}
          pokeName={"Lucario"}
          pokeImage={lucarioJson.sprites.front_default}
          addScorePoint={addScorePoint}
        />
      ),
    },
  ]);

  function alreadyClickedHandler() {
    setCardArr([
      {
        id: uuidv4(),
        component: (
          <Card
            alreadyClicked={alreadyClickedHandler}
            pokeName="Pikachu"
            pokeImage={pikachuJson.sprites.front_default}
            addScorePoint={addScorePoint}
          />
        ),
      },
      {
        id: uuidv4(),
        component: (
          <Card
            alreadyClicked={alreadyClickedHandler}
            pokeName={"Ditto"}
            pokeImage={dittoJson.sprites.front_default}
            addScorePoint={addScorePoint}
          />
        ),
      },
      {
        id: uuidv4(),
        component: (
          <Card
            alreadyClicked={alreadyClickedHandler}
            pokeName={"Charmander"}
            pokeImage={charmanderJson.sprites.front_default}
            addScorePoint={addScorePoint}
          />
        ),
      },
      {
        id: uuidv4(),
        component: (
          <Card
            alreadyClicked={alreadyClickedHandler}
            pokeName={"Raichu"}
            pokeImage={raichuJson.sprites.front_default}
            addScorePoint={addScorePoint}
          />
        ),
      },
      {
        id: uuidv4(),
        component: (
          <Card
            alreadyClicked={alreadyClickedHandler}
            pokeName={"Jigglypuff"}
            pokeImage={jigglypuffJson.sprites.front_default}
            addScorePoint={addScorePoint}
          />
        ),
      },
      {
        id: uuidv4(),
        component: (
          <Card
            alreadyClicked={alreadyClickedHandler}
            pokeName={"Squirtle"}
            pokeImage={squirtleJson.sprites.front_default}
            addScorePoint={addScorePoint}
          />
        ),
      },
      {
        id: uuidv4(),
        component: (
          <Card
            alreadyClicked={alreadyClickedHandler}
            pokeName={"Charizard"}
            pokeImage={charizardJson.sprites.front_default}
            addScorePoint={addScorePoint}
          />
        ),
      },
      {
        id: uuidv4(),
        component: (
          <Card
            alreadyClicked={alreadyClickedHandler}
            pokeName={"Lucario"}
            pokeImage={lucarioJson.sprites.front_default}
            addScorePoint={addScorePoint}
          />
        ),
      },
    ]);
    if (score > highscore) {
      setHighscore(score);
      setScore(0);
    } else {
      setScore(0);
    }
    displayCards();
  }

  function addScorePoint() {
    setScore((score) => score + 1);
  }

  function displayCards() {
    return cardArr.map((card) => {
      return <div key={card.id}>{card.component}</div>;
    });
  }

  return <>{displayCards()}</>;
}
