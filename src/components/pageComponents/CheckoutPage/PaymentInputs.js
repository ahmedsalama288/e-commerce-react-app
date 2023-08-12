import Input from "../../../ui/Input";
import useInput from "../../../hooks/useInput";
import "./PaymentInputs.css";

const handleCardNumberChange = (event) => {
  const inputValue = event.target.value;

  if (/^[0-9\s]*$/.test(inputValue)) {
    const formattedNumber = inputValue
      .replace(/\s/g, "") // Remove existing spaces
      .replace(/(\d{4})(?=\d)/g, "$1 "); // Add a space after every 4 digits
    return formattedNumber;
  }
  return "";
};

const PaymentInputs = () => {
  const enteredCreditCardNumber = useInput("", handleCardNumberChange);
  const enteredSecurityCode = useInput("");
  const enteredCardExpiration = useInput("");

  return (
    <>
      <h2>payment</h2>
      <section className="payment-section">
        <div>
          <Input
            label="Credit Card Number"
            type="text"
            maxLength="19"
            value={enteredCreditCardNumber.value}
            onChange={enteredCreditCardNumber.onChange}
          />
          <Input
            label="CVC"
            type="password"
            value={enteredSecurityCode.value}
            onChange={enteredSecurityCode.onChange}
          />
        </div>
        <Input
          label="Card Expiration"
          type="date"
          value={enteredCardExpiration.value}
          onChange={enteredCardExpiration.onChange}
        />
      </section>
    </>
  );
};

export default PaymentInputs;
