import styled from "styled-components";

export const List = styled.ul.attrs(
  (props: { size: string; color?: string; bgColor?: string }) => ({
    size: props.size || "1em",
  })
)`
  font-size: ${(props) => props.size};
  list-style: none;
`;

export const NotToggleable = styled.li`
  width: fit-content;
`;

export const Toggleable = styled(NotToggleable)`
  cursor: pointer;
`;
