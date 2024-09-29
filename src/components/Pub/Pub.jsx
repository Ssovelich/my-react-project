import { useState } from "react";
import BarControls from "../BarControls/BarControls";
import BarStats from "../BarStats/BarStats";

const Pub = () => {
  const [bottles, setBottles] = useState({
    beer: 0,
    wine: 0,
    whiskey: 0,
  });

  const onAddDrink = (drinkName) => {
    setBottles({ ...bottles, [drinkName]: bottles[drinkName] + 1 });
  };

  const bottlesTolal = bottles.beer + bottles.wine + bottles.whiskey;

  return (
    <div>
      <BarStats bottles={bottles} total={bottlesTolal} />
      <BarControls onAddDrink={onAddDrink} />
    </div>
  );
};

export default Pub;
