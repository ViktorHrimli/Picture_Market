import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.backgroundWhite};
  background-image: url(https://res.cloudinary.com/djoprd9i4/image/upload/v1680452465/samples/picture_market/hero%D1%84_u5gxtw.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 360px;
    height: 606px;
    background-position: -16% 50%;
    padding-left: ${p => p.theme.space[3]};
    margin-bottom: 200px;
    z-index: -2;
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
  @media (min-width: 320px) and (max-width: 480px) {
    transform-origin: left top;
    transform: rotate(-90deg) translateY(-50%);
    position: absolute;
    left: 60px;
    bottom: 58px;
  }

  @media (min-width: 1440px) {
    position: absolute;
    left: 110px;
    bottom: 281px;
  }
`;

export const TextHeader = styled.h1`
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: ${p => p.theme.fontSizes.xl};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-family: ${p => p.theme.fonts.body};
    line-height: ${p => p.theme.lineHeights.ultra};
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xxxl};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-family: ${p => p.theme.fonts.body};
    line-height: ${p => p.theme.lineHeights.ultra};
  }
`;

export const TextSpanColor = styled.span`
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }

  @media (min-width: 1440px) {
    color: ${p => p.theme.colors.whitesmoke};
  }
`;

export const TextAfter = styled.span`
  @media (min-width: 320px) and (max-width: 480px) {
    color: ${p => p.theme.colors.accent};
    font-size: ${p => p.theme.fontSizes.xl};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-family: ${p => p.theme.fonts.body};
    line-height: ${p => p.theme.lineHeights.ultra};
  }
  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xxxl};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-family: ${p => p.theme.fonts.body};
    line-height: ${p => p.theme.lineHeights.ultra};
    color: ${p => p.theme.colors.accent};
  }
`;

export const TextAfterArt = styled.span`
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: ${p => p.theme.fontSizes.xl};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-family: ${p => p.theme.fonts.body};
    line-height: ${p => p.theme.lineHeights.ultra};
    color: ${p => p.theme.colors.whitesmoke};
    margin-left: ${p => p.theme.space[2]};
  }
  @media (min-width: 1440px) {
    margin-left: ${p => p.theme.space[4]};
    font-size: ${p => p.theme.fontSizes.xxxl};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-family: ${p => p.theme.fonts.body};
    line-height: ${p => p.theme.lineHeights.ultra};
  }
`;

export const Text = styled.p`
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-family: ${p => p.theme.fonts.body};
    line-height: ${p => p.theme.lineHeights.min};
    color: ${p => p.theme.colors.main};
    width: 148px; //???
    height: 55px;
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xl};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-family: ${p => p.theme.fonts.body};
    line-height: ${p => p.theme.lineHeights.min};
    color: ${p => p.theme.colors.main};
    width: 331px; //???
    height: 144px;
  }
`;
