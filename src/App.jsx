import "./App.css";
// import React from "react";

function App() {
  let foodItems = ["Dal", "Rice", "Pulao", "Biryani"];
  return (
    <>
      <h1>Healthy Food</h1>
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
