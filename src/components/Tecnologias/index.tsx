import { TecnologiasItem } from "../TecnologiasItem";
import {
  ListagemTecnologias,
  TecnologiasTitle,
  TecnologiasWrapper,
} from "./styles";

const lista = [
  { image: "/typescript.svg", alt: "typescript" },
  { image: "/css.svg", alt: "css" },
  { image: "/react.svg", alt: "react" },
  { image: "/node.svg", alt: "node" },
  { image: "/aws.svg", alt: "aws" },
];

export function Tecnologias() {
  return (
    <TecnologiasWrapper>
      <TecnologiasTitle>Tecnologias preferidas</TecnologiasTitle>
      <ListagemTecnologias>
        {lista.map((item, index) => (
          <TecnologiasItem
            key={index}
            imageAlt={item.alt}
            imageSrc={item.image}
          />
        ))}
      </ListagemTecnologias>
    </TecnologiasWrapper>
  );
}
