
export const myCreateStore = (reducer, initialState) => {
  class Store {
    constructor() {
      this.reducer = reducer;
      this.state = initialState || reducer(undefined, {type: ""});
      this.listeners = [];
    }
    getState() {
      return this.state || 0;
    }
    dispatch(action) {
      this.state = reducer(this.state, action);
      this.listeners.forEach(listener => listener())
    }
    subscribe(callback) {
      this.listeners.push(callback);
    }
  }
  return new Store();
};
