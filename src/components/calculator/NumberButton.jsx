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
          if (
            children !== "." ||
            firstNumber.split("").filter((char) => char === children).length < 1
          ) {
            setFirstNumber(firstNumber + children);
          }
        } else if (currentNumber === "number2") {
          if (
            children !== "." ||
            seccondNumber.split("").filter((char) => char === children).length <
              1
          ) {
            setSeccondNumber(seccondNumber + children);
          }
        }
      }}
    >
      {children}
    </Button>
  );
};

export default NumberButton;
