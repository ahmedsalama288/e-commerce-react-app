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
