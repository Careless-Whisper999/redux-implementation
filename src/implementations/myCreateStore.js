export const myCreateStore = (reducer, initialState) => {
  let state =
    initialState === undefined
      ? reducer(undefined, { type: null })
      : initialState;
  let listeners = [];

  return {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    },
    subscribe(callback) {
      listeners.push(callback);
    },
  };
};
