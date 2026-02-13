import { useEffect, useState } from "react";

import MealItem from "./MealItem";

export default function Meals() {
  const [loadeMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        throw new Error("Failed to fetch meals");
      }
      const mealsList = await response.json();
      setLoadedMeals(mealsList);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadeMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}