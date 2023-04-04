import styled from 'styled-components';

export const DescriptionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 360px;
    height: 653px;
    display: flex;
    padding-top: 200px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    height: 731px;
    padding-top: 260px;
  }
`;

export const Text = styled.p`
  @media (min-width: 320px) and (max-width: 480px) {
    width: 293px;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.f};
    line-height: ${p => p.theme.lineHeights.normal};
    text-transform: uppercase;
    color: ${p => p.theme.colors.main};
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    width: 1285px;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.xxl};
    line-height: ${p => p.theme.lineHeights.normal};
    text-transform: uppercase;
    color: ${p => p.theme.colors.main};
  }
`;

export const TextColor = styled.span`
  @media (min-width: 320px) and (max-width: 480px) {
    color: ${p => p.theme.colors.accent};
  }
  @media (min-width: 1440px) {
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.xxl};
    line-height: ${p => p.theme.lineHeights.normal};
    color: ${p => p.theme.colors.accent};
    text-transform: uppercase;
  }
`;

export const DescriptionBtn = styled.button`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  border-radius: 8px;
  text-transform: uppercase;
  line-height: ${p => p.theme.lineHeights.min};

  @media (min-width: 320px) and (max-width: 480px) {
    width: 301px;
    height: 49px;
    font-size: ${p => p.theme.fontSizes.s};
    margin-bottom: 211px;
  }

  @media (min-width: 1440px) {
    width: 334px;
    height: 61px;
    font-size: ${p => p.theme.fontSizes.m};
    margin-left: 950px;
  }
`;
