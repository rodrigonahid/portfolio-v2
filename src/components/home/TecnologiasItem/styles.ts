import styled from "styled-components";

export const ItemWrapper = styled.li`
  list-style: none;
  text-align: center;

  padding: 32px;
  margin: 8px;
  background: var(--gray-800);

  width: 200px;
  height: 200px;

  border-radius: 8px;
  transition: 0.2s;

  h3 {
    margin-top: 12px;

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;

    letter-spacing: 0.04em;
    color: var(--gray-300);
  }
  @media screen and (min-width: 768px) {
    &:hover {
      filter: drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.25098));
      transform: translate(-2px, -2px);
    }
  }

  @media screen and (max-width: 768px) {
    min-width: 200px;

    &:first-child {
      margin-left: 20px;
    }
    &:last-child {
      margin-right: 20px;
    }
  }
`;
