import styled from "styled-components";

export const List = styled.ul`
    list-style: none;  
`;

export const NotToggleable = styled.li`
  width: fit-content;
`;

export const Toggleable = styled(NotToggleable)`
    cursor: pointer;
`;

