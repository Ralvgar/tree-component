import React from "react";
import { Folder } from "./Folder";
import { ThemeProvider } from "styled-components";
import { List, NotToggleable } from "./TreeComponentStyle";
import theme from "./theme";
import propTypes from "prop-types";

export interface treeObject {
  name: string;
  childrens?: treeObject[];
}

interface Props {
  tree: treeObject[];
  size?: string;
  color?: string;
  bgColor?: string;
  darkMode?: boolean;
  iconStyle?: string;
}

const TreeComponent = ({
  tree,
  size,
  color,
  bgColor,
  darkMode,
  iconStyle,
}: Props) => {
  return (
    <ThemeProvider theme={darkMode ? theme.darkMode : theme.primary}>
      <List size={size} color={color} bgColor={bgColor}>
        {tree.map((treeItem: treeObject, idx) =>
          !!treeItem.childrens ? (
            <Folder color={color} name={treeItem.name} iconStyle={iconStyle}>
              <TreeComponent
                tree={treeItem.childrens}
                size={size}
                color={color}
                bgColor={bgColor}
                darkMode={darkMode}
                iconStyle={iconStyle}
              />
            </Folder>
          ) : (
            <NotToggleable key={treeItem.name + idx}>
              {treeItem.name}
            </NotToggleable>
          )
        )}
      </List>
    </ThemeProvider>
  );
};

TreeComponent.propTypes = {
  tree: propTypes.array.isRequired,
};

export default TreeComponent;
