import styled from "styled-components";

export const StyledHeader = styled.header`
  background: var(--gray-600);
  border-bottom: 1px solid var(--gray-500);
`;

export const HeaderWrapper = styled.div`
  background: var(--gray-600);
  height: 66px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .right-side {
    display: flex;
    align-items: center;
    button {
      margin-left: 28px;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1rem;
  letter-spacing: 0.04em;
  color: var(--shape);
`;

export const Nav = styled.nav`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: flex;
    align-items: center;

    margin: 0 24px;
    color: var(--gray-300);
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.04em;
    height: 100%;

    &.active {
      color: var(--shape);
      font-weight: 600;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        bottom: 1px;
        width: 100%;
        height: 3px;
        background-color: var(--yellow-500);
        border-radius: 3px 3px 0 0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Translate = styled.button`
  background: var(--gray-500);
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--gray-800);
  border-radius: 4px;

  cursor: pointer;
  transition: 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    margin-left: 32px;
  }
`;
