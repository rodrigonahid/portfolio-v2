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
          <Link href={router.asPath} locale="pt-BR">
            <a onClick={handleTranslateModal}>
              <Image
                src="/flags/Brazil.svg"
                width="16"
                height="12"
                alt="brazil"
              />
              <p>Português</p>
            </a>
          </Link>
        </Language>
        <Language>
          <Link href={router.asPath} locale="en">
            <a onClick={handleTranslateModal}>
              <Image src="/flags/USA.svg" width="16" height="12" alt="usa" />
              <p>English</p>
            </a>
          </Link>
        </Language>
      </TranslateModal>
    </TranslateWrapper>
  );
}
