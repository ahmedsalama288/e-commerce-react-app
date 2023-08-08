import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import useInput from "../../../hooks/useInput";
import "./RegisterPage.css";

import { userLogin } from "../../../redux/userSlice";
import { useDispatch } from "react-redux";

const inputVidation = (inputValue) => inputValue.trim() !== "";

const RegisterPage = () => {
  const [showIsVaild, setShowIsVaild] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const enteredUserName = useInput("", inputVidation);
  const enteredUserEmail = useInput("", inputVidation);
  const enteredUserPassword = useInput("", inputVidation);

  const addNewUser = () => {
    const newUser = {
      userName: enteredUserName.value,
      userEmail: enteredUserEmail.value,
      userPassword: enteredUserPassword.value,
    };

    const usersArrayInLocalStorage =
      JSON.parse(localStorage.getItem("usersArr")) || [];

    const userExist = usersArrayInLocalStorage.find(
      (user) => user.userEmail === newUser.userEmail
    );

    if (userExist) {
      setErrorMessage(
        <p>
          User already has an account. Go to <Link to="/login">login</Link>
        </p>
      );
    } else {
      setErrorMessage("");
      usersArrayInLocalStorage.push(newUser);
      localStorage.setItem(
        "usersArr",
        JSON.stringify(usersArrayInLocalStorage)
      );
      dispatch(userLogin());
      navigate("/");
    }
  };

  const handleFormSubmition = (e) => {
    e.preventDefault();
    setShowIsVaild(true);

    const isinputsValuesValid =
      enteredUserName.isValid &&
      enteredUserEmail.isValid &&
      enteredUserPassword.isValid;

    if (isinputsValuesValid) {
      addNewUser();
    }
  };

  return (
    <>
      {errorMessage && (
        <section className="user-message">{errorMessage}</section>
      )}

      <Form className="login-form" onSubmit={handleFormSubmition}>
        <Input
          label="Full Name"
          value={enteredUserName.value}
          placeholder="Enter your name"
          isValid={enteredUserName.showIsVaildInputValue(showIsVaild)}
          type="text"
          onChange={enteredUserName.onChange}
        />
        <Input
          label="Email address"
          value={enteredUserEmail.value}
          placeholder="name@example.com"
          isValid={enteredUserEmail.showIsVaildInputValue(showIsVaild)}
          type="email"
          onChange={enteredUserEmail.onChange}
        />
        <Input
          label="Password"
          value={enteredUserPassword.value}
          placeholder="Password"
          isValid={enteredUserPassword.showIsVaildInputValue(showIsVaild)}
          type="password"
          onChange={enteredUserPassword.onChange}
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
    </>
  );
};

export default RegisterPage;

/* 
const addNewUser = () => {
    const newUser = {
      userName: enteredUserName.value,
      userEmail: enteredUserEmail.value,
      userPassword: enteredUserPassword.value,
      islogin: true,
    };

    // [1] if the users array is not in the local storage create one
    let usersInLocalStorage =
      JSON.parse(localStorage.getItem("usersArr")) || [];

    if (!usersInLocalStorage) {
      localStorage.setItem("usersArr", JSON.stringify([newUser]));
    } else {
      const userExist = usersInLocalStorage.find(
        (user) => user.userEmail === enteredUserEmail.value
      );

      console.log(userExist);
      if (userExist) {
        setErrorMessage(
          <p>
            user have account go to <Link to="/login">login</Link>
          </p>
        );
        return;
      } else {
        setErrorMessage("");
      }

      usersInLocalStorage.push(newUser);
      localStorage.setItem("usersArr", JSON.stringify(usersInLocalStorage));
    }
  };
 */
