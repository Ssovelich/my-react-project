const BarStats = ({ bottles, total }) => {
  return (
    <ul>
      <li>Beer: {bottles.beer}</li>
      <li>Wine: {bottles.wine}</li>
      <li>Whiskey: {bottles.whiskey}</li>
      <li>Total: {total}</li>
    </ul>
  );
};

export default BarStats;
