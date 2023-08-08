export const handleLogin = (userEmail, userPassword) => {
  const enteredEmail = userEmail.value;
  const enteredPassword = userPassword.value;

  const users = JSON.parse(localStorage.getItem("usersArr"));

  if (!users) {
    userEmail.changeIsValidState(false);
    userPassword.changeIsValidState(false);
    return;
  }
  const storedUserData = users.find((user) => user.userEmail === enteredEmail);

  if (storedUserData) {
    const isValidEmail = storedUserData.userEmail === enteredEmail;
    const isValidPassword = storedUserData.userPassword === enteredPassword;
    if (isValidEmail) {
      userEmail.changeIsValidState(true);
    } else {
      userEmail.changeIsValidState(false);
      return;
    }

    if (isValidPassword) {
      userPassword.changeIsValidState(true);
    } else {
      userPassword.changeIsValidState(false);
      return;
    }

    // Store fake Token
    localStorage.setItem("token", "true");

    return true;
  } else {
    userEmail.changeIsValidState(false);
    userPassword.changeIsValidState(false);
    return false;
  }
};
