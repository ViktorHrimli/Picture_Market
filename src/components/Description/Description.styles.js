import styled from 'styled-components';
import { GlobalSection, GlobalButton } from 'styles/GlobalStyles.styled';

export const DescriptionSection = styled(GlobalSection)``;

export const Text = styled.p`
  width: 293px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.f};
  line-height: ${p => p.theme.lineHeights.normal};
  text-transform: uppercase;
  color: ${p => p.theme.colors.main};
  margin-bottom: 24px;
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
    margin-left: 950px;
  }
`;
