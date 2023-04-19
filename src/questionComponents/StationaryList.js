export function StationaryList({ stationaryItems, heading }) {
  return (
    <div>
      <h1>{heading}</h1>
      {stationaryItems.map(item => <li style={{ listStyleType: "none" }}>{item}</li>)}
    </div>
  );
}
