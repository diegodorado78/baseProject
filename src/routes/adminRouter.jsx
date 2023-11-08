/*Dependencies*/
import { createBrowserRouter } from "react-router-dom";
/*Components*/
import Layout from "../components/layout";
/**
 * Component to define admin's router.
 * @returns admin's router.
 */
const adminRouter = createBrowserRouter([
  {
    element: (
      <Layout
        title={"HOME"}
        menuItems={[
          {
            title: "ADMIN",
            menu: "Administrador",
            active: false,
            link: "/",
            submenu: [
              {
                title: "",
                menu: "",
                active: false,
                link: "/",
              },
            ],
          },
        ]}
      />
    ),
    children: [
      {
        path: "/",
        element: <h1>INICIO</h1>,
        name: "Inicio",
      },
    ],
  },
]);
export { adminRouter };
