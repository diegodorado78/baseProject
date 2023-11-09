/*Dependencies*/
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
/*Context*/
import { AuthContext } from "../../../context/AuthContext";
/*UI*/
import { Card, Button, Input, Image } from "@nextui-org/react";
/*Images*/
import logo from "../../../assets/images/base-logo.png";
/*Services*/
import { authLogin } from "../../../api/auth";
/**
 * Component to render login form , used in login page.
 * @returns Custom form
 */
function Login() {
  const { login, setNotifications } = useContext(AuthContext);
  const [user, setUser] = useState({ email: "", password: "", loading: false });

  function handleLogin() {
    setUser((prev) => ({ ...prev, loading: true }));
    authLogin(user).then((response) => {
      if (!response) {
        setNotifications((prev) => [
          ...prev,
          {
            id: prev.length,
            text: `Estamos teniendo problemas con el servidor intente mas tarde.`,
            red: true,
          },
        ]);
        setUser((prev) => ({ ...prev, loading: false }));
        return;
      }
      if (response.status == true) {
        login(response.data);
        setNotifications((prev) => [
          ...prev,
          { id: prev.length, text: `${response.message}`, red: false },
        ]);
        setUser((prev) => ({ ...prev, loading: false }));
      } else {
        setNotifications((prev) => [
          ...prev,
          { id: prev.length, text: `${response.message}`, red: true },
        ]);
        setUser((prev) => ({ ...prev, password: "", loading: false }));
      }
    });
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <Image src={logo} width={250} />
      {/* Form */}
      <Card className=" flex flex-col xs-width max-w-[420px] p-5 mx-auto gap-4">
        {/* Email */}
        <Input
          label="Correo Electronico"
          type="email"
          value={user.email}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        {/* Password */}
        <Input
          label="Contraseña"
          type="password"
          value={user.password}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        {/* Submit button */}
        <Button
          variant="shadow"
          className=" w-6/12 bg-gray-800 text-white mx-auto"
          isLoading={user.loading}
          onClick={() => handleLogin()}
        >
          Iniciar Sesion
        </Button>
        <Link className="text-medium font-medium text-center" to="/registro">
          ¿No tienes una cuenta?{" "}
          <span className="text-sky-500 font-bold">Registrate aquí </span>
        </Link>
      </Card>
    </div>
  );
}
export default Login;
