import React, { useState } from 'react';
import { Folder } from './Folder';
import { List, NotToggleable } from "./TreeComponentStyle";
import propTypes from 'prop-types';

export interface TreeObject {
    name: string,
    childrens?: TreeObject[]
}

interface Props { tree: TreeObject[], iconStyle?: string }

const TreeComponent = ({ tree, iconStyle }: Props) => {

    const [openItems, setOpenItems] = useState<TreeObject[]>([])

    return (
        <List>
            {tree.map((value: TreeObject) => (
                <>
                    <li>
                        <span onClick={() => openItems.includes(value) ? }>{value.name}</span>
                        {value.childrens && openItems.includes(value) ? <TreeComponent tree={value.childrens}></TreeComponent> : null}
                    </li>
                    
                </>
            ))}
        </List>
    )
}

TreeComponent.propTypes = {
    tree: propTypes.array.isRequired,
};

export default TreeComponent
