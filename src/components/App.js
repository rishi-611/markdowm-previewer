import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Editor from "./Editor";
import Preview from "./Preview";
import "../css/App.css";

const App = function () {
  const initialInput = `# You can add Headings

## You can also add subheadings

### And here's some other cool stuff:

    There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://cdn.iconscout.com/icon/free/png-256/react-1543566-1306069.png)

    
    `;
  const [input, setInput] = useState(initialInput);

  const handleInputChange = function (value) {
    setInput(value);
  };

  return (
    <div className="container-md app-container">
      <Editor input={input} handleInputChange={handleInputChange} />
      <Preview input={input} />
    </div>
  );
};

export default App;
