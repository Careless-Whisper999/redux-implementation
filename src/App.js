import { ReduxCoreApp } from "./components/ReduxCoreApp";
import "./App.css";
import { ReactReduxApp } from "./components/ReactReduxApp";
import { store } from "./redux/redux";
import { Provider } from "./implementations/ReactRedux";

const App = () => {
  return (
    <>
      <ReduxCoreApp />
      <Provider store={store}>
        <ReactReduxApp />
      </Provider>
    </>
  );
};

export default App;
