import styled from "styled-components";

export const PostsContentWrapper = styled.section`
  background: var(--gray-700);
  min-height: 45vh;
  margin-bottom: -10px;
`;

export const PostContentOffset = styled.div`
  position: relative;
  top: -10vh;

  > div {
    border: 1px solid var(--gray-500);
    margin-bottom: 16px;
  }
`;
