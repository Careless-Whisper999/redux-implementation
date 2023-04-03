import React, { useEffect, useState } from "react";
import { store } from "./redux/redux";
import './App.css';

export const App = () => {
  const [counter, setCounter] = useState(store.getState().value);
  useEffect(() => {
    store.subscribe(() => {
      const { value } = store.getState();
      setCounter(value);
    });
  }, []);
  const handleIncrement = () => {
    store.dispatch({ type: "counter/incremented" });
  };
  const handleDecrement = () => {
    store.dispatch({ type: "counter/decremented" });
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <div>{counter}</div>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default App;
