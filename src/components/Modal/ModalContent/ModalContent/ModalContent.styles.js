import styled from 'styled-components';
import { GlobalPostition } from 'styles/GlobalStyles.styled';
import { GoX } from 'react-icons/go';

export const Section = styled(GlobalPostition)`
  width: 583px;
  height: 422px;
  padding-top: 42px;
  padding-right: 70px;
  padding-left: 70px;
  padding-bottom: 72px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  color: #003031;
  margin-bottom: 40px;
  padding-right: 50px;
  padding-left: 50px;
`;

export const ModalClosed = styled.button`
  margin-left: auto;
  cursor: pointer;
  margin-bottom: 88px;
`;

export const Close = styled(GoX)`
  fill: ${p => p.theme.colors.main};
  font-size: ${p => p.theme.fontSizes.xl};
`;
