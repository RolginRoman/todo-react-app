import React from "react";
import "./App.css";

import { createStore } from "redux";
import reducerApp from "./reducers/reducers";
import { Provider } from "react-redux";

import Input from "./containers/Input";
import List from "./containers/List";

export const store = createStore(reducerApp);

export class App extends React.Component {
  render(): React.ReactNode {
    return (
      <Provider store={store}>
        <div className={"todo"}>
          <Input />

          <div className={"dashboard"}>
            <List className={"todo"} header={"Todo"} finishList={false} />
            <List className={"done"} header={"Done"} finishList={true} />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
