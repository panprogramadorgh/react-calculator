import { useContext } from "react";
import { ButtonContext } from "../../contexts/ButtonContext";
import Button from "../Button";

const ClearButton = ({ children }) => {
  const { setFirstNumber, setOperation, setSeccondNumber } =
    useContext(ButtonContext);
  return (
    <Button
      type="special"
      action={() => {
        setFirstNumber("");
        setOperation("");
        setSeccondNumber("");
      }}
    >
      {children}
    </Button>
  );
};

export default ClearButton;
