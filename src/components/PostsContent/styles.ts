import styled from "styled-components";

export const PostsContentWrapper = styled.section`
  background: var(--gray-700);
  min-height: 45vh;
`;

export const PostContentOffset = styled.div`
  position: relative;
  top: -10vh;

  > div {
    border: 1px solid var(--gray-500);
  }
`;
