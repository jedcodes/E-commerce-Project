import React, { useState } from "react";
import { section } from "./directorySection";
import "./directory.scss";
import MenuItems from "../MenuItems/MenuItems";

const Directory = () => {
  const [sections] = useState(section);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItems key={id} {...sectionProps} />
      ))}
    </div>
  );
};

export default Directory;
