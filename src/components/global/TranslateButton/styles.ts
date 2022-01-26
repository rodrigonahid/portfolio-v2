import styled from "styled-components";

interface TranslateModalProps {
  isOpen: boolean;
}

export const TranslateWrapper = styled.div`
  position: relative;
`;

export const Translate = styled.button`
  background: var(--gray-500);
  width: 40px;
  height: 40px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--gray-800);
  border-radius: 4px;

  cursor: pointer;
  transition: 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const TranslateModal = styled.div<TranslateModalProps>`
  position: absolute;
  z-index: 20;
  right: 0;
  top: 48px;

  width: 150px;
  padding: 4px 18px;
  border-radius: 8px;
  border: 1px solid var(--gray-500);

  background: var(--gray-700);

  transition: transform 0.1s ease-out;
  height: auto;
  transform: scaleY(1);
  transform-origin: top;

  ${({ isOpen }) => !isOpen && "transform: scaleY(0);"}

  &::before {
    content: "";
    position: absolute;
    z-index: -1;

    top: -9px;
    left: 78%;
    right: 22%;
    transform: translate(-50%, -50%);

    width: 16px;
    height: 16px;

    background: var(--gray-700);
    border-top: 1px solid var(--gray-500);
    border-left: 1px solid var(--gray-500);

    transform: rotate(45deg);
  }

  // Styling Language Component
  margin: 12px 0;
`;

export const Language = styled.div`
  a {
    background: transparent;
    border: none;
    cursor: pointer;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 4px;
    width: 100%;

    &:hover {
      filter: brightness(0.8);
    }
  }

  padding: 8px 0;

  &:not(:last-child) {
    border-bottom: 1px solid var(--gray-500);
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 28px;
    /* or 200% */

    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: #58a6ff;
    margin-left: 8px;
  }
`;
