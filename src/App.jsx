/* React package sutff */
import { Fragment, useState, useEffect, useContext } from "react";
/* exporting all componets for building the app */
import Display from "./components/calculator/Display";
import NumberButton from "./components/calculator/NumberButton";
import OpButton from "./components/calculator/OpButton";
import EqualButton from "./components/calculator/EqualButton";
import DelButton from "./components/calculator/DelButton";
import ClearButton from "./components/calculator/ClearButton";
import AnsButton from "./components/calculator/AnsButton";
import { ButtonContext } from "./contexts/ButtonContext";
/*  */
import "./App.css";

const App = () => {
  const [displayContent, setDisplayContent] = useState("");
  const {
    ans,
    firstNumber,
    setFirstNumber,
    seccondNumber,
    operation,
    dynamicResult,
    setDynamicResult,
  } = useContext(ButtonContext);

  useEffect(() => {
    setDisplayContent(ans);
    setFirstNumber(ans);
  }, [ans]);

  useEffect(() => {
    setDisplayContent(`${firstNumber} ${operation} ${seccondNumber}`);
    if (firstNumber && !seccondNumber && !operation) {
      setDynamicResult("");
    } else if (operation && !seccondNumber) {
      setDynamicResult(". . .");
    } else if (seccondNumber) {
      let result;
      switch (operation) {
        case "+":
          result = (Number(firstNumber) + Number(seccondNumber)).toString();
          break;
        case "-":
          result = (Number(firstNumber) - Number(seccondNumber)).toString();
          break;
        case "*":
          result = (Number(firstNumber) * Number(seccondNumber)).toString();
          break;
        case "/":
          result = (Number(firstNumber) / Number(seccondNumber)).toString();
          break;
        default:
          result = ". . .";
      }
      if (isNaN(result)) return;
      setDynamicResult(result);
    }
  }, [firstNumber, seccondNumber, operation]);

  return (
    <Fragment>
      <div className="calculator-body">
        <Display preview={dynamicResult}>{displayContent}</Display>

        <div className="button-container">
          <div className="numeric-button-container">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((number) => {
              return <NumberButton key={number}>{number}</NumberButton>;
            })}
            <AnsButton>Ans</AnsButton>
          </div>
          <div className="operation-button-container">
            <OpButton>{"+"}</OpButton>
            <OpButton>{"-"}</OpButton>
            <OpButton>{"*"}</OpButton>
            <OpButton>{"/"}</OpButton>
          </div>
        </div>
        <div className="special-button-container">
          <ClearButton>Clear</ClearButton>
          <DelButton>DEL</DelButton>
          <EqualButton>{"="}</EqualButton>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
