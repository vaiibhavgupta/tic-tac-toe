export default function InputMarker({ value, onChange, disabled }) {
  return (
    <input
      className="inputField border border-black p-1 m-2"
      type="text"
      placeholder="Enter Your Marker"
      value={value}
      onChange={onChange}
      disabled={disabled}
      maxLength={1}
    />
  );
}
