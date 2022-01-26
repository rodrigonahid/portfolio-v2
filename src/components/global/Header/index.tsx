import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { BurgerMenu } from "../BurgerMenu";
import { Container } from "../../../styles/grid";
import { TranslateButton } from "../TranslateButton";

import {
  StyledHeader,
  HeaderWrapper,
  Logo,
  Nav,
  LogoWrapper,
  RightSide,
} from "./styles";
import { useEffect } from "react";

export function Header() {
  const router = useRouter();

  const { t } = useTranslation("header");

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <LogoWrapper>
            <Link href="/" passHref>
              <Logo>{"${rodrigo.nahid}"}</Logo>
            </Link>
          </LogoWrapper>

          <Nav>
            <Link href="/">
              <a className={router.pathname == "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/posts">
              <a className={router.pathname.includes("/posts") ? "active" : ""}>
                Posts
              </a>
            </Link>
            <Link href="/contact">
              <a className={router.pathname == "/contact" ? "active" : ""}>
                {t("contact")}
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
