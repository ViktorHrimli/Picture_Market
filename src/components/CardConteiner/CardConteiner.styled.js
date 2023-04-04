import styled, { keyframes } from 'styled-components';
import {
  GlobalPostition,
  GlobalSection,
  GlobalTitleText,
  GlobalButton,
} from 'styles/GlobalStyles.styled';

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const SectionCard = styled(GlobalSection)`
  padding: 0 30px;
  gap: 30px;
`;

export const ConteinerCard = styled(GlobalPostition)`
  gap: 34px;
`;

export const Slider = styled.div`
  width: 100%;
  animation: ${slideInAnimation} 0.5s ease-out;
  transition: transform 0.5s ease-out;
  transform: ${({ isChangeCard }) =>
    !isChangeCard ? 'translateX(0)' : 'translateX(100%)'};
`;

export const ButtonCard = styled(GlobalButton)``;

export const SectionCardTitle = styled(GlobalTitleText)``;
