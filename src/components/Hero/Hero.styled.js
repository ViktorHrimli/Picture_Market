import styled, { keyframes } from 'styled-components';
import { GlobalLayout } from 'styles/GlobalStyles.styled';

const shrinkBackgroundTablet = keyframes`
  from {
    transform: scale(10%); 
  }

  to {
    transform: scale(100%); 
  }
`;

const slideIn = keyframes`
  from {
  transform: rotate(-90deg) translateY(-150%);
  }
  to {
    transform: rotate(-90deg) translateY(-50%);
  }
`;

const slideInText = keyframes`
  from {
  transform: translateX(-150%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Section = styled(GlobalLayout)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  z-index: -2;
  overflow: hidden;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 100vw;
    height: 800px;
    padding-left: ${p => p.theme.space[3]};
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 0 auto;
    width: 768px;
    height: 590px;
    padding: auto;
    align-items: center;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 1024px;
    margin: 0 auto;
    height: 730px;
    padding: auto;
    align-items: center;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    height: 1040px;
    padding: auto;
  }
`;

export const TextBox = styled.div`
  @media (min-width: 320px) and (max-width: 767px) {
    transform: rotate(-90deg) translateY(-50%);
    position: absolute;
    left: -30px;
    bottom: 435px;
    animation: ${slideIn} 2s ease forwards;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    left: 60px;
    bottom: 269px;
    animation: ${shrinkBackgroundTablet} 2s ease forwards;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    position: absolute;
    left: 80px;
    bottom: 330px;
    animation: ${shrinkBackgroundTablet} 2s ease forwards;
  }

  @media (min-width: 1440px) {
    position: absolute;
    left: 110px;
    bottom: 460px;
    animation: ${shrinkBackgroundTablet} 2s ease forwards;
  }
`;

export const TextHeader = styled.h1`
  z-index: 5;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.ultra};

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: ${p => p.theme.fontSizes.xxl};
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xxxl};
  }
`;

export const TextSpanColor = styled.span`
  @media (min-width: 320px) and (max-width: 767px) {
  }
  @media (min-width: 768px) {
    color: ${p => p.theme.colors.whitesmoke};
  }
`;

export const TextAfter = styled.span`
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.ultra};
  font-weight: ${p => p.theme.fontWeights.normal};

  @media (min-width: 320px) and (max-width: 767px) {
    color: ${p => p.theme.colors.accent};
    font-size: ${p => p.theme.fontSizes.xl};
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: ${p => p.theme.fontSizes.xl};
    color: ${p => p.theme.colors.accent};
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: ${p => p.theme.fontSizes.xxl};

    color: ${p => p.theme.colors.accent};
  }
  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xxxl};
    color: ${p => p.theme.colors.accent};
  }
`;

export const TextAfterArt = styled.span`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.ultra};

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.xl};

    color: ${p => p.theme.colors.whitesmoke};
    margin-left: ${p => p.theme.space[2]};
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: ${p => p.theme.space[4]};
    font-size: ${p => p.theme.fontSizes.xl};
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    margin-left: ${p => p.theme.space[4]};
    font-size: ${p => p.theme.fontSizes.xxl};
  }
  @media (min-width: 1440px) {
    margin-left: ${p => p.theme.space[4]};
    font-size: ${p => p.theme.fontSizes.xxxl};
  }
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.min};

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.main};
    width: 148px;
    height: 55px;
    position: absolute;
    bottom: 150px;
    left: 12px;
    animation: ${slideInText} 2s forwards;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.main};
    width: 240px;
    height: 144px;
    position: absolute;
    top: 360px;
    left: 62px;
    animation: ${shrinkBackgroundTablet} 2s ease forwards;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: ${p => p.theme.fontSizes.xl};
    color: ${p => p.theme.colors.main};
    width: 331px;
    height: 144px;
    position: absolute;
    bottom: 130px;
    left: 80px;
    animation: ${shrinkBackgroundTablet} 2s ease forwards;
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xl};
    color: ${p => p.theme.colors.main};
    width: 331px;
    height: 144px;
    position: absolute;
    bottom: 250px;
    left: 110px;
    animation: ${shrinkBackgroundTablet} 2s ease forwards;
  }
`;
