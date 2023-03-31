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
    dynamicResult,
  } = useContext(ButtonContext);

  return (
    <Button
      type="operation"
      action={() => {
        if (firstNumber && !["+", "-", "*", "/"].includes(firstNumber)) {
          if (!operation) {
            setOperation(children);
            setCurrentNumber("number2");
          } else if (operation && !seccondNumber && children === "-") {
            setSeccondNumber(children);
          } else if (seccondNumber) {
            const result = dynamicResult;
            if (!result) return;
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
