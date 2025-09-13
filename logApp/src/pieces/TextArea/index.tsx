import React from "react";
import "./TextArea.scss";

type TextAreaProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

 const TextArea: React.FC<TextAreaProps> = ({ placeholder, value = "", onChange }) => {
  return <textarea className="TextArea" placeholder={placeholder} value={value} onChange={onChange} required></textarea>;
};

export default TextArea;