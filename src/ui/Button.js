import "./Button.css";

const Button = ({ className, children, onClick, disabled }) => {
  return (
    <button disabled={disabled} className={`main-btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
