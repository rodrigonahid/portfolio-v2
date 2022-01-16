import Image from "next/image";
import React, { useState } from "react";

import {
  Language,
  Translate,
  TranslateModal,
  TranslateWrapper,
} from "./styles";

export function TranslateButton() {
  const [isTranslateModalOpen, setIsTranslateModalOpen] = useState(false);

  const handleTranslateModal = (event: React.SyntheticEvent) => {
    setIsTranslateModalOpen(!isTranslateModalOpen);
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
          <button onClick={handleTranslateModal}>
            <Image
              src="/flags/Brazil.svg"
              width="16"
              height="12"
              alt="brazil"
            />
            <p>Português</p>
          </button>
        </Language>
        <Language>
          <button onClick={handleTranslateModal}>
            <Image src="/flags/USA.svg" width="16" height="12" alt="usa" />
            <p>English</p>
          </button>
        </Language>
      </TranslateModal>
    </TranslateWrapper>
  );
}
