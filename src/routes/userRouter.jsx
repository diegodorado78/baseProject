/*Dependencies*/
import { createBrowserRouter } from "react-router-dom";
/*Components*/
import Layout from "../components/layout";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
/**
 * Component to define user's router.
 * @returns user's router.
 */
const userRouter = createBrowserRouter([
  {
    element: (
      <Layout
        title={"HOME"}
        menuItems={[
          {
            title: "USUARIO",
            menu: "",
            active: false,
            link: "/",
            submenu: [
              {
                title: "",
                menu: "",
                active: false,
                link: "",
              },
            ],
          },
        ]}
      />
    ),
    children: [
      {
        path: "/*",
        element: <h1>INICIO</h1>,
        name: "Inicio",
      },
    ],
  },
  {
    path: "/registro",
    element: <Register />,
    name: "Registro",
  },
  {
    path: "/login",
    element: <Login />,
    name: "Login",
  },
]);
export { userRouter };
