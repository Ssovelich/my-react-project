import { useState, useEffect } from "react";
import BarControls from "../BarControls/BarControls";
import BarStats from "../BarStats/BarStats";

const initialBottles = { beer: 0, wine: 0, whiskey: 0 };

const Pub = () => {
  const [bottles, setBottles] = useState(() => {
    //зчитує данні зі сховища по ключу "bottles"
    const stringifiedBottles = localStorage.getItem("bottles");
    //Розпарсить данні зі сховищя, якщо нічого немає підставить данні з initialBottles
    const pasedBottles = JSON.parse(stringifiedBottles) ?? initialBottles;

    //Повертає розпаршених користувачів
    return pasedBottles;
  });

  useEffect(() => {
    //Стрінгіфікує данні
    const stringifiedBottles = JSON.stringify(bottles);
    //По ключу "bottles" записує данні в локальне сховище
    localStorage.setItem("bottles", stringifiedBottles);
  }, [bottles]);

  const onAddDrink = (drinkName) => {
    setBottles({ ...bottles, [drinkName]: bottles[drinkName] + 1 });
  };

  const onMinusDrink = (drinkName) => {
    setBottles({ ...bottles, [drinkName]: bottles[drinkName] - 1 });
  };

  const onResetDrink = () => {
    setBottles(initialBottles);
  };

  const bottlesTolal = bottles.beer + bottles.wine + bottles.whiskey;

  return (
    <div>
      <BarStats
        bottles={bottles}
        total={bottlesTolal}
        onResetDrink={onResetDrink}
      />
      <BarControls onAddDrink={onAddDrink} onMinusDrink={onMinusDrink} />
    </div>
  );
};

export default Pub;
