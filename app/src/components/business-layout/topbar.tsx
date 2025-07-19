import React from "react";

interface Props {
  title: string;
  description: string;
}

const Topbar: React.FC<Props> = () => {
  return (
    <div>
      <h1>topbar</h1>
    </div>
  );
};

export default Topbar;
