import PageWrapper from "../ui/PageWrapper";
import PageTitle from "../ui/PageTitle";
import RegisterPage from "../components/pageComponents/RegisterPage/RegisterPage";

const Register = () => {
  return (
    <PageWrapper>
      <PageTitle pageTitleName="Register" />
      <RegisterPage />
    </PageWrapper>
  );
};

export default Register;
