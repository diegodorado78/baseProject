/*Dependencies*/
import { Outlet, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
/*Components*/
import LeftBar from "./leftBar";
import Header from "./header";

const Layout = ({ menuItems }) => {
    const location = useLocation();

   const getTitle = () => {
     let title = "";
     menuItems.map((menu) => {
       if (menu.submenu.length > 0) {
         menu.submenu.map((submenu) => {
           if (location.pathname == submenu.link) title = submenu.title;
         });
       } else {
         if (location.pathname == menu.link) title = menu.title;
       }
     });
     return title;
   };
  return (
    <div className="flex">
      <LeftBar menuItems={menuItems} />
      <div className="flex-1" style={{ flex: "1" }}>
        <Header title={getTitle()} />
        <div className="h-[calc(100vh-64px)] overflow-y-auto mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
Layout.propTypes = {
  menuItems: PropTypes.array,
};
export default Layout;
