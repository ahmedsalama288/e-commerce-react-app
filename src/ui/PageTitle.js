import "./PageTitle.css";

const PageTitle = ({ pageTitleName }) => {
  return (
    <section className="page-title">
      <h1>{pageTitleName}</h1>
      <hr />
    </section>
  );
};

export default PageTitle;
