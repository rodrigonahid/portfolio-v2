import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";

import {
  Language,
  Translate,
  TranslateModal,
  TranslateWrapper,
} from "./styles";
import Link from "next/link";

export function TranslateButton() {
  const router = useRouter();
  const [isTranslateModalOpen, setIsTranslateModalOpen] = useState(false);

  const handleTranslateModal = (event: React.SyntheticEvent) => {
    setIsTranslateModalOpen(!isTranslateModalOpen);
  };
  const handleChangeLanguage = (e: React.SyntheticEvent, lang: string) => {
    e.preventDefault();
    router.push(router.asPath, undefined, { locale: lang });
    setIsTranslateModalOpen(false);
  };

  return (
    <TranslateWrapper>
      <Translate onClick={handleTranslateModal} id="transale-button">
        <Image
          src="/translate.svg"
          width={20}
          height={20}
          alt="translate icon"
          id="transale-button-image"
        />
      </Translate>
      <TranslateModal isOpen={isTranslateModalOpen}>
        <Language>
          <a onClick={(e) => handleChangeLanguage(e, "pt-BR")}>
            <Image
              src="/flags/Brazil.svg"
              width="16"
              height="12"
              alt="brazil"
            />
            <p>Português</p>
          </a>
        </Language>
        <Language>
          <a onClick={(e) => handleChangeLanguage(e, "en")}>
            <Image src="/flags/USA.svg" width="16" height="12" alt="usa" />
            <p>English</p>
          </a>
        </Language>
      </TranslateModal>
    </TranslateWrapper>
  );
}
