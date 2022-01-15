import styled from "styled-components";

interface SidebarMenuProps {
  state: boolean;
}

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

export const SidebarMenu = styled.div<SidebarMenuProps>`
  position: fixed;
  top: 0;
  right: ${({ state }) => (state ? "0" : "-120vw")};
  z-index: 50;
  transition: 0.3s;

  display: flex;

  width: 100vw;
  height: 100vh;

  background: var(--gray-600);
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
  height: 66px;
`;

export const Close = styled.button`
  background: transparent;
  border: none;
`;

export const SidebarList = styled.ul``;
