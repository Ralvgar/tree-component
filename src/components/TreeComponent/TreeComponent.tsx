import React from 'react';
import { Folder } from './Folder';
import { List, NotToggleable } from "./TreeComponentStyle";
import propTypes from 'prop-types';

export interface treeObject {
    name: string,
    childrens?: treeObject[]
}

interface Props { tree: treeObject[], iconStyle?: string }


const TreeComponent = ({ tree, iconStyle}: Props) => {

    return (
            <List>
                {tree.map((treeItem: treeObject, idx) => (!!treeItem.childrens) ?
                    <Folder name={treeItem.name} iconStyle={iconStyle}>
                        <TreeComponent tree={treeItem.childrens} iconStyle={iconStyle}/>
                    </Folder>
                    :
                    <NotToggleable key={treeItem.name + idx}>{treeItem.name}</NotToggleable>
                )}
            </List>
    )
}

TreeComponent.propTypes = {
    tree: propTypes.array.isRequired,
};

export default TreeComponent
