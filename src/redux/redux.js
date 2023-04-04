import { myCreateStore } from "../implementations/myCreateStore";

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export let store = myCreateStore(counterReducer, { value: 0 });
store.subscribe(() => console.log(store.getState()));
