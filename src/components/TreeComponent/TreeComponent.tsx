import React from 'react';
import { Folder } from './Folder';
import { ThemeProvider } from 'styled-components'
import { List, NotToggleable } from "./TreeComponentStyle";
import theme from './theme';
import propTypes from 'prop-types';

interface treeObject {
    name: string,
    childrens?: treeObject[]
}

interface Props { file: treeObject[], size?: string, color?: string, bgColor?: string, darkMode?: boolean, iconStyle?: string }


const TreeComponent = ({ file, size, color, bgColor, darkMode, iconStyle }: Props) => {
    
    return (
        <ThemeProvider theme={darkMode ? theme.darkMode : theme.primary}>
            <List size={size} color={color} bgColor={bgColor}>
                {file.map((value: treeObject) => (!!value.childrens) ?
                    <Folder color={color} name={value.name} iconStyle={iconStyle}>
                        <TreeComponent file={value.childrens} size={size} color={color} bgColor={bgColor} darkMode={darkMode} iconStyle={iconStyle}/>
                    </Folder>
                    :
                    <NotToggleable key={value.name} >{value.name}</NotToggleable>
                )}
            </List>
        </ThemeProvider>
    )
}

TreeComponent.propTypes = {
    file: propTypes.array.isRequired,
};

export default TreeComponent
