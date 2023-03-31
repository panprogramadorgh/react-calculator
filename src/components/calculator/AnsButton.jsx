import { useContext } from "react";
import { ButtonContext } from "../../contexts/ButtonContext";
import Button from "../../components/Button";

const AnsButton = ({ children }) => {
  const {
    ans,
    setFirstNumber
  } = useContext(ButtonContext);
  return (
    <Button type="special" action={() => {
      setFirstNumber(ans);
    }}>
      {children}
    </Button>
  );
};

export default AnsButton;
