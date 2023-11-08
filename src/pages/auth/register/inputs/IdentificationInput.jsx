/* eslint-disable react/prop-types */
import { Select, SelectItem,Input } from "@nextui-org/react";
const idArray = [
  { label: "Cédula ciudadanía", value: "C.C." },
  { label: "Tarjeta de identidad", value: "T.I." },
  { label: "Cédula Extranjería", value: "C.E." },
  { label: "Otro", value: "O" },
];
/**
 * Component to render gender and Id input, used in register.
 * @returns Custom input component
 */
const IdentificationInput = ({setData,data}) => {
  return (
    <>
      {/* Id type */}
      <div>
        <Select
          isRequired
          label="Tipo Documento"
          labelPlacement={"inside"}
          placeholder="Seleccione"
          size={"md"}
          aria-label="document_type"
          className="w-[150px] mx-1 "
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              document_type: e.target.value,
            }))
          }
        >
          {idArray.map((select) => (
            <SelectItem key={select.value} value={select.value}>
              {select.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      {/* Number */}
      <div className="flex-1 " >
        <Input
        className="p-0"
          isRequired
          aria-label="document"
          label="Número"
          type="text"
          value={data.document}
          onChange={(e) =>
            setData((prev) => ({ ...prev, document: e.target.value }))
          }
        />
      </div>
    </>
  );
}

export default IdentificationInput