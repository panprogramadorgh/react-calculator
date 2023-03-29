import { useContext } from "react";
import { ButtonContext } from "../../contexts/ButtonContext";
import Button from "../Button";

const handleEqualButton = ({ firstNumber, seccondNumber, operation }) => {
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
    return result.toString();
  }
};

const OpButton = ({ children }) => {
  const {
    firstNumber,
    setFirstNumber,
    seccondNumber,
    setSeccondNumber,
    operation,
    setAns,
    setOperation,
    setCurrentNumber,
  } = useContext(ButtonContext);
  return (
    <Button
      type="operation"
      action={() => {
        /* takes care of updating ans state */
        const result = handleEqualButton({
          firstNumber,
          seccondNumber,
          operation,
        });
        if (result !== null) {
          setAns(result);
          /* takes care of resetting butto states */
          setFirstNumber("");
          setSeccondNumber("");
          setOperation("");
          setCurrentNumber("number1");
        }
      }}
    >
      {children}
    </Button>
  );
};

export default OpButton;
