/* React package sutff */
import { Fragment, useState, useEffect } from "react";
/* exporting all componets for building the app */
import Button from "./components/Button";
import Display from "./components/Display";
/*  */
import "./App.css";

const handleStateReset = ({
  // setFirstNumber,
  setSeccondNumber,
  setOperation,
  setCurrentNumber,
}) => {
  // setFirstNumber("");
  setSeccondNumber("");
  setOperation("");
  setCurrentNumber("number1");
};

const handleEqualButton = ({
  firstNumber,
  seccondNumber,
  operation,
  setAns,
}) => {
  /* problem solving with calculator user input */

  if (!firstNumber || !seccondNumber || !operation) return null;
  else {
    let result;
    switch (operation) {
      case "+":
        result = Number(firstNumber) + Number(seccondNumber);
        break;
      case "-":
        result = Number(firstNumber) - Number(seccondNumber);
        break;
      case "*":
        result = Number(firstNumber) * Number(seccondNumber);
        break;
      case "/":
        result = Number(firstNumber) / Number(seccondNumber);
        break;
    }
    setAns(result.toString());
  }
};

const App = () => {
  const [displayContent, setDisplayContent] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [seccondNumber, setSeccondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [currentNumber, setCurrentNumber] = useState("number1");
  const [ans, setAns] = useState(null);

  useEffect(() => {
    if (ans !== null) {
      setDisplayContent(ans);
      setFirstNumber(ans);
    }
  }, [ans]);

  return (
    <Fragment>
      <Display width="500px">{displayContent}</Display>
      <Button
        type="number"
        action={() => {
          displayContent === null
            ? setDisplayContent("1")
            : setDisplayContent(displayContent + "1");
          if (currentNumber === "number1") {
            setFirstNumber(firstNumber + "1");
          } else if (currentNumber === "number2") {
            setSeccondNumber(seccondNumber + "1");
          }
        }}
      >
        1
      </Button>

      <Button
        type="number"
        action={() => {
          displayContent === null
            ? setDisplayContent("2")
            : setDisplayContent(displayContent + "2");
          if (currentNumber === "number1") {
            setFirstNumber(firstNumber + "2");
          } else if (currentNumber === "number2") {
            setSeccondNumber(seccondNumber + "2");
          }
        }}
      >
        2
      </Button>

      <Button
        type="operation"
        action={() => {
          displayContent === null
            ? setDisplayContent("+")
            : setDisplayContent(displayContent + "+");
          if (firstNumber) setOperation("+");
          setCurrentNumber(`number${!firstNumber ? 1 : 2}`);
        }}
      >
        +
      </Button>

      <Button
        type="operation"
        action={() => {
          displayContent === null
            ? setDisplayContent("-")
            : setDisplayContent(displayContent + "-");
          if (firstNumber) setOperation("-");
          setCurrentNumber(`number${!firstNumber ? 1 : 2}`);
        }}
      >
        -
      </Button>

      <Button
        type="special"
        action={() => {
          const handleFunctionObjParameter = {
            firstNumber,
            seccondNumber,
            operation,
            setAns,
            setFirstNumber,
            setSeccondNumber,
            setOperation,
            setCurrentNumber,
          };
          /* calcualtes the result */
          handleEqualButton(handleFunctionObjParameter);
          /* ressets calculator states */
          handleStateReset(handleFunctionObjParameter);
        }}
      >
        =
      </Button>
    </Fragment>
  );
};

export default App;
