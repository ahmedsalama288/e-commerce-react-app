import "./Textarea.css";

const Textarea = ({ label, value, placeholder, isValid, onChange }) => {
  return (
    <section className={`textarea-container ${!isValid ? "non-valid" : ""}`}>
      <label>{label}</label>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </section>
  );
};

export default Textarea;
