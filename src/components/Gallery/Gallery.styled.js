import styled, { keyframes } from 'styled-components';
import { GlobalTitleText, GlobalSection } from 'styles/GlobalStyles.styled';

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const SectionGallery = styled(GlobalSection)`
  padding: 0px;
  overflow: hidden;
`;

export const GallerySliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 380px;
`;

export const GalleryImgRight = styled.div`
  position: absolute;

  bottom: 0px;
  right: 30px;

  width: 100%;
  height: 240px;

  background: linear-gradient(
    360deg,
    #634789 -4.78%,
    rgba(99, 71, 137, 0) 100%
  );

  border: 1px solid #000000;
  border-radius: 8px;

  transform: translateX(100%);

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;
export const GalleryImgCenter = styled.div`
  position: absolute;

  top: 0px;
  left: 50%;

  width: 220px;
  height: 380px;

  transform: translateX(-50%);

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;
export const GalleryImgLeft = styled.div`
  position: absolute;

  bottom: 0px;
  left: 30px;

  width: 280px;
  height: 240px;

  background: linear-gradient(
    360deg,
    #634789 -4.78%,
    rgba(99, 71, 137, 0) 100%
  );

  border: 1px solid #000000;
  border-radius: 8px;

  transform: translateX(-100%);

  img {
    width: 100%;
    height: 100%;
  }
`;

export const GalleryTitle = styled(GlobalTitleText)`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;

  margin-bottom: 32px;

  color: ${p => p.theme.colors.main};
`;
