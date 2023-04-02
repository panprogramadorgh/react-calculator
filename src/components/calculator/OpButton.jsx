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
          } else if (operation && !seccondNumber && children === "-") {
            setSeccondNumber(children);
          } else if (operation && seccondNumber) {
            const result = dynamicResult;
            if (!result) return;
            setAns(result);
            setSeccondNumber("");
            setOperation(children);
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
