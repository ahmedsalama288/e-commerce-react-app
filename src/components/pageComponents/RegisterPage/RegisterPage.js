import { useState } from "react";
import { Form, Link } from "react-router-dom";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import useInput from "../../../hooks/useInput";

import "./RegisterPage.css";

const inputVidation = (inputValue) => inputValue.trim() !== "";

const RegisterPage = () => {
  const [showIsVaild, setShowIsVaild] = useState(false);

  const userName = useInput("", inputVidation);
  const userEmail = useInput("", inputVidation);
  const userPassword = useInput("", inputVidation);

  const handleFormSubmition = (e) => {
    e.preventDefault();
    setShowIsVaild(true);
  };

  return (
    <Form className="login-form" onSubmit={handleFormSubmition}>
      <Input
        label="Full Name"
        value={userName.value}
        placeholder="Enter your name"
        isValid={userName.showIsVaildInputValue(showIsVaild)}
        type="text"
        onChange={userName.onChange}
      />
      <Input
        label="Email address"
        value={userEmail.value}
        placeholder="name@example.com"
        isValid={userEmail.showIsVaildInputValue(showIsVaild)}
        type="email"
        onChange={userEmail.onChange}
      />
      <Input
        label="Password"
        value={userPassword.value}
        placeholder="Password"
        isValid={userPassword.showIsVaildInputValue(showIsVaild)}
        type="password"
        onChange={userPassword.onChange}
      />
      <section>
        <p>
          Already has an account?{" "}
          <Link to="/login" style={{ color: "rgb(0 0 0 / 55%)" }}>
            Login
          </Link>
        </p>
      </section>
      <Button>Register</Button>
    </Form>
  );
};

export default RegisterPage;
