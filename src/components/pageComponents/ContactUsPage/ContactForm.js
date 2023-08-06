import { Form } from "react-router-dom";
import Input from "../../../ui/Input";
import Textarea from "../../../ui/Textarea";
import Button from "../../../ui/Button";
import "./ContactForm.css";
import useInput from "../../../hooks/useInput";
import { useState } from "react";

const inputVidation = (inputValue) => inputValue.trim() !== "";

const ContactForm = () => {
  const [showIsVaild, setShowIsVaild] = useState(false);

  const userName = useInput("", inputVidation);
  const userEmail = useInput("", inputVidation);
  const userMessage = useInput("", inputVidation);

  const handleFormSubmition = (e) => {
    e.preventDefault();
    setShowIsVaild(true);

    const isValidInputs =
      userName.isValid && userEmail.isValid && userMessage.isValid;

    if (isValidInputs) {
      setShowIsVaild(false);
      userName.clearInputVlaue();
      userEmail.clearInputVlaue();
      userMessage.clearInputVlaue();
    } else {
      return;
    }
  };

  return (
    <Form className="contact-form" onSubmit={handleFormSubmition}>
      <Input
        label="Name"
        value={userName.value}
        placeholder="Enter your name"
        isValid={userName.showIsVaildInputValue(showIsVaild)}
        type="text"
        onChange={userName.onChange}
      />

      <Input
        label="Email"
        value={userEmail.value}
        placeholder="name@example.com"
        isValid={userEmail.showIsVaildInputValue(showIsVaild)}
        type="email"
        onChange={userEmail.onChange}
      />
      <Textarea
        label="Message"
        value={userMessage.value}
        placeholder="Enter your message"
        isValid={userMessage.showIsVaildInputValue(showIsVaild)}
        onChange={userMessage.onChange}
      />
      <Button className="form-btn" disabled={false}>
        send
      </Button>
    </Form>
  );
};

export default ContactForm;
