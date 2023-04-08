import styled from 'styled-components';
import { GoX } from 'react-icons/go';

import { GlobalPostition, GlobalButton } from 'styles/GlobalStyles.styled';

export const Section = styled(GlobalPostition)`
  width: 583px;
  padding-top: 42px;
  padding-right: 54px;
  padding-left: 54px;
  padding-bottom: 72px;
  background-color: ${p => p.theme.colors.accent};
  border-radius: 8px;
`;
export const TextBox = styled.div`
  width: 100%;
  margin-bottom: 116px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  text-align: start;
  color: ${p => p.theme.colors.background};
  margin-bottom: 30px;
  height: 232px;
`;

export const TextUp = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 34px;
  text-align: center;
  color: ${p => p.theme.colors.background};
  text-transform: uppercase;
`;

export const ModalClosed = styled.button`
  margin-left: auto;
  cursor: pointer;
  margin-bottom: 100px;
`;

export const Close = styled(GoX)`
  fill: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xl};
`;

export const Btn = styled(GlobalButton)`
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.white};
`;
