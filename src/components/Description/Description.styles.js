import styled from 'styled-components';
import { GlobalSection, GlobalButton } from 'styles/GlobalStyles.styled';

export const DescriptionSection = styled(GlobalSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const Box = styled.div`
  width: 1220px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  display: block;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.normal};
  text-transform: uppercase;
  color: ${p => p.theme.colors.main};

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: ${p => p.theme.fontSizes.f};
    width: 293px;
    margin-bottom: 24px;
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

  @media (min-width: 320px) and (max-width: 480px) {
    width: 301px;
    height: 49px;
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media (min-width: 1440px) {
    width: 334px;
    height: 61px;
    font-size: ${p => p.theme.fontSizes.m};
    margin-left: 880px;
  }
`;
