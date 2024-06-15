import { Form, Link, useNavigate } from "react-router-dom";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import "./LoginForm.css";
import useInput from "../../../hooks/useInput";
import { handleLogin } from "../../../utils/handleLogin";
import { useState } from "react";

import { userLogin } from "../../../redux/userSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [showIsVaild, setShowIsVaild] = useState(false);
  const userEmail = useInput("");
  const userPassword = useInput("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmition = (e) => {
    e.preventDefault();
    setShowIsVaild(true);

    const isLoginSuccess = handleLogin(userEmail, userPassword);
    if (isLoginSuccess) {
      dispatch(userLogin());
      navigate("/");
    }
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


