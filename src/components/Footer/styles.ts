import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: var(--gray-700);
`;

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  min-height: 18vh;

  border-top: 1px solid var(--gray-500);
  padding: 32px 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;

    div {
      margin: 12px 0;
    }
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 28px;
    letter-spacing: 0.04em;

    color: var(--blue-400);
    margin-bottom: 12px;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.04em;

    color: var(--gray-500);
  }
`;

export const FooterCenter = styled.div`
  padding: 0 10px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
  }

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;

    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: var(--shape);
    margin-bottom: 8px;
  }

  li {
    list-style: none;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    a {
      margin: 8px 0;
      color: var(--blue-400);
    }
  }
`;

export const FooterRight = styled.div`
  margin-left: auto;

  @media screen and (max-width: 768px) {
    margin: 12px -8px !important;
  }
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    margin: 0 8px;

    color: var(--shape);
    margin-bottom: 8px;
  }

  img {
    cursor: pointer;
  }

  a {
    margin: 0 8px;
  }
`;
