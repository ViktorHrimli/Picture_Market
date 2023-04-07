import styled, { keyframes } from 'styled-components';
import {
  GlobalPostition,
  GlobalTitleText,
  GlobalSection,
} from 'styles/GlobalStyles.styled';

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const SectionGallery = styled(GlobalSection)`
  overflow: scroll;
`;

export const GalleryTitle = styled(GlobalTitleText)`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;

  color: ${p => p.theme.colors.main};

  ::after {
    content: '';
    display: block;
    margin-top: 2px;
    width: 100%;
    border-bottom: 3px solid #634789;
  }
`;

export const GallerySliderWrapper = styled(GlobalPostition)`
  overflow: scroll;
  flex-direction: row;
  gap: 24px;
  padding: 0;

  width: 100%;
`;
