import { useContext } from "react";
import { ButtonContext } from "../../contexts/ButtonContext";
import Button from "../Button";

const NumberButton = ({ children }) => {
  const {
    firstNumber,
    setFirstNumber,
    seccondNumber,
    setSeccondNumber,
    currentNumber,
  } = useContext(ButtonContext);
  return (
    <Button
      type="number"
      action={() => {
        if (currentNumber === "number1") {
          setFirstNumber(firstNumber + children);
        } else if (currentNumber === "number2") {
          setSeccondNumber(seccondNumber + children)
        }
      }}
    >
      {children}
    </Button>
  );
};

export default NumberButton;
