import styled, { keyframes } from 'styled-components';

import { GlobalTitleText } from 'styles/GlobalStyles.styled';

export const Conteiner = styled.div`
  position: relative;
  display: flex;
  align-items: end;

  height: 650px;
  width: 100vw;

  padding-left: 110px;
`;

const animatedCenterImg = keyframes`
0%{
  opacity: 0.3;
  transform: translate(100%, 0);
height: 450px;
width: 440px;

}

100%{
  opacity: 1;
  transform: translate(0%, 0%);
}
`;

export const ConteinerImgCenter = styled.div`
  width: 565px;
  height: 650px;

  margin-right: 23px;

  object-fit: cover;

  background-color: black;
  border-radius: 8px;

  animation: ${animatedCenterImg} 3s;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
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
  width: 440px;
  height: 450px;

  margin-left: 53px;

  object-fit: cover;

  background-color: black;
  border-radius: 8px;

  background: linear-gradient(
    360deg,
    #634789 -4.78%,
    rgba(99, 71, 137, 0) 100%
  );
  animation: ${animatedRightImg} 3s;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
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
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(104%, -28%);
  width: 440px;
  height: 450px;

  object-fit: cover;

  background-color: black;
  border-radius: 8px;

  background: linear-gradient(
    360deg,
    #634789 -4.78%,
    rgba(99, 71, 137, 0) 100%
  );

  animation: ${animatedLeftImg} 4s;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

export const GalleryTitleDesktop = styled(GlobalTitleText)`
  position: absolute;

  top: 12%;
  left: 49%;

  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
  text-transform: uppercase;

  color: #003031;

  span {
    color: ${p => p.theme.colors.accent};
  }
`;
