import styled from 'styled-components';
import { GlobalSection, GlobalButton } from 'styles/GlobalStyles.styled';

export const DescriptionSection = styled(GlobalSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  @media (min-width: 769px) and (max-width: 1023px) {
    width: 769px;
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 1024px;
    margin: 0 auto;
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    margin: 0 auto;
    padding-left: 110px;
    padding-right: 110px;
  } ;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 300px;
    align-items: center;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    align-items: end;
  }
  @media (min-width: 769px) and (max-width: 1023px) {
    align-items: end;
    width: 100%;
    margin-bottom: 144px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    align-items: end;
    width: 100%;
    margin-bottom: 144px;
  }

  @media (min-width: 1440px) {
    align-items: end;
    width: 100%;
    margin-bottom: 244px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) and (max-width: 1023px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    margin-top: 80px;
  }
  @media (min-width: 1440px) {
  }
`;

export const Text = styled.p`
  display: block;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.normal};
  text-transform: uppercase;
  color: ${p => p.theme.colors.main};

  @media (min-width: 320px) and (max-width: 360px) {
    font-size: ${p => p.theme.fontSizes.f};
    width: 293px;
    margin-bottom: 24px;
  }
  @media (min-width: 361px) and (max-width: 768px) {
    font-size: ${p => p.theme.fontSizes.f};
    margin-bottom: 24px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xxl};
  }
`;

export const TextColor = styled.span`
  color: ${p => p.theme.colors.accent};
`;

export const DescriptionBtn = styled(GlobalButton)`
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 360px) {
    width: 301px;
    height: 49px;
    font-size: ${p => p.theme.fontSizes.s};
  }
  @media (min-width: 361px) and (max-width: 768px) {
    width: 301px;
    height: 49px;
    font-size: ${p => p.theme.fontSizes.s};
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 301px;
    height: 49px;
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media (min-width: 1440px) {
    width: 334px;
    height: 61px;
    font-size: ${p => p.theme.fontSizes.m};
    margin-left: 950px;
  }
`;
