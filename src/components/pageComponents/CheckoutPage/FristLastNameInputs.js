import Input from "../../../ui/Input";
import useInput from "../../../hooks/useInput";

import "./FristLastNameInputs.css";

const FristLastNameInputs = () => {
  const enteredFristName = useInput("");
  const enteredLastName = useInput("");

  return (
    <div className="frist-last-name-input-container">
      <Input
        label="First name"
        type="text"
        value={enteredFristName.value}
        onChange={enteredFristName.onChange}
      />
      <Input
        label="Last name"
        type="text"
        value={enteredLastName.value}
        onChange={enteredLastName.onChange}
      />
    </div>
  );
};

export default FristLastNameInputs;
