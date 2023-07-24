import { useState } from "react";

import "./App.css";
import LineBreak from "./components/lineBreak";
import SquareRow from "./components/squareRow";
import InputMarker from "./components/inputMarker";

import CalculateWinner from "./calculateWinner";

export default function App() {
  const [playerMarker, setPlayerMarker] = useState(Array(2).fill(null));
  const [marker, setMarker] = useState(Array(9).fill(null));
  const [player1IsNext, setPlayer1IsNext] = useState(true);
  const [isDisabled, setIsDisabled] = useState(Array(2).fill(false));
  let letStart = isDisabled.every((value) => value === true);

  function handleChange(event, i) {
    if (
      playerMarker[Math.abs(i - 1)] === event.target.value ||
      event.target.value === "" ||
      event.target.value === " "
    ) {
      setPlayerMarker(playerMarker);
    } else {
      const tempPlayerMarker = playerMarker.slice();
      tempPlayerMarker[i] = event.target.value;

      const tempIsDisabled = isDisabled.slice();
      tempIsDisabled[i] = true;

      setIsDisabled(tempIsDisabled);
      setPlayerMarker(tempPlayerMarker);
    }
  }

  function handleClick(i) {
    if (marker[i] || CalculateWinner(marker)) {
      return;
    }
    const tempMarker = marker.slice();
    tempMarker[i] = player1IsNext ? playerMarker[0] : playerMarker[1];

    setMarker(tempMarker);
    setPlayer1IsNext(!player1IsNext);
  }

  const winner = CalculateWinner(marker);
  const status = winner
    ? winner
    : playerMarker[0] && playerMarker[1]
    ? "Next Player: " + (player1IsNext ? playerMarker[0] : playerMarker[1])
    : "Match will start after both the players have selected their markers.";

  return (
    <div className="app mx-auto text-center">
      <LineBreak count="4" />
      <h1 className="text-5xl">Tic-Tac-Toe</h1>
      <LineBreak count="2" />
      <div>
        <p>
          Player 1:
          <InputMarker
            value={playerMarker[0]}
            onChange={(event) => handleChange(event, 0)}
            disabled={isDisabled[0]}
          />
        </p>
        <LineBreak count="1" />
        <p>
          Player 2:
          <InputMarker
            value={playerMarker[1]}
            onChange={(event) => handleChange(event, 1)}
            disabled={isDisabled[1]}
          />
        </p>
      </div>
      <LineBreak count="2" />
      <div className="status">{status}</div>
      <LineBreak count="3" />
      <div>
        <SquareRow
          i="0"
          marker={marker}
          handleClick={handleClick}
          letStart={letStart}
        />
        <SquareRow
          i="3"
          marker={marker}
          handleClick={handleClick}
          letStart={letStart}
        />
        <SquareRow
          i="6"
          marker={marker}
          handleClick={handleClick}
          letStart={letStart}
        />
      </div>
    </div>
  );
}
