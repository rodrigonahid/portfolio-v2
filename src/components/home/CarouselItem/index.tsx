import Image from "next/image";

import { CarouselItemWrapper } from "./style";

interface CarouselItemProps {
  url: string;
  title: string;
  description: string;
}

export function CarouselItem({ url, title, description }: CarouselItemProps) {
  return (
    <CarouselItemWrapper>
      <div className="top">
        <Image src={url} width={55} height={55} alt="code icon" />
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </CarouselItemWrapper>
  );
}
