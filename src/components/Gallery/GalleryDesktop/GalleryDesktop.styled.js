import styled, { keyframes } from 'styled-components';

import { GlobalTitleText } from 'styles/GlobalStyles.styled';

export const Wrapper = styled.div`
  position: relative;
`;

export const Conteiner = styled.div`
  position: relative;
  display: flex;
  align-items: end;

  width: 100vw;

  @media screen and (min-width: 768px) {
    position: relative;

    height: 420px;
    width: 768px;

    padding-left: 5%;
  }

  @media screen and (min-width: 1024px) {
    position: relative;

    padding-left: 7%;
    height: 470px;

    width: 1024px;
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    height: 650px;

    padding-left: 110px;
    width: 1440px;
  }
`;

const animatedCenterImg = keyframes`
0%{
  opacity: 0.3;
  transform: translate(100%, 0);
height: 60%;
width: 40%;

}

100%{
  opacity: 1;
  transform: translate(0%, 0%);
}
`;

export const ConteinerImgCenter = styled.div`
  object-fit: cover;

  background-color: black;
  border-radius: 8px;

  animation: ${animatedCenterImg} 3s;

  @media screen and (min-width: 768px) {
    width: 310px;
    height: 420px;

    margin-right: 15px;
  }

  @media screen and (min-width: 1024px) {
    width: 390px;
    height: 470px;

    margin-right: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    height: 590px;

    margin-right: 23px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
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

export const ConteinerFakeCenterImg = styled(ConteinerImgCenter)`
  position: absolute;

  animation: ${fakeCenterImgAnimation} 3s;

  background-color: white;

  opacity: 0;

  @media screen and (min-width: 768px) {
    top: 0px;
    left: 38px;
  }

  @media screen and (min-width: 1024px) {
    top: 0px;
    left: 72px;
  }

  @media screen and (min-width: 1440px) {
    top: 60px;
    left: 110px;
  }
`;

const animatedRightImg = keyframes`
0%{ 
  transform: translate(100%, 0);
  opacity: 0;
} 
100%{
transform: translate(0, 0);
  opacity: 1;
}

`;

export const ConteinerImgRight = styled.div`
  border-radius: 8px;

  background: linear-gradient(
    360deg,
    #634789 -4.78%,
    rgba(99, 71, 137, 0) 100%
  );

  @media screen and (min-width: 768px) {
    width: 250px;
    height: 320px;

    margin-left: 25px;
  }

  @media screen and (min-width: 1024px) {
    width: 310px;
    height: 320px;

    margin-left: 35px;
  }

  @media screen and (min-width: 1440px) {
    width: 430px;
    height: 440px;

    margin-left: 53px;
  }

  img {
    object-fit: cover;

    width: 100%;
    height: 100%;

    border-radius: 8px;
    animation: ${animatedRightImg} 3s;
  }
`;

const animatedLeftImg = keyframes`
0%{ 
  transform: translate(200%, -28%);
  opacity: 0;


} 
100%{
transform: translateX(104%, -28%);
  opacity: 1;
}

`;

export const ConteinerImgLeft = styled.div`
  border-radius: 8px;

  background: linear-gradient(
    360deg,
    #634789 -4.78%,
    rgba(99, 71, 137, 0) 100%
  );

  @media screen and (min-width: 768px) {
    position: absolute;

    top: 24%;
    left: 89%;

    width: 250px;
    height: 320px;
  }

  @media screen and (min-width: 1024px) {
    position: absolute;

    top: 32%;
    left: 86%;

    width: 310px;
    height: 320px;
  }

  @media screen and (min-width: 1440px) {
    top: 32%;
    left: 82%;

    width: 430px;
    height: 440px;
  }

  img {
    object-fit: cover;

    width: 100%;
    height: 100%;
    border-radius: 8px;

    animation: ${animatedLeftImg} 4s;
  }
`;

export const GalleryTitleDesktop = styled(GlobalTitleText)`
  position: absolute;

  color: #003031;

  span {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    top: 5%;
    left: 50%;
  }

  @media screen and (min-width: 1024px) {
    top: 8%;
    left: 50%;

    font-size: 36px;
    line-height: 42px;
  }

  @media screen and (min-width: 1440px) {
    top: 12%;
    left: 49%;

    font-size: 48px;
    line-height: 58px;
  }
`;
