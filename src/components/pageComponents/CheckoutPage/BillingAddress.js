import { Form } from "react-router-dom";
import Button from "../../../ui/Button";
import FristLastNameInputs from "./FristLastNameInputs";
import EmailAddressInputs from "./EmailAddressInputs";
import PaymentInputs from "./PaymentInputs";

import "./BillingAddress.css";

const BillingAddress = () => {
  const handleFormSubmission = (e) => {
    e.preventDefault();
    // form data handling logic
  };

  return (
    <section className="billing-address-sec">
      <h2>Billing address</h2>
      <Form onSubmit={handleFormSubmission}>
        <section className="user-data-container">
          <FristLastNameInputs />
          <EmailAddressInputs />
        </section>
        <PaymentInputs />
        <Button>Continue to checkout</Button>
      </Form>
    </section>
  );
};

export default BillingAddress;
