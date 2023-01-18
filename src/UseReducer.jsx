import React, { useReducer } from "react";

export function UseReducer() {
  const initialstate = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialstate);
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return { count: state.count };
    }
  }
  return (
    <div>
      count:{state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
