import Image from "next/image";
import { ItemWrapper } from "./styles";

interface ITecnologiasItem {
  imageSrc: string;
  imageAlt: string;
}

export function TecnologiasItem({ imageSrc, imageAlt }: ITecnologiasItem) {
  return (
    <ItemWrapper>
      <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
      <h2>Teste</h2>
    </ItemWrapper>
  );
}
