import React from 'react';
import { Folder } from './Folder';
import { ThemeProvider } from 'styled-components'
import { List, NotToggleable} from "./TreeComponentStyle";
import theme from './theme';

interface treeObject {
    name: string,
    childrens?: treeObject[]
}

const TreeComponent = ({ file, size, color, bgColor, darkMode, iconStyle}: 
    {file: treeObject[], size?: string, color?: string, bgColor?:string, darkMode?: boolean, iconStyle?: string}) => { 

    return (
        <ThemeProvider theme={darkMode ? theme.darkMode : theme.primary}>
            <List size={size} color={color} bgColor={bgColor}>
                {file.map((value: treeObject, idx: number) => (!!value.childrens) ?
                    <Folder color={color} name={value.name} iconStyle={iconStyle}>
                        <TreeComponent file={value.childrens} size={size} color={color} bgColor={bgColor} darkMode={darkMode} iconStyle={iconStyle}/>
                    </Folder>
                    :
                    <>
                        <NotToggleable key={idx} >{value.name}</NotToggleable>
                    </>
                )}
            </List>
        </ThemeProvider>
    )
}

export default TreeComponent
