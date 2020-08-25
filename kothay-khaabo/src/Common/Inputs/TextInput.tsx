import React, { SyntheticEvent } from "react";
import { FieldError } from "react-hook-form";

interface IProps {
  type: string;
  name: string;
  placeholder: string;
  register: any;
  error: FieldError | undefined;
  label: string;
  pass?: string;
  setPass?: (event: SyntheticEvent<HTMLInputElement>) => void;
}
const TextInput: React.FC<IProps> = ({
  type,
  name,
  placeholder,
  register,
  error,
  label,
}) => {
  const inputStyle = {
    outline: "none",
    border: "none",
    borderBottom: "solid 1px black",
  };
  const errorStyle = {
    color: "red",
  };
  return (
    <div>
      <label className="global-font">{label}</label>

      <input
        style={inputStyle}
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        ref={register}
      />
      {error && <div style={errorStyle}>{error.message}</div>}
    </div>
  );
};

export default TextInput;
