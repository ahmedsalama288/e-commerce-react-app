import { Form, Link } from "react-router-dom";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import "./LoginForm.css";
import useInput from "../../../hooks/useInput";
import { useState } from "react";

const inputVidation = (inputValue) => inputValue.trim() !== "";

const LoginForm = () => {
  const [showIsVaild, setShowIsVaild] = useState(false);

  const userEmail = useInput("", inputVidation);
  const userPassword = useInput("", inputVidation);

  const handleFormSubmition = (e) => {
    e.preventDefault();
    setShowIsVaild(true);
  };

  return (
    <Form className="login-form" onSubmit={handleFormSubmition}>
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
          New Here?{" "}
          <Link to="/register" style={{ color: "rgb(0 0 0 / 55%)" }}>
            Register
          </Link>
        </p>
      </section>
      <Button>login</Button>
    </Form>
  );
};

export default LoginForm;
