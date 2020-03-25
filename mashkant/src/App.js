import React, { Fragment } from "react";
import MyTable from "./MyTable";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => (
  <Provider store={store}>
    <Fragment>
      <h1 style={{ textAlign: "center" }}>Mashkanta</h1>
      <p style={{ textAlign: "center" }}>Choose your route</p>
      <MyTable></MyTable>
    </Fragment>
  </Provider>
);

export default App;
