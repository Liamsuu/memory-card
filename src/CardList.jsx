import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function Card({ shuffleCards, alreadyClicked }) {
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
      <div>testing</div>
    </button>
  );
}

export default function CardList({ score, setScore, highscore, setHighscore }) {
  let cardArr = [
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
  ];

  function alreadyClickedHandler() {
    const newCardArr = [
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
    ];
    if (score > highscore) {
      setHighscore(score);
      setScore(0);
    } else {
      setScore(0);
    }
    // reset cardarr values with brand new card components
    cardArr.splice(0, cardArr.length, ...newCardArr);
    shuffleCards();
  }

  function shuffleCards() {
    let currentIndex = cardArr.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [cardArr[currentIndex], cardArr[randomIndex]] = [
        cardArr[randomIndex],
        cardArr[currentIndex],
      ];
    }
  }

  function displayCards() {
    return cardArr.map((card) => {
      return <>{card}</>;
    });
  }

  return <div>{displayCards()}</div>;
}
