/*Dependencies*/
import { Navigate, createBrowserRouter } from "react-router-dom";
/*Components*/
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
/**
 * Component to define the root router.
 * @returns root router.
 */
const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Register />,
  },
  {
    path: "/*",
    element: <Navigate to="/" replace />,
  },
]);
export { rootRouter };
