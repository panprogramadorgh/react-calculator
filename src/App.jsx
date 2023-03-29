/* React package sutff */
import { Fragment, useState, useEffect, useContext } from "react";
/* exporting all componets for building the app */
import Display from "./components/Display";
import NumberButton from "./components/calculator/NumberButton";
import OpButton from "./components/calculator/OpButton";
import EqualButton from "./components/calculator/EqualButton";
import { ButtonContext } from "./contexts/ButtonContext";
/*  */
import "./App.css";

const App = () => {
  const [displayContent, setDisplayContent] = useState("");
  const { ans, firstNumber, setFirstNumber, seccondNumber, operation } =
    useContext(ButtonContext);

  useEffect(() => {
    setDisplayContent(ans);
    setFirstNumber(ans);
  }, [ans]);

  useEffect(() => {
    setDisplayContent(firstNumber + operation + seccondNumber);
  }, [firstNumber, seccondNumber, operation]);

  return (
    <Fragment>
      <Display width="500px">{displayContent}</Display>

      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => {
        return <NumberButton key={number - 1}>{number}</NumberButton>;
      })}

      <OpButton>+</OpButton>
      <OpButton>-</OpButton>
      <OpButton>*</OpButton>
      <EqualButton>{"="}</EqualButton>
    </Fragment>
  );
};

export default App;
