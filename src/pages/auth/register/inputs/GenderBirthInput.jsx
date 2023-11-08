/* eslint-disable react/prop-types */
import { Input, Select, SelectItem } from "@nextui-org/react";
const genreArray = [
  { label: "Masculino", value: "mas" },
  { label: "Femenino", value: "fem" },
  { label: "Otro", value: "O" },
];
/**
 * Component to render gender and birthdate inputs, used in register.
 * @returns Custom input component
 */
const GenderBirthInput = ({data,setData}) => {
  return (
    <>
      {/* Gender */}
      <div>
        <Select
          isRequired
          label="Genero"
          labelPlacement={"inside"}
          placeholder="Género"
          aria-label="gener"
          size={"md"}
          className="w-[150px] mx-1 "
          onChange={(e) =>
            setData((prev) => ({ ...prev, gener: e.target.value }))
          }
        >
          {genreArray.map((select) => (
            <SelectItem key={select.value} value={select.value}>
              {select.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      {/* Birthday */}
      <div className="flex-1">
        <Input
          isRequired
          label="Fecha Nacimiento"
          placeholder="Fecha Expedición"
          aria-label="birth_date"
          type="date"
          value={data.birth_date}
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              birth_date: e.target.value,
            }))
          }
        />
      </div>
    </>
  );
}

export default GenderBirthInput;
