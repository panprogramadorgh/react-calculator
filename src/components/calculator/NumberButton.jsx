import { useContext } from "react";
import { ButtonContext } from "../../contexts/ButtonContext";
import Button from "../Button";

const NumberButton = ({ children }) => {
  const {
    firstNumber,
    setFirstNumber,
    seccondNumber,
    setSeccondNumber,
    operation,
  } = useContext(ButtonContext);
  return (
    <Button
      type="number"
      action={() => {
        if (!operation) {
          if (
            children !== "." ||
            firstNumber.split("").filter((char) => char === ".").length < 1
          ) {
            setFirstNumber(firstNumber + children);
          }
        } else {
          if (
            children !== "." ||
            seccondNumber.split("").filter((char) => char === ".").length < 1
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
