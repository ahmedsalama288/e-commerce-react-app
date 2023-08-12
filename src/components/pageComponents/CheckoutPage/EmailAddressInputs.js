import Input from "../../../ui/Input";
import useInput from "../../../hooks/useInput";

import "./EmailAddressInputs.css"

const EmailAddressInputs = () => {
  const enteredEmail = useInput("");
  const enteredFristAddress = useInput("");
  const enteredSecondAddress = useInput("");

  return (
    <div className="email-address-inputs-container">
      <Input
        label="Email"
        type="email"
        value={enteredEmail.value}
        onChange={enteredEmail.onChange}
      />
      <Input
        label="Address"
        type="text"
        value={enteredFristAddress.value}
        onChange={enteredFristAddress.onChange}
      />
      <Input
        label="Address 2"
        type="text"
        value={enteredSecondAddress.value}
        onChange={enteredSecondAddress.onChange}
      />
    </div>
  );
};

export default EmailAddressInputs;
