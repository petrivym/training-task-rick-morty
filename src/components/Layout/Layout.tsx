import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import "./layout.scss"
// import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
      <section className="grid-container">
        <ErrorPage/>
        {/* <Outlet/> */}
      </section>
  )
};

export default Layout;
