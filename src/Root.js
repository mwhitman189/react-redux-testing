import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

export const Root = (props) => {
  return (
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
};

export default Root;
