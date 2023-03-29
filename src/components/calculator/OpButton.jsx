import { useContext } from "react";
import { ButtonContext } from "../../contexts/ButtonContext";
import Button from "../Button";


const OpButton = ({ children }) => {
  const { setOperation, firstNumber, setCurrentNumber } =
    useContext(ButtonContext);
  return (
    <Button
      type="operation"
      action={() => {
        if (firstNumber) {
          setOperation(children);
          return setCurrentNumber("number2");
        }
        return null
      }}
    >
      {children}
    </Button>
  );
};

export default OpButton;
