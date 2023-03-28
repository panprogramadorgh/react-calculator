import "../styles/Button.css";

const Button = ({ children, action, type }) => {
    return (
        <button onClick={action} className={`Button-component ${type}`}>{children}</button>
    )
}

export default Button;