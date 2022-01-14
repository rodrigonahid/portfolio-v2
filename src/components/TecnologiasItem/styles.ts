import styled from "styled-components";

export const ItemWrapper = styled.li`
  list-style: none;
  text-align: center;

  padding: 32px;
  margin: 5px;
  background: var(--gray-800);

  width: 200px;
  height: 200px;

  border-radius: 8px;

  h3 {
    margin-top: 12px;

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;

    letter-spacing: 0.04em;
    color: var(--gray-300);
  }
`;
