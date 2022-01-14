import Image from "next/image";
import { ItemWrapper } from "./styles";

interface ITecnologiasItem {
  imageSrc: string;
  imageName: string;
}

export function TecnologiasItem({ imageSrc, imageName }: ITecnologiasItem) {
  return (
    <ItemWrapper>
      <Image src={imageSrc} alt={imageName} width={100} height={100} />
      <h3>{imageName}</h3>
    </ItemWrapper>
  );
}
