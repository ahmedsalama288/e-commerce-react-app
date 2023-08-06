import "./PageWrapper.css";
const PageWrapper = ({ children, className = null }) => {
  return (
    <section className={`page-wrapper ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default PageWrapper;
