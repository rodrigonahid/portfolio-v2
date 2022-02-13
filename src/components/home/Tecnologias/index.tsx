import { useTranslation } from "next-i18next";

import { TecnologiasItem } from "../TecnologiasItem";
import {
  ListagemTecnologiasDesktop,
  ListagemTecnologiasMobile,
  TecnologiasTitle,
  TecnologiasWrapper,
} from "./styles";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

const lista = [
  { image: "/typescript.svg", name: "TypeScript" },
  { image: "/css.svg", name: "CSS/SASS" },
  { image: "/react.svg", name: "React.js" },
  { image: "/node.svg", name: "Node.js" },
  { image: "/aws.svg", name: "AWS" },
  { image: "/linux.svg", name: "Linux" },
];

export function Tecnologias() {
  const { t } = useTranslation("tech");

  return (
    <TecnologiasWrapper>
      <TecnologiasTitle>{t("techs")}</TecnologiasTitle>
      {/* Desktop */}
      <ListagemTecnologiasDesktop>
        {lista.map((item, index) => (
          <li key={index}>
            <TecnologiasItem imageName={item.name} imageSrc={item.image} />
          </li>
        ))}
      </ListagemTecnologiasDesktop>
      {/* Mobile */}
      <ListagemTecnologiasMobile>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          freeMode={true}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {lista.map((item, index) => (
            <SwiperSlide key={index}>
              <TecnologiasItem imageName={item.name} imageSrc={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ListagemTecnologiasMobile>
    </TecnologiasWrapper>
  );
}
