import React, { useState,useMemo } from 'react';
import './TreeComponent.scss';

const TreeComponent = ({ file }: any) => {
    const [isVisible, setIsVisible] = useState(true);

    const paco = useMemo(() => 
    (file.folder !== undefined) && file.folder.map((value: any, index: any) =>
    <li key={value + index} style={!isVisible ? {visibility: "hidden"} : {display: "inline"}} ><TreeComponent file={value} />{value.name}</li>)
    , [file.folder]);

    return (
        
            <ul className='list-unstyled'>
                {paco}
            </ul>
        
    )
}

export default TreeComponent
