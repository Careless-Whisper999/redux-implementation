import { store } from "../redux/redux";
import React, { useEffect, useState } from "react";

export const ReduxCoreApp = () => {
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
    <div className="ReduxCoreApp">
      <h1>ReduxCore Counter</h1>
      <div>{counter}</div>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};
