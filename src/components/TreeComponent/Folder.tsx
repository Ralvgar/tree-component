import React, {useState} from 'react'

interface Props {
    name: string,
    children: JSX.Element
}

export const Folder = ({ name, children }: Props) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <li key={name} className='toggleable' onClick={() => setIsVisible(!isVisible)}>
                {name}
            </li>
            {isVisible && <>{children}</>}
        </>
    )

}