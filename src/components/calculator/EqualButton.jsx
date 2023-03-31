import { useContext } from "react";
import { ButtonContext } from "../../contexts/ButtonContext";
import Button from "../Button";

const OpButton = ({ children }) => {
  const {
    setFirstNumber,
    setSeccondNumber,
    setAns,
    setOperation,
    setCurrentNumber,
    dynamicResult,
  } = useContext(ButtonContext);
  return (
    <Button
      type="special"
      action={() => {
        const result = dynamicResult;
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
