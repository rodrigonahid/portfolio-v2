import Image from "next/image";

import { CarouselItemWrapper } from "./style";

export function CarouselItem() {
  return (
    <CarouselItemWrapper>
      <Image src="/code.svg" width={55} height={55} alt="code icon" />
      <h4>Clean Code</h4>
      <p>
        Desenvolvimento de um código limpo, usando as melhores práticas de
        desenvolvimento do mercado
      </p>
    </CarouselItemWrapper>
  );
}
