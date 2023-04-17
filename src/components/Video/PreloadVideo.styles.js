import styled, { keyframes } from 'styled-components';
import ReactPlayer from 'react-player';

const shrinkBackgroundMobail = keyframes`
  from {
    width: 100%;
  }
  to {
    margin-top: 155px;
    width: 606px;
    margin-left: 55px;
    transform: scale(1.7); 
  }
`;

const shrinkBackgroundTablet = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 399px;
    height: 399px;
    margin-left: 250px;
  }
`;

const shrinkBackgroundLaptop = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 575px;
    height: 575px;
    margin-left: 320px;
  }
`;

const shrinkBackgroundLaptopMax = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 745px;
    height: 745px;
    margin-left: 335px;
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
