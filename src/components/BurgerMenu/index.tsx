import { useState } from "react";
import { Logo } from "../Header/styles";
import { SidebarItem } from "../SidebarItem";
import { SidebarHeaderTop } from "../SidebarItem/styles";
import {
  BurgerLine,
  BurgerWrapper,
  Close,
  SidebarHeader,
  SidebarList,
  SidebarMenu,
} from "./style";

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (e: React.SyntheticEvent) => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <BurgerWrapper onClick={handleClose}>
        <BurgerLine></BurgerLine>
        <BurgerLine></BurgerLine>
        <BurgerLine></BurgerLine>
      </BurgerWrapper>
      <SidebarMenu state={isOpen}>
        <SidebarHeader>
          <SidebarHeaderTop>
            <Logo>{"${rodrigo.nahid}"}</Logo>
            <Close onClick={handleClose}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5119 0.504741C20.8612 -0.145999 19.81 -0.145999 19.1593 0.504741L11 8.64733L2.84073 0.488055C2.18999 -0.162685 1.13879 -0.162685 0.488055 0.488055C-0.162685 1.13879 -0.162685 2.18999 0.488055 2.84073L8.64733 11L0.488055 19.1593C-0.162685 19.81 -0.162685 20.8612 0.488055 21.5119C1.13879 22.1627 2.18999 22.1627 2.84073 21.5119L11 13.3527L19.1593 21.5119C19.81 22.1627 20.8612 22.1627 21.5119 21.5119C22.1627 20.8612 22.1627 19.81 21.5119 19.1593L13.3527 11L21.5119 2.84073C22.146 2.20667 22.146 1.13879 21.5119 0.504741Z"
                  fill="#F18F01"
                />
              </svg>
            </Close>
          </SidebarHeaderTop>
          <SidebarList>
            <SidebarItem name="Home" href="/" active onClick={handleClose} />
            <SidebarItem name="Posts" href="/posts" onClick={handleClose} />
            <SidebarItem name="Contato" href="/contact" onClick={handleClose} />
          </SidebarList>
        </SidebarHeader>
      </SidebarMenu>
    </>
  );
}
