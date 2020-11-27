import React, { useState } from 'react';
import './TreeComponent.scss';

const TreeComponent = ({ file }: any) => {
    const [isVisible, setIsVisible] = useState(true);


    return (

        <ul className='list-unstyled'>
            {Object.keys(file).map((key: any, idx: any) => (key === 'name') ?
            <li key={key + idx} style={!isVisible ? { visibility: "hidden" } : { display: "inline" }} >{file[key]}</li>:
            <TreeComponent file={file[key]} />)}
        </ul>

    )
}

export default TreeComponent
