import React from "react";

const Editor = function (props) {
  return (
    <div className="my-2 ">
      <div className="h-100 p-5 text-white bg-dark rounded-3 editor-container">
        <div className="text-area-box mb-3 ">
          <label htmlFor="editor" className="form-label ">
            <h2>Editor</h2>
          </label>
          <textarea
            className="form-control text-white bg-dark"
            id="editor"
            rows="5"
            value={props.input}
            onChange={(e) => props.handleInputChange(e.target.value)}
          ></textarea>
          <button
            className="btn btn-outline-light mt-3"
            type="button"
            onClick={() => props.handleInputChange("")}
          >
            Clear Editor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
