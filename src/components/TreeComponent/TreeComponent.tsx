import React, { useState } from 'react';
import { Folder } from './Folder';
import { List, NotToggleable, Toggleable } from "./TreeComponentStyle";
import propTypes from 'prop-types';

export interface TreeObject {
    name: string,
    childrens?: TreeObject[]
}

interface Props { tree: TreeObject[], iconStyle?: string }

const TreeComponent = ({ tree, iconStyle }: Props) => {

    const [openItems, setOpenItems] = useState<TreeObject[]>([]);

    const removeItemFromOpenItems = (itemToRemove: TreeObject) => {
        setOpenItems((state: TreeObject[]) => {
            return state.filter(item => item !== itemToRemove);
        })
    }

    return (
        <List>
            {tree.map((treeItem: TreeObject) => (
                <>
                    <Toggleable>
                        <span onClick={() => openItems.includes(treeItem) ? removeItemFromOpenItems(treeItem) : setOpenItems(state => [...state, treeItem])}>{treeItem.name}</span>
                        {treeItem.childrens && openItems.includes(treeItem) ? <TreeComponent tree={treeItem.childrens}></TreeComponent> : null}
                    </Toggleable>
                </>
            ))}
        </List>
    )
}

TreeComponent.propTypes = {
    tree: propTypes.array.isRequired,
};

export default TreeComponent
