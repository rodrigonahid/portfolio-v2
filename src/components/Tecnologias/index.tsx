import { TecnologiasItem } from "../TecnologiasItem";
import {
  ListagemTecnologias,
  TecnologiasTitle,
  TecnologiasWrapper,
} from "./styles";

const lista = [
  { image: "/typescript.svg", name: "TypeScript" },
  { image: "/css.svg", name: "CSS/SASS" },
  { image: "/react.svg", name: "React.js" },
  { image: "/node.svg", name: "Node.js" },
  { image: "/aws.svg", name: "AWS" },
  { image: "/linux.svg", name: "Linux" },
];

export function Tecnologias() {
  return (
    <TecnologiasWrapper>
      <TecnologiasTitle>Tecnologias preferidas</TecnologiasTitle>
      <ListagemTecnologias>
        {lista.map((item, index) => (
          <TecnologiasItem
            key={index}
            imageName={item.name}
            imageSrc={item.image}
          />
        ))}
      </ListagemTecnologias>
    </TecnologiasWrapper>
  );
}
