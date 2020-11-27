import React from 'react';
import './TreeComponent.scss';
import { Folder } from './Folder';

interface treeObject {
    name: string,
    childrens?: treeObject[]
}

const TreeComponent = ({ file }: {file: treeObject[]}) => {

    return (
        <ul className='text-left'>
            {file.map((value: treeObject, idx: number) => (!!value.childrens) ?
                <Folder name={value.name}>
                    <TreeComponent file={value.childrens} />
                </Folder>
                :
                <>
                    <li key={idx} >{value.name}</li>
                </>
            )}
        </ul>
    )
}

export default TreeComponent
