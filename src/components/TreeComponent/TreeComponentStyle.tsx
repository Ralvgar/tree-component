import styled from "styled-components";

interface Theme {
  backgroundColor: string;
  baseColor: string;
}

export const List = styled.ul.attrs(
  (props: {
    size: string;
    color?: string;
    bgColor?: string;
    theme: Theme;
  }) => ({
    size: props.size || "1em",
    bgColor: props.bgColor || props.theme.backgroundColor,
    color: props.color || props.theme.baseColor,
  })
)`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  list-style: none;
`;

export const NotToggleable = styled.li`
  width: fit-content;
`;

export const Toggleable = styled(NotToggleable)`
  cursor: pointer;
`;
