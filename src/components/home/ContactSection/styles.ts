import styled from "styled-components";
import { ButtonLink } from "../../../styles/global";

export const ContactSectionWrapper = styled.section`
  background: var(--gray-700);
  padding: 10vh 0;
  .content {
    text-align: center;
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 2.5rem;
      line-height: 48px;
      letter-spacing: 0.04em;

      color: var(--yellow-500);

      margin-bottom: 24px;
    }
    p {
      font-style: normal;
      font-weight: bold;
      font-size: 2rem;
      line-height: 32px;
      letter-spacing: 0.04em;
      max-width: 600px;
      margin: 0 auto;
      color: var(--shape);
    }
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContactButton = styled(ButtonLink)`
  margin-top: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--blue-500);

  padding: 12px 36px;
  border-radius: 8px;

  transition: 0.2s;
  cursor: pointer;

  color: var(--shape);
  svg {
    margin-right: 12px;
  }
`;
