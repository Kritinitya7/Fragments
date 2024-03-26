import "./App.css";
// import React from "react";

function App() {
  let foodItems = ["Dal", "Rice", "Pulao", "Biryani"];
  let emptyMessage =
    foodItems.length == 0 ? <h3>I am still Hungary.</h3> : null;
  return (
    <>
      <h1>Healthy Food</h1>
      {emptyMessage}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
