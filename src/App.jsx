import "./App.css";
import ErrorMessage from "./assets/components/ErrorMessage";
import FoodItems from "./assets/components/FoodItems";
// import React from "react";

function App() {
  // let foodItems = [];
  let foodItems = ["sabzi", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>

      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
