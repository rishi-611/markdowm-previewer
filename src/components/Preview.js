import React from "react";

const Preview = function (props) {
  return (
    <div className="my-2">
      <div className="h-100 p-5 bg-light border rounded-3">
        <h2>Preview</h2>
        <div id="preview">
          hellp there whats up, rishi here. replace this text with marked input
        </div>
        <button className="btn btn-outline-secondary mt-3" type="button">
          Copy Text
        </button>
      </div>
    </div>
  );
};

export default Preview;
