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
  padding: 0px;
  overflow: hidden;
`;

export const GallerySliderWrapper = styled.div`
  position: relative;
`;

export const GalleryImg = styled.img`
  position: absolute;
  background: ${({ act }) => {
    return act
      ? 'linear-gradient(360deg, #634789 -4.78%, rgba(99, 71, 137, 0) 100%)'
      : 'none';
  }};

  border-radius: 8px;
`;

export const GalleryTitle = styled(GlobalTitleText)`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;

  margin-bottom: 32px;

  color: ${p => p.theme.colors.main};
`;
