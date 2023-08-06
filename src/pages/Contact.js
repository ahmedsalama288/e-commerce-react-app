import PageWrapper from "../ui/PageWrapper";
import PageTitle from "../ui/PageTitle";
import ContactForm from "../components/pageComponents/ContactUsPage/ContactForm";

const Contact = () => {
  return (
    <PageWrapper>
      <PageTitle pageTitleName="Contact Us" />
      <ContactForm />
    </PageWrapper>
  );
};

export default Contact;
