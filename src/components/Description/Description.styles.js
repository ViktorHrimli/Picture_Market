import styled from 'styled-components';
import { GlobalSection, GlobalButton } from 'styles/GlobalStyles.styled';

export const DescriptionSection = styled(GlobalSection)`
  width: 360px;
`;

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
  /* width: 301px;
  height: 49px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  border-radius: 8px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.min};
  text-transform: uppercase; */
`;
