import { Outlet } from "react-router";
import Header from "../components/header/Header";

const RootPage = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default RootPage;
