export default function LineBreak({ count }) {
  let count_int = parseInt(count);
  let br_item = Array(count_int);
  for (let index = 0; index < count_int; index++) {
    br_item.push(<br key={index} />);
  }

  return <>{br_item}</>;
}
