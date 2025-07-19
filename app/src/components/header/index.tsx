import React from "react";
import type { LucideIcon } from "lucide-react";

interface Props {
  name: string;
  icon: LucideIcon;
}

const Header: React.FC<Props> = ({ name, icon: Icon }) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <Icon size={19} strokeWidth={2.5} />
      <h1>{name}</h1>
    </div>
  );
};

export default Header;
