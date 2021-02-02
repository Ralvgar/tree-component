import React, { useState } from "react";
import { Toggleable, NotToggleable } from "./TreeComponentStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretRight,
  faPlus,
  faMinus,
  faAngleRight,
  faAngleDown,
  faFolder,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

export interface Props {
  name: string;
  children: JSX.Element;
  iconStyle?: string;
}

export const Folder = ({ name, children, iconStyle }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <NotToggleable key={name}>
      <Toggleable key={name} as="span" onClick={() => setIsVisible(!isVisible)}>
        <FontAwesomeIcon
          icon={
            isVisible
              ? getIconFromIconName(iconStyle)[0]
              : getIconFromIconName(iconStyle)[1]
          }
          size="xs"
          listItem
          transform="right-3 down-6"
        />
        {" " + name}
      </Toggleable>
      {isVisible && <>{children}</>}
    </NotToggleable>
  );
};

export const getIconFromIconName = (iconName: string | undefined) => {
  switch (iconName) {
    case "plus":
      return [faMinus, faPlus];
    case "angle":
      return [faAngleDown, faAngleRight];
    case "folder":
      return [faFolderOpen, faFolder];
    default:
      return [faCaretDown, faCaretRight];
  }
};
