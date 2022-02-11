import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { staticProps } from ".";
import { Footer } from "../components/global/Footer";
import { Header } from "../components/global/Header";
import { CustomWrapper } from "../styles/custom404";
import { Container } from "../styles/grid";

export default function Custom404() {
  const { t } = useTranslation("custom");
  return (
    <>
      <Header />
      <CustomWrapper>
        <Container>
          <div>
            <h1>{t("page-not-found")}</h1>
            <span className="img-wrapper">
              <Image src="/images/404.svg" layout="fill" alt="page not found" />
            </span>
          </div>
        </Container>
      </CustomWrapper>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }: staticProps) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["header", "footer", "custom"])),
    },
  };
}
