import "../../styles/Display.css";

const Display = ({ children }) => {
  return (
    <div className="Display-component-container">
      <span className="Display-component">{children}</span>
    </div>
  );
};

export default Display;
