import { useContext } from "react";
import { ButtonContext } from "../../contexts/ButtonContext";
import Button from "../Button";

const OpButton = ({ children }) => {
  const {
    operation,
    setOperation,
    firstNumber,
    setFirstNumber,
    seccondNumber,
    setSeccondNumber,
    setCurrentNumber,
    setAns,
  } = useContext(ButtonContext);

  return (
    <Button
      type="operation"
      action={() => {
        if (firstNumber && !["+", "-", "*", "/"].includes(firstNumber)) {
          if (!operation) {
            setOperation(children);
            setCurrentNumber("number2");
          } else if (seccondNumber) {
            let result;
            switch (operation) {
              case "+":
                result = (
                  Number(firstNumber) + Number(seccondNumber)
                ).toString();
                break;
              case "-":
                result = (
                  Number(firstNumber) - Number(seccondNumber)
                ).toString();
                break;
              case "*":
                result = (
                  Number(firstNumber) * Number(seccondNumber)
                ).toString();
                break;
              case "/":
                result = (
                  Number(firstNumber) / Number(seccondNumber)
                ).toString();
                break;
            }
            if (!result) return
            setAns(result);
            setFirstNumber("");
            setSeccondNumber("");
            setOperation(children);
            setCurrentNumber("number2");
          }
        } else if (!firstNumber && children === "-") {
          setFirstNumber(children);
        }
      }}
    >
      {children}
    </Button>
  );
};

export default OpButton;
