import Square from "./square";

export default function SquareRow({ i, marker, handleClick, letStart }) {
  i = parseInt(i);
  return (
    <div className="flex justify-center items-center">
      <Square
        marker={marker[i + 0]}
        onClick={() => handleClick(i + 0)}
        isDisabled={!letStart}
      />
      <Square
        marker={marker[i + 1]}
        onClick={() => handleClick(i + 1)}
        isDisabled={!letStart}
      />
      <Square
        marker={marker[i + 2]}
        onClick={() => handleClick(i + 2)}
        isDisabled={!letStart}
      />
    </div>
  );
}
