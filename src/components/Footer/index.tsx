import { Container } from "../../styles/grid";
import {
  FooterCenter,
  FooterLeft,
  FooterWrapper,
  StyledFooter,
} from "./styles";

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterWrapper>
          <FooterLeft>
            <div className="top">
              <h2>{"${rodrigo.nahid}"}</h2>
              <p>Obrigado por chegar até aqui!</p>
            </div>
            <div className="bottom">
              <p>© 2022 Rodrigo Nahid. Todos os direitos reservados</p>
            </div>
          </FooterLeft>
          <FooterCenter>
            <h3>SiteMap</h3>
            <ul>
              <li>Home</li>
              <li>Posts</li>
              <li>Contato</li>
            </ul>
          </FooterCenter>

          <div className="row">
            <p>Teste</p>
          </div>
        </FooterWrapper>
      </Container>
    </StyledFooter>
  );
}
