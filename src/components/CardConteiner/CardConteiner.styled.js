import styled from 'styled-components';
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from 'react-icons/md';

import {
  GlobalPostition,
  GlobalSection,
  GlobalTitleText,
  GlobalButton,
} from 'styles/GlobalStyles.styled';

export const SectionCard = styled(GlobalSection)`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-right: auto;
  margin-left: auto;

  margin-top: 100px;

  gap: 30px;

  @media (min-width: 1440px) {
    gap: 0;

    max-width: 1440px;
  }
`;

export const ConteinerCard = styled(GlobalPostition)`
  position: relative;

  gap: 14px;

  @media screen and (min-width: 768px) {
    flex-direction: column;

    align-items: flex-start;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;

    align-items: flex-start;

    padding: 0 110px;
  }
`;

export const Slider = styled.div`
  width: 100%;
  /* transition: transform 0.5s ease-out cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: ${({ isChangeCard }) =>
    !isChangeCard ? 'translateX(0)' : 'translateX(100%)'}; */
`;

export const ButtonCard = styled(GlobalButton)`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    position: absolute;

    top: 53%;
    left: 30%;

    transform: translate(23%, 22%);
  }

  @media (min-width: 1440px) {
    position: absolute;

    top: 51%;
    left: 30%;

    transform: translate(50%, 50%);
  }
`;

export const SectionCardTitle = styled(GlobalTitleText)`
  /* margin-left: 10px; */
  margin-right: auto;

  width: 250px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    width: 420px;
    font-size: 48px;
    line-height: 58px;

    /* margin-bottom: 48px; */
  }

  @media (min-width: 1440px) {
    width: 585px;

    font-size: 48px;
    line-height: 58px;

    /* margin-bottom: 48px; */
  }
`;

export const ColorTitle = styled.span`
  color: ${p => p.theme.colors.accent};
`;

export const ArrowRight = styled(MdOutlineKeyboardDoubleArrowRight)`
  position: absolute;

  top: 55%;
  right: -8%;

  height: 24px;
  width: 24px;

  color: ${p => p.theme.colors.main};

  &:is(:hover) {
    cursor: pointer;
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (max-width: 360px) {
    top: 100%;
    right: 2px;
  }
`;

export const ArrowLeft = styled(MdOutlineKeyboardDoubleArrowLeft)`
  position: absolute;

  top: 55%;
  left: -8%;

  height: 24px;
  width: 24px;

  color: ${p => p.theme.colors.main};

  &:is(:hover) {
    cursor: pointer;
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (max-width: 360px) {
    top: 100%;
    left: 2px;
  }
`;
