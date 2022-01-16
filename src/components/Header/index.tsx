import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { BurgerMenu } from "../BurgerMenu";
import { Container } from "../../styles/grid";
import { TranslateButton } from "../TranslateButton";

import {
  StyledHeader,
  HeaderWrapper,
  Logo,
  Nav,
  LogoWrapper,
  RightSide,
} from "./styles";

export function Header() {
  const router = useRouter();
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <LogoWrapper>
            <Logo>{"${rodrigo.nahid}"}</Logo>
          </LogoWrapper>

          <Nav>
            <Link href="/">
              <a className={router.pathname == "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/posts">
              <a className={router.pathname == "/posts" ? "active" : ""}>
                Posts
              </a>
            </Link>
            <Link href="/contact">
              <a className={router.pathname == "/contact" ? "active" : ""}>
                Contato
              </a>
            </Link>
          </Nav>

          <RightSide>
            <TranslateButton />
            <BurgerMenu />
          </RightSide>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
}
