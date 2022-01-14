import Image from "next/image";

import { CarouselItemWrapper } from "./style";

export function CarouselItem() {
  return (
    <CarouselItemWrapper>
      <div className="top">
        <Image src="/code.svg" width={55} height={55} alt="code icon" />
        <h4>Clean Code</h4>
      </div>
      <p>
        Desenvolvimento de um código limpo, usando as melhores práticas de
        desenvolvimento do mercado
      </p>
    </CarouselItemWrapper>
  );
}
