import React from "react";
import "./Paragraph.scss";
import type { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
};

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p className="Paragraph">{children}</p>;
};

export default Paragraph;
