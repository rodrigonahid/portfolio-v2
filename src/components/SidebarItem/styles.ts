import styled from "styled-components";

interface SibarItemWrapperProps {
  active?: boolean;
}

export const SidebarHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 22px 20px;
  border-bottom: 1px solid var(--gray-500);
`;

export const SidebarItemWrapper = styled.li<SibarItemWrapperProps>`
  a {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 70px;
    padding: 0 20px;

    border-bottom: 1px solid var(--gray-500);
  }

  span {
    font-style: normal;
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
    font-size: 20px;
    line-height: 28px;
    /* or 140% */

    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: ${({ active }) => (active ? " #FFF" : "var(--shape)")};
  }

  ${({ active }) =>
    active &&
    `
    filter:brightness(0.9);

    &::before{
        content: "";
        position: absolute;
        z-index: 10;

        left:0;
        top: 0;

        width: 5px;
        height: 100%;

        background: var(--blue-400);
    }
  `}
`;
