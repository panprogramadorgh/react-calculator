import "../styles/Display.css";

const Display = ({ children, width="250px" }) => {
  return (
    <div className="Display-component-container" style={{width}}>
      <span className="Display-component">{children}</span>
    </div>
  );
};

export default Display;
