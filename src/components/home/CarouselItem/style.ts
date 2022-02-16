import styled from "styled-components";

export const CarouselItemWrapper = styled.div`
  margin-bottom: 24px;
  padding: 0 24px;
  .top {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    h4 {
      font-style: normal;
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 1.75rem;
      margin-left: 1rem;
      color: var(--blue-400);
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.5rem;
    letter-spacing: 0.2px;
  }
`;
