import React from 'react';
import { Folder } from './Folder';
import { Ul } from "./TreeComponentStyle";

interface treeObject {
    name: string,
    childrens?: treeObject[]
}

const TreeComponent = ({ file }: {file: treeObject[]}) => {

    return (
        <Ul className='text-left' size="30px">
            {file.map((value: treeObject, idx: number) => (!!value.childrens) ?
                <Folder name={value.name}>
                    <TreeComponent file={value.childrens} />
                </Folder>
                :
                <>
                    <li key={idx} >{value.name}</li>
                </>
            )}
        </Ul>
    )
}

export default TreeComponent
