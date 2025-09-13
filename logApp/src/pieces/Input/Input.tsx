import React from "react";
import "./Input.scss";

type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


 const Input: React.FC<InputProps> = ({ type = "text", placeholder, value = "", onChange }) => {
  return <input className="Input" type={type} placeholder={placeholder} value={value} onChange={onChange} required />;
};
export default Input;

// export default Input;
