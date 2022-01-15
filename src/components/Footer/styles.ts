import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: var(--gray-700);
`;

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  height: 18vh;

  border-top: 1px solid var(--gray-500);
  padding: 32px 0;
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterCenter = styled.div`
  padding: 0 10px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 0;
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

    margin: 8px 0;

    color: var(--blue-400);
  }
`;
