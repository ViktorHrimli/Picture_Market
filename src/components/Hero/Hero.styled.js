import styled from 'styled-components';
import { GlobalLayout } from 'styles/GlobalStyles.styled';

export const Section = styled(GlobalLayout)`
  background-color: ${p => p.theme.colors.backgroundWhite};
  background-image: url(https://res.cloudinary.com/djoprd9i4/image/upload/v1680452465/samples/picture_market/hero%D1%84_u5gxtw.png);
  background-repeat: no-repeat;
  background-size: 606px 606px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 100vw;
    height: 606px;
    background-position: 43px top;
    padding-left: ${p => p.theme.space[3]};
    margin-bottom: 200px;
    z-index: -2;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin: 0 auto;
    width: 769px;
    height: 399px;
    background-position: 84% 50%;
    background-size: 399px 399px;
    padding-left: 60px;
    padding-right: 50px;
    margin-bottom: 152px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 1024px;
    margin: 0 auto;
    height: 574px;
    background-position: 84% 50%;
    background-size: 574px 574px;
    padding-left: 80px;
    padding-right: 80px;
    margin-bottom: 152px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    height: 745px;
    background-position: 73% 50%;
    background-size: 745px 745px;
    padding-left: 110px;
    padding-bottom: 100px;
    margin-bottom: 300px;
  }
`;

export const TextBox = styled.div`
  @media (min-width: 320px) and (max-width: 767px) {
    transform-origin: left top;
    transform: rotate(-90deg) translateY(-50%);
    position: absolute;
    left: 60px;
    bottom: 58px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    left: 60px;
    bottom: 120px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    position: absolute;
    left: 80px;
    bottom: 210px;
  }

  @media (min-width: 1440px) {
    position: absolute;
    left: 110px;
    bottom: 281px;
  }
`;

export const TextHeader = styled.h1`
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
    display: none;
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
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.main};
    width: 240px;
    height: 144px;
    position: absolute;
    top: 315px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: ${p => p.theme.fontSizes.xl};
    color: ${p => p.theme.colors.main};
    width: 331px;
    height: 144px;
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xl};
    color: ${p => p.theme.colors.main};
    width: 331px;
    height: 144px;
    position: absolute;
  }
`;
