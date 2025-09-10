import React from "react";
import "./Container.scss";
import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="Container">{children}</div>;
};

export default Container;
