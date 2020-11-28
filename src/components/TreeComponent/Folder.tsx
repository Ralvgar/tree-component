import React, {useState} from 'react'
import { Toggleable } from "./TreeComponentStyle";

interface Props {
    name: string,
    children: JSX.Element
}

export const Folder = ({ name, children }: Props) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Toggleable isActive={isVisible} key={name} onClick={() => setIsVisible(!isVisible)}>
                {name}
            </Toggleable>
            {isVisible && <>{children}</>}
        </>
    )

}