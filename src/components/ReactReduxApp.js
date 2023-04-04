import { useMyDispatch, useMySelector } from "../implementations/ReactRedux";

export const ReactReduxApp = () => {
  const counter = useMySelector((state) => state.value);
  const dispatch = useMyDispatch();
  const handleIncrement = () => {
    dispatch({ type: "counter/incremented" });
  };
  const handleDecrement = () => {
    dispatch({ type: "counter/decremented" });
  };
  return (
    <div className="ReactReduxApp">
      <h1>ReactRedux Counter</h1>
      <div>{counter}</div>

      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};
