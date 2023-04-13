import styled, { keyframes } from 'styled-components';
import { GlobalTitleText, GlobalSection } from 'styles/GlobalStyles.styled';

export const SectionGallery = styled(GlobalSection)`
  padding: 0px;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    overflow-x: hidden;
  }
`;

export const GallerySliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 380px;

  overflow: hidden;
`;

const slideInAnimationRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const GalleryImgRight = styled.div`
  position: absolute;

  top: 37%;
  right: -78%;

  width: 100%;
  height: 240px;

  background: linear-gradient(
    360deg,
    #634789 -4.78%,
    rgba(99, 71, 137, 0) 100%
  );

  border: 1px solid #000000;
  border-radius: 8px;

  transform: translateX(100% -50%);

  animation: ${slideInAnimationRight} 2s;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;

    background: linear-gradient(
      360deg,
      #634789 -4.78%,
      rgba(99, 71, 137, 0) 100%
    );
  }
`;

const slideInAnimationCenter = keyframes`
  from {
    opacity: 0;
    transform: translate(63%, 22%);
  }
  
  to {
    transform: translate(-50%, -0%);
    opacity: 1;
   
  }
`;
export const GalleryImgCenter = styled.div`
  position: absolute;

  top: 0px;
  left: 37%;

  width: 220px;
  height: 380px;

  transform: translateX(-50%);

  animation: ${slideInAnimationCenter} 2s;

  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;

    object-fit: cover;
  }
`;

const slideInAnimationLeft = keyframes`
  from {
    
    opacity: 1;
  }
  
  to {
    opacity: 0;
   
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

  animation: ${slideInAnimationLeft} 1s;

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
