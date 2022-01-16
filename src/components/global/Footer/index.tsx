import Image from "next/image";
import Link from "next/link";
import { Container } from "../../../styles/grid";
import {
  FooterCenter,
  FooterLeft,
  FooterRight,
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
              <p>Obrigado por ler até aqui!</p>
            </div>
            <div className="bottom">
              <p>© 2022 Rodrigo Nahid. Todos os direitos reservados</p>
            </div>
          </FooterLeft>
          <FooterCenter>
            <h3>SiteMap</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/posts">
                  <a>Posts</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contato</a>
                </Link>
              </li>
            </ul>
          </FooterCenter>

          <FooterRight>
            <h3>Contatos</h3>
            <Link href="https://www.linkedin.com/in/rodrigo-nahid/" passHref>
              <a target="_blank">
                <Image
                  src="/social-icons/linkedin.svg"
                  width="24"
                  height="24"
                  alt="linkedin"
                />
              </a>
            </Link>
            <Link href="https://www.instagram.com/rodrigonahid1/" passHref>
              <a target="_blank">
                <Image
                  src="/social-icons/instagram.svg"
                  width="24"
                  height="24"
                  alt="instagram"
                />
              </a>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCwvXKJT8-9ZPitA7p34K9MA"
              passHref
            >
              <a target="_blank">
                <Image
                  src="/social-icons/youtube.svg"
                  width="24"
                  height="24"
                  alt="youtube"
                />
              </a>
            </Link>
            <Link href="https://github.com/rodrigonahid" passHref>
              <a target="_blank">
                <Image
                  src="/social-icons/github.svg"
                  width="24"
                  height="24"
                  alt="github"
                />
              </a>
            </Link>
          </FooterRight>
        </FooterWrapper>
      </Container>
    </StyledFooter>
  );
}
