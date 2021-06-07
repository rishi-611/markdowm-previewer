import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Editor from "./Editor";
import Preview from "./Preview";

const App = function () {
  return (
    <div className="container-md">
      <Editor />
      <Preview />
    </div>
  );
};

export default App;
