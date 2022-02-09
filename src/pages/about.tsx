import Image from "next/image";
import { Footer } from "../components/global/Footer";
import { Header } from "../components/global/Header";
import {
  AboutWrapper,
  AboutContainer,
  ImageWrapper,
  ContentWrapper,
  DownloadButton,
  SocialIcons,
} from "../styles/about";
import { Container } from "../styles/grid";

export default function About() {
  return (
    <>
      <Header />
      <AboutWrapper>
        <AboutContainer>
          <ImageWrapper>
            <span className="img-wrapper">
              <Image
                src="https://avatars.githubusercontent.com/rodrigonahid"
                layout="fill"
                alt="profile picture"
              />
            </span>
          </ImageWrapper>
          <ContentWrapper>
            <div>
              <h1>Sobre mim</h1>
              <p>
                Pensando mais a longo prazo, o acompanhamento das preferências
                de consumo é uma das consequências dos índices pretendidos.
              </p>
            </div>

            <div className="button-wrapper">
              <DownloadButton href="/Curriculo.pdf" download="w3logo">
                <Image
                  src="/icons/download.svg"
                  alt="download"
                  height="18"
                  width="16"
                />

                <span>Baixar curriculo</span>
              </DownloadButton>
            </div>
          </ContentWrapper>
        </AboutContainer>
        <Container>
          <SocialIcons>
            <h3>Acompanhe meu trabalho no:</h3>
            <ul>
              <li>
                <Image
                  src="/social-icons/linkedin.svg"
                  height={40}
                  width={40}
                  alt="linkedin"
                />
              </li>
              <li>
                <Image
                  src="/social-icons/instagram.svg"
                  height={40}
                  width={40}
                  alt="instagram"
                />
              </li>
              <li>
                <Image
                  src="/social-icons/youtube.svg"
                  height={40}
                  width={40}
                  alt="youtube"
                />
              </li>
              <li>
                <Image
                  src="/social-icons/github.svg"
                  height={40}
                  width={40}
                  alt="github"
                />
              </li>
            </ul>
          </SocialIcons>
        </Container>
      </AboutWrapper>
      <Footer />
    </>
  );
}
