import styled, { css } from "styled-components";

interface Theme {
  backgroundColor: string,
  baseColor: string
}

export const List = styled.ul.attrs((props: { size: string, color?: string, bgColor?: string, theme: Theme }) => ({
  size: props.size || "1em",
  bgColor: props.bgColor || props.theme.backgroundColor,
  color: props.color || props.theme.baseColor,
}))`
    // this color here is to show how styled-components solve the specifity problems.
    /* color: red; */
    background-color:  ${props => props.bgColor};
    color:   ${props => props.color};
    font-size: ${props => props.size};
    list-style: none;
    // using the prop inself to change our css. (this is only to show how it works)
    ${(props: { green?: boolean }) => props.green && css`
        color: #28c023;
    `}
    
`;

export const NotToggleable = styled.li`
  width: fit-content;
`;

export const Toggleable = styled(NotToggleable)`

    cursor: pointer;
    // pasing boolean to add more css to this component. (this is only to show how it works)
    transition: ease 0.25s all;
    ${(props: {isActive: boolean}) => props.isActive && css` 
    font-size: 1.1em;
    `}
    // using hover in this component. (this is only to show how it works)
    :hover {
      font-size: 1.1em;
      opacity:0.5
    }
`;

