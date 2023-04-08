import styled from 'styled-components';
import { GlobalPostition } from 'styles/GlobalStyles.styled';
import { GoX } from 'react-icons/go';

export const Section = styled(GlobalPostition)`
  width: 583px;
  padding-top: 42px;
  padding-right: 54px;
  padding-left: 54px;
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
`;

export const ChooseImg = styled.div`
  width: 350px;
  height: 250px;
  border: 1px solid red;
  margin-bottom: 150px;
`;

export const ModalClosed = styled.button`
  margin-left: auto;
  cursor: pointer;
`;

export const Close = styled(GoX)`
  fill: ${p => p.theme.colors.main};
  font-size: ${p => p.theme.fontSizes.xl};
`;
