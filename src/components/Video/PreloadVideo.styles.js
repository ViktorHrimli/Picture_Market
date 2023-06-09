import styled, { keyframes } from 'styled-components';
import ReactPlayer from 'react-player';

const shrinkBackgroundMobailIphoneSE = keyframes`
  from {
    /* width: 100%; */
  }
  to {
    position: absolute;
    margin-top: -2%;
    margin-left: 26%;
    transform: scale(1.3); 
  }
`;

const shrinkBackgroundMobailIphoneXR = keyframes`
  from {
    /* width: 100%; */
  }
  to {
    position: absolute;
    margin-top: -5%;
    margin-left: 25.5%;
    transform: scale(1.3); 
  }
`;

const shrinkBackgroundMobailIphoneProMax = keyframes`
  from {
    /* width: 100%; */
    top: 0;
  }

  to {
    position: absolute;
    top: -25px;
    margin-left: 110px;
    padding-bottom: 80px; 
    transform: scale(1.3); 
  }
`;

const shrinkBackgroundMobAppleGorizontal = keyframes`
  from {
      width: 399px;
      height: 399px;
    }
  to {
    width: 399px;
    height: 399px;
    margin-left: 255px;
  }
`;

const shrinkBackgroundTabAppleGorizontal = keyframes`
  from {
      width: 399px;
      height: 399px;
    }
  to {
    width: 399px;
    height: 399px;
    margin-left: 255px;
  }
`;

const shrinkBackgroundMobail = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 606px;
    margin-left: 15px;
    transform: scale(1.5); 
  }
`;

const shrinkBackgroundTablet = keyframes`

  to {
    width: 399px;
    height: 399px;
    margin-left: 255px;
  }
`;

const shrinkBackgroundLaptop = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 459px;
    height: 459px;
    margin-left: 180px;
    margin-top: 20px;
  }
`;

const shrinkBackgroundLaptopMax = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 555px;
    height: 555px;
    margin-left: 140px;
  }
`;

export const Iphone = styled.img`
  @media (min-width: 320px) and (max-width: 389px) {
    animation: ${shrinkBackgroundMobailIphoneSE} 2s 0.5s ease forwards;
    /* position: absolute;
    top: -11%;
    margin-left: 12%;
    min-width: 499px;
    height: 499px; */
  }
  @media (min-width: 390px) and (max-width: 427px) {
    animation: ${shrinkBackgroundMobailIphoneXR} 2s 0.5s ease forwards;
    /* position: absolute;
    top: -8%;
    margin-left: 11.5%;
    min-width: 499px;
    height: 499px; */
  }
  @media (min-width: 428px) and (max-width: 767px) {
    animation: ${shrinkBackgroundMobailIphoneProMax} 2s 0.5s ease forwards;
    /* position: absolute;
    top: -12%;
    margin-left: 11.5%;
    min-width: 535px;
    height: 535px; */
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    animation: ${shrinkBackgroundMobAppleGorizontal} 2s 0.5s ease forwards;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    animation: ${shrinkBackgroundTabAppleGorizontal} 2s 0.5s ease forwards;
    width: 535px;
    height: 535px;
    margin-left: 270px;
    margin-top: 20px;
  }
`;

export const Player = styled(ReactPlayer)`
  @media (min-width: 320px) and (max-width: 767px) {
    animation: ${shrinkBackgroundMobail} 2s 3s ease forwards;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    animation: ${shrinkBackgroundTablet} 2s 3s ease forwards;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    animation: ${shrinkBackgroundLaptop} 2s 3s ease forwards;
  }
  @media (min-width: 1440px) {
    animation: ${shrinkBackgroundLaptopMax} 2s 3s ease forwards;
  }
`;
