import { useContext } from "react";
import { ButtonContext } from "../../contexts/ButtonContext";
import Button from "../Button";

const ClearButton = ({ children }) => {
  const {
    firstNumber,
    setFirstNumber,
    seccondNumber,
    setSeccondNumber,
    operation,
    setOperation,
  } = useContext(ButtonContext);
  return (
    <Button
      type="special"
      action={() => {
        if (seccondNumber) {
          setSeccondNumber(
            seccondNumber.substring(0, seccondNumber.length - 1)
          );
        } else if (operation) {
          setOperation("");
        } else if (firstNumber) {
          setFirstNumber(firstNumber.substring(0, firstNumber.length - 1));
        }
      }}
    >
      {children}
    </Button>
  );
};

export default ClearButton;
