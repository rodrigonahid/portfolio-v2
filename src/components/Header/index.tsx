import {
  StyledHeader,
  HeaderWrapper,
  Logo,
  Nav,
  Translate,
  LogoWrapper,
  RightSide,
} from "./styles";
import Link from "next/link";
import Image from "next/image";
import { BurgerMenu } from "../BurgerMenu";

export function Header() {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <LogoWrapper>
          <Logo>{"${rodrigo.nahid}"}</Logo>
        </LogoWrapper>

        <Nav>
          <Link href="#">
            <a className="active">Home</a>
          </Link>
          <Link href="#">
            <a>Posts</a>
          </Link>
          <Link href="#">
            <a>Contato</a>
          </Link>
        </Nav>

        <RightSide>
          <Translate>
            <Image
              src="/translate.svg"
              width={20}
              height={20}
              alt="translate icon"
            />
          </Translate>
          <BurgerMenu />
        </RightSide>
      </HeaderWrapper>
    </StyledHeader>
  );
}
