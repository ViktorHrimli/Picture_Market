import styled, { keyframes } from 'styled-components';
import ReactPlayer from 'react-player';

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
    width: 555px;
    height: 555px;
    margin-left: 290px;
    margin-top: 20px;
  }
`;

const shrinkBackgroundLaptopMax = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 665px;
    height: 665px;
    margin-left: 240px;
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
