import styled, { keyframes } from 'styled-components';
import { GlobalTitleText, GlobalSection } from 'styles/GlobalStyles.styled';

export const SectionGallery = styled(GlobalSection)`
  padding: 0px;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    position: relative;

    overflow: hidden;
  }
`;

export const GallerySliderWrapper = styled.div`
  position: relative;
  width: 100vw;
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
  right: -90%;

  width: 100%;
  height: 240px;

  transform: translateX(100% -50%);

  img {
    width: 100%;
    height: 100%;

    border-radius: 8px;
    object-fit: cover;

    animation: ${slideInAnimationRight} 4s;
  }

  @media screen and (min-width: 430px) {
    top: 37%;
    right: -80%;
  }

  @media screen and (min-width: 480px) {
    top: 37%;
    right: -68%;
  }
`;

const slideInAnimationCenter = keyframes`
  from {
    opacity: 0;
    width: 280px;
    height: 240px;
    transform: translate(10%, 50%);
  }
  
  to {
    transform: translate(-50%, -0%);
    opacity: 1;
   
  }
`;

export const GalleryImgCenter = styled.div`
  position: absolute;

  top: 30px;
  left: 50%;

  width: 220px;
  height: 350px;

  transform: translateX(-50%);

  animation: ${slideInAnimationCenter} 4s;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;

    object-fit: cover;
  }

  @media screen and (min-width: 480px) {
    left: 40%;
  }
`;

const fakeCenterImgAnimation = keyframes`
0%{
  opacity: 1
}

50% {
opacity: 0.5;
}

100%{
  opacity: 0;
}

`;

export const ConteinerFakeCenterImg = styled(GalleryImgCenter)`
  position: absolute;

  animation: ${fakeCenterImgAnimation} 3s;

  background-color: white;

  opacity: 0;
`;

const slideInAnimationLeft = keyframes`
  from {
    width: 220px;
    height: 380px;

    transform: translate(-100%);
    opacity: 0;
  }
  
  to {
    opacity: 1;
   
  }
`;

export const GalleryImgLeft = styled.div`
  position: absolute;

  top: 37%;
  left: -79%;

  width: 280px;
  height: 240px;

  transform: translateX(-100%, -50%);

  img {
    width: 100%;
    height: 100%;

    animation: ${slideInAnimationLeft} 4s;

    border-radius: 8px;
  }

  @media screen and (min-width: 360px) {
    top: 37%;
    left: -64%;
  }

  @media screen and (min-width: 480px) {
    top: 37%;
    left: -47%;
  }
`;

export const GalleryTitle = styled(GlobalTitleText)`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;

  margin-bottom: 32px;

  color: ${p => p.theme.colors.main};
`;

export const ConteinerBackgroundGradient = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;

  border-radius: 8px;

  background: linear-gradient(
    360deg,
    #634789 -4.78%,
    rgba(99, 71, 137, 0) 100%
  );

  z-index: 10;
`;
