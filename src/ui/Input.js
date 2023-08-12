import "./Input.css";

const Input = ({
  className,
  label,
  value,
  maxLength,
  placeholder,
  type,
  isValid = true,
  onChange,
}) => {
  return (
    <section
      className={`input-container ${!isValid ? "non-valid" : ""} ${className}`}
    >
      <label htmlFor={label}>{label}</label>
      <input
        autoComplete="off"
        value={value}
        type={type}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
      />
    </section>
  );
};

export default Input;
