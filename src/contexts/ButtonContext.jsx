import { useState, createContext } from "react";

export const ButtonContext = createContext();

const ButtonContextProvider = ({ children }) => {
  const [firstNumber, setFirstNumber] = useState("");
  const [seccondNumber, setSeccondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [currentNumber, setCurrentNumber] = useState("number1");
  const [ans, setAns] = useState("");
  const [dynamicResult, setDynamicResult] = useState("");

  const buttonStates = {
    firstNumber,
    setFirstNumber,
    seccondNumber,
    setSeccondNumber,
    operation,
    setOperation,
    currentNumber,
    setCurrentNumber,
    ans,
    setAns,
    dynamicResult,
    setDynamicResult,
  };

  return (
    <ButtonContext.Provider value={buttonStates}>
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonContextProvider;
