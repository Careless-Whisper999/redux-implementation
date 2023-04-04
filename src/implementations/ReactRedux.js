import React, { useState, useContext, useEffect } from "react";

const StoreContext = React.createContext();
function Provider({ children, store }) {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

function useMyDispatch() {
  const context = useContext(StoreContext);
  return context.dispatch;
}

function useMySelector(selector) {
  const [, setState] = useState({});
  const context = useContext(StoreContext);
  useEffect(() => {
    context.subscribe(() => {
      setState(() => {
        return {};
      });
    });
  }, [context]);
  return selector(context.getState());
}

export { Provider, useMyDispatch, useMySelector };
