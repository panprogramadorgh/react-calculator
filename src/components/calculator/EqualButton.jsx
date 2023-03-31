import { useContext } from "react";
import { ButtonContext } from "../../contexts/ButtonContext";
import Button from "../Button";

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
      type="special"
      action={() => {
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
        if (!result) return;
        setAns(result);
        setFirstNumber("");
        setSeccondNumber("");
        setOperation("");
        setCurrentNumber("number1");
      }}
    >
      {children}
    </Button>
  );
};

export default OpButton;
