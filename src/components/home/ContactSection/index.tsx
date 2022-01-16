import Link from "next/link";

import { Container } from "../../../styles/grid";
import { ContactButton, ContactSectionWrapper } from "./styles";

export function ContactSection() {
  return (
    <ContactSectionWrapper>
      <Container>
        <div className="content">
          <h2>Vamos trocar uma ideia?</h2>
          <p>
            Feedbacks, dicas e sugestões, alguma dúvida? Clique no botão abaixo.
          </p>
          <div className="button-wrapper">
            <Link
              href="https://api.whatsapp.com/send/?phone=5524981125127&text&app_absent=0"
              passHref
            >
              <ContactButton target="_blank">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.99 2C19.99 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H16L20 20L19.99 2ZM18 2V15.17L16.83 14H2V2H18ZM4 10H16V12H4V10ZM4 7H16V9H4V7ZM4 4H16V6H4V4Z"
                    fill="#E1E1E6"
                  />
                </svg>
                Contato
              </ContactButton>
            </Link>
          </div>
        </div>
      </Container>
    </ContactSectionWrapper>
  );
}
