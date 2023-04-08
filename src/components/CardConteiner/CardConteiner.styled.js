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
  padding: 0 30px;
  gap: 30px;
`;

export const ConteinerCard = styled(GlobalPostition)`
  gap: 34px;
`;

export const Slider = styled.div`
  width: 100%;
  transition: transform 0.5s ease-out cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: ${({ isChangeCard }) =>
    !isChangeCard ? 'translateX(0)' : 'translateX(100%)'};
`;

export const ButtonCard = styled(GlobalButton)``;

export const SectionCardTitle = styled(GlobalTitleText)``;

export const ArrowRight = styled(MdOutlineKeyboardDoubleArrowRight)`
  position: absolute;

  top: 47%;
  right: 5px;

  height: 24px;
  width: 24px;

  color: ${p => p.theme.colors.main};

  &:is(:hover) {
    cursor: pointer;
    color: ${p => p.theme.colors.accent};
  }
`;

export const ArrowLeft = styled(MdOutlineKeyboardDoubleArrowLeft)`
  position: absolute;

  top: 47%;
  left: 5px;

  height: 24px;
  width: 24px;

  color: ${p => p.theme.colors.main};

  &:is(:hover) {
    cursor: pointer;
    color: ${p => p.theme.colors.accent};
  }
`;
