import style from "styled-components";

interface TitleProps {
    readonly isActive: boolean;
  };

interface Ul {
    readonly size: string;
}

export const Ul = style.ul.attrs((props: Ul)=> ({
    type: "text",
    size: props.size || "1em",
  })) `
    color: blue;
    font-size: ${props => props.size};
`;

export const Toggleable = style.li<TitleProps> `
    color: ${props => props.isActive ? "grey" : "red"};
    cursor: pointer; 
    
`;