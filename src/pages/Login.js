import { isLoggedIn } from "../utils/isLoggedIn";
import { redirect } from "react-router-dom";
import PageWrapper from "../ui/PageWrapper";
import PageTitle from "../ui/PageTitle";
import LoginForm from "../components/pageComponents/LoginPage/LoginForm";

const Login = () => {
  return (
    <PageWrapper>
      <PageTitle pageTitleName="Login" />
      <LoginForm />
    </PageWrapper>
  );
};

export default Login;

export const checkUserLoggedInLoader = () => {
  const isUserLoggedIn = isLoggedIn();

  if (isUserLoggedIn) {
    return redirect("/");
  }
  return null;
};
