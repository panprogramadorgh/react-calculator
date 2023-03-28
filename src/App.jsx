/* React package sutff */
import { Fragment, useState, useEffect } from "react";
/* exporting all componets for building the app */
import Button from "./components/Button";
import Display from "./components/Display";
/*  */
import "./App.css";

const handleOperation = (displayContent, setAns) => {
  let operation;
  for (let i = 0; i < displayContent.length; i++) {
    if (["+", "-", "*", "/"].includes(displayContent[i])) {
      operation = displayContent[i];
    }
  }
  const opIndex = displayContent.indexOf(operation);
  const beforeOperation = parseInt(displayContent.substring(0, opIndex + 1));
  const afterOperation = parseInt(
    displayContent.substring(opIndex + 1, displayContent.length)
  );

  let result;
  if (operation === "+") result = beforeOperation + afterOperation;
  else if (operation === "-") result = beforeOperation - afterOperation;
  else if (operation === "*") result = beforeOperation * afterOperation;
  else if (operation === "/") result = beforeOperation / afterOperation;
  setAns(result);
  return result;
};

const App = () => {
  const [displayContent, setDisplayContent] = useState("");
  const [ans, setAns] = useState(0);

  return (
    <Fragment>
      <Display width="500px">{displayContent}</Display>
      <Button
        type="number"
        action={() => {
          setDisplayContent(displayContent + "1");
        }}
      >
        1
      </Button>

      <Button
        type="number"
        action={() => {
          setDisplayContent(displayContent + "2");
        }}
      >
        2
      </Button>

      <Button
        type="number"
        action={() => {
          setDisplayContent(displayContent + "3");
        }}
      >
        3
      </Button>

      <Button
        type="operation"
        action={() => {
          setDisplayContent(displayContent + "+");
        }}
      >
        +
      </Button>

      <Button
        type="operation"
        action={() => {
          setDisplayContent(displayContent + "-");
        }}
      >
        -
      </Button>

      <Button
        type="operation"
        action={() => {
          setDisplayContent(displayContent + "*");
        }}
      >
        *
      </Button>

      <Button
        type="operation"
        action={() => {
          setDisplayContent(displayContent + "/");
        }}
      >
        /
      </Button>

      <Button
        type="special"
        action={() => {
          const result = handleOperation(displayContent, setAns);
          setDisplayContent(result);
        }}
      >
        =
      </Button>
    </Fragment>
  );
};

export default App;
