export default function Square({ marker, onClick, isDisabled }) {
  return (
    <button className="justify-center items-center border border-black w-20 h-20" onClick={onClick} disabled={isDisabled}>
      {marker}
    </button>
  );
}
