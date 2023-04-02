import { useState, createContext } from "react";

const operateStates = (firstNumber, seccondNumber, operation) => {
  if (!seccondNumber && !operation) {
    return "";
  } else if (firstNumber && !seccondNumber && operation) {
    return ". . .";
  }

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
  }
  if (isNaN(result)) return ". . .";
  return result;
};

export const ButtonContext = createContext();

const ButtonContextProvider = ({ children }) => {
  const [firstNumber, setFirstNumber] = useState("");
  const [seccondNumber, setSeccondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [ans, setAns] = useState("");
  const [dynamicResult, setDynamicResult] = useState("");

  const buttonStates = {
    firstNumber,
    setFirstNumber,
    seccondNumber,
    setSeccondNumber,
    operation,
    setOperation,
    ans,
    setAns,
    dynamicResult,
    setDynamicResult,
    operateStates,
  };

  return (
    <ButtonContext.Provider value={buttonStates}>
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonContextProvider;
