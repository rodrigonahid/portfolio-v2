import { BurgerLine, BurgerWrapper, SidebarMenu } from "./style";

export function BurgerMenu() {
  return (
    <>
      <BurgerWrapper>
        <BurgerLine></BurgerLine>
        <BurgerLine></BurgerLine>
        <BurgerLine></BurgerLine>
      </BurgerWrapper>
      <SidebarMenu></SidebarMenu>
    </>
  );
}
