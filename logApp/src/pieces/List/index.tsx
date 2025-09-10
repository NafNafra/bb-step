import React from "react";
import "./ListIcon.scss";
import type { ReactNode } from 'react';


type ListProps = {
  children: ReactNode;
  icon?: string;
  onClick?: () => void;
};

const List: React.FC<ListProps> = ({ children, icon, onClick }) => {
  return (
    <li className="ListIcon" style={{ ['--icon' as any]: `url(${icon})` }} onClick={onClick}>
      {children}
    </li>
  );
};

export default List;