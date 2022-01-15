import styled from "styled-components";

export const BurgerWrapper = styled.button`
  @media screen and (min-width: 768px) {
    display: none;
  }
  display: flex;
  flex-direction: column;

  background: transparent;
  border: none;
  cursor: pointer;
`;

export const BurgerLine = styled.span`
  width: 28px;
  height: 2px;
  background: var(--yellow-500);
  margin: 4px 0;
`;

export const SidebarMenu = styled.div``;
