import styled from "styled-components";

export const ItemHightlightedWrapper = styled.div`
  background: var(--gray-700);
  border-radius: 8px;
  position: relative;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 5px;
    background: var(--blue-400);
    border-radius: 8px 0 0 8px;
  }

  .left {
    flex: 1;
    padding: 1.25rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .top {
    margin-bottom: 1.5rem;
    h3 {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 24px;

      letter-spacing: 0.02em;
      color: var(--shape);

      margin-bottom: 0.75rem;
    }
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      /* or 171% */

      color: var(--gray-300);
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;

    p {
      font-style: normal;
      font-weight: bold;
      font-size: 1rem;
      line-height: 28px;

      letter-spacing: 0.04em;

      color: var(--green-500);
    }

    a {
      font-style: normal;
      font-weight: bold;
      font-size: 1rem;
      line-height: 28px;

      letter-spacing: 0.04em;

      color: var(--blue-400);

      &:hover {
        text-decoration: underline;
      }
    }
  }
  .img-wrapper {
    position: relative;

    flex: 1;

    // @media screen and (max-width: 768px) {
    //   height: 200px;
    // }
    img {
      border-radius: 0 8px 8px 0;
    }
  }
`;
