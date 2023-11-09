/*Dependencies*/
import { useState } from "react";
import { Link } from "react-router-dom";
/*Images*/
import logo from "../../../assets/images/base-logo.png";
/*UI*/
import {
  Card,
  Button,
  Input,
  Image,
} from "@nextui-org/react";
import IdentificationInput from "./inputs/IdentificationInput";
/*Services*/
import { authRegister } from "../../../api/auth";
import GenderBirthInput from "./inputs/GenderBirthInput";
/**
 * Component to render register form , used in Register page.
 * @returns Custom form
 */
function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    document_type: "",
    document_type_other: "",
    document: "",
    birth_date: "",
    gener: "",
    gener_other: "",
    password: "",
    loading: false,
  });
  const handleRegister = (e) => {
    e.preventDefault();
    setData((prev) => ({ ...prev, loading: true }));
    authRegister(data).then((response) => {
      if (response.status == true) {
        navigator("/");
        setData({ loading: false });
      } else {
        alert(response.message);
        setData((prev) => ({ ...prev, loading: false }));
      }
    });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-5 ">
      <Image src={logo} width={250} />
      <Card className=" flex flex-col gap-4 w-[calc(100vw-32px)] max-w-[800px] p-4 mx-auto">
        {/* FORM INPUTS */}
        <form className="flex flex-col gap-2">
          {/* Name*/}
          <Input
            isRequired
            aria-label="name"
            label="Nombre Completo"
            type="text"
            value={data.name}
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          {/* Email */}
          <Input
            isRequired
            label="Correo Electrónico"
            type="email"
            aria-label="email"
            value={data.email}
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          {/* Password */}
          <Input
            isRequired
            label="Contraseña"
            type="password"
            aria-label="contraseña"
            value={data.password}
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          {/* Id type and number */}
          <div className="flex ">
            <IdentificationInput data={data} setData={setData} />
          </div>
          {data.document_type == "O" && (
            <>
              <Input
                className="w-[200px]"
                isRequired
                aria-label="document_type_other"
                label="¿Cual Tipo identificación?"
                type="text"
                value={data.document_type_other}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    document_type_other: e.target.value,
                  }))
                }
              />
            </>
          )}
          {/* Gender and Birthdate */}
          <div className="flex ">
            <GenderBirthInput data={data} setData={setData} />
          </div>
          {data.gener == "O" && (
            <>
              <Input
                isRequired
                aria-label="gener_other"
                label="¿Cual genero?"
                type="text"
                value={data.gener_other}
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    gener_other: e.target.value,
                  }))
                }
              />
            </>
          )}
          {/* Phone */}
          <>
            <Input
              isRequired
              label="Celular"
              aria-label="cellphone"
              type="text"
              value={data.cellphone}
              onChange={(e) =>
                setData((prev) => ({
                  ...prev,
                  cellphone: e.target.value,
                }))
              }
            />
          </>
        </form>
        {/* Submit Button */}
        <Button
          onPress={handleRegister}
          variant="shadow"
          className=" w-6/12 bg-gray-800 text-white mx-auto "
          isLoading={data.loading}
        >
          Registrarme
        </Button>

        {/* Link to login */}
        <Link className="text-sm font-medium text-center" to="/login">
          ¿Ya tienes una cuenta?{" "}
          <span className="text-sky-500 font-bold">Inicia sesión aquí </span>
        </Link>
      </Card>
    </div>
  );
}
export default Register;