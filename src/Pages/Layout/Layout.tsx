import NavBar from "../../Components/NavBar/NavBar";
import Menu from "../../Components/Menu/Menu";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

function Layout() {
  return (
    <div className="main">
      <NavBar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
