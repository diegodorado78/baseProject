/*Dependencies*/
import { RouterProvider } from 'react-router-dom';
/*Routers*/
import { adminRouter } from './routes/adminRouter';
import { userRouter } from './routes/userRouter';
import { rootRouter } from './routes/rootRouter';
/**
 * App component to wrap the whole app components .
 * @returns Customized App Component.
 */
function App() {
// const user = {
//   roles: [
//     { id: 1, name: "user" },
//   ], //changeable to use other routers
// };
const user=undefined
  return (
    <div className="App">
      {user ? (
        user.roles[0].name === "admin" ? (
          <RouterProvider router={adminRouter} />
        ) : user.roles[0].name === "user" ? (
          <RouterProvider router={userRouter} />
        ) : null
      ) : (
        <RouterProvider router={rootRouter} />
      )}
    </div>
  );
}

export default App
