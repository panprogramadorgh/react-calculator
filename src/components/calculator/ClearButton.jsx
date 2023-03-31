import { useContext } from "react";
import { ButtonContext } from "../../contexts/ButtonContext";
import Button from "../Button";

const ClearButton = ({ children }) => {
  const {
    setFirstNumber,
    setOperation,
    setSeccondNumber,
    setCurrentNumber
  } = useContext(ButtonContext);
  return <Button type='special' action={() => {
    setFirstNumber('');
    setOperation('');
    setSeccondNumber('');
    setCurrentNumber('number1');
  }}>{children}</Button>;
};

export default ClearButton;
