import React from "react";
import { render } from "react-dom";
import Root from "../src/components/root";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Root />
    </>
  );
};

render(<App />, document.getElementById("root"));
