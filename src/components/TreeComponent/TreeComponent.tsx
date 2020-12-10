import React from 'react';
import { Folder } from './Folder';
import { List, NotToggleable } from "./TreeComponentStyle";
import propTypes from 'prop-types';

export interface treeObject {
    name: string,
    childrens?: treeObject[]
}

interface Props { file: treeObject[], iconStyle?: string }


const TreeComponent = ({ file, iconStyle}: Props) => {

    return (
            <List >
                {file.map((value: treeObject) => (!!value.childrens) ?
                    <Folder name={value.name} iconStyle={iconStyle}>
                        <TreeComponent file={value.childrens} iconStyle={iconStyle}/>
                    </Folder>
                    :
                    <NotToggleable key={value.name} >{value.name}</NotToggleable>
                )}
            </List>
    )
}

TreeComponent.propTypes = {
    file: propTypes.array.isRequired,
};

export default TreeComponent
