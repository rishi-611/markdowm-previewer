import React from "react";
import marked from "marked";

const Preview = function (props) {
  const markedInput = (text) => marked(text, { breaks: true });
  // break flag is to add breakline on carriage return

  return (
    <div className="my-2">
      <div className="h-100 p-5 bg-light border rounded-3">
        <h2>Preview</h2>
        <div className="preview-container" style={{ overflowX: "auto" }}>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: markedInput(props.input) }}
          />
        </div>
        <button
          className="btn btn-outline-secondary mt-3"
          type="button"
          onClick={() => navigator.clipboard.writeText(props.input)}
        >
          Copy Text
        </button>
      </div>
    </div>
  );
};

export default Preview;
