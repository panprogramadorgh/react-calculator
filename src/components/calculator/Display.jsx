import { useContext } from "react";
import { ButtonContext } from "../../contexts/ButtonContext";
import "../../styles/Display.css";

const Display = ({ children, preview }) => {
  const {
    firstNumber
  } = useContext(ButtonContext);
  return (
    <div className="Display-component-container">
      <span className="Display-component">
        {children}
        <span className="Display-component-preview">{firstNumber ? preview : ''}</span>
      </span>
    </div>
  );
};

export default Display;
