import "./Input.css";

const Input = ({ label,value, placeholder, type, isValid = true, onChange }) => {
  return (
    <section className={`input-container ${!isValid ? "non-valid" : ""}`}>
      <label>{label}</label>
      <input
        autoComplete="off"
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </section>
  );
};

export default Input;
