import styled from 'styled-components';
import { GlobalPostition, GlobalButton } from 'styles/GlobalStyles.styled';
import { GoX } from 'react-icons/go';
import { BsArrowClockwise } from 'react-icons/bs';

import { CheckboxContainer } from '../FillTheForm/FillTheForm.styles';
export const Section = styled(GlobalPostition)`
  position: relative;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 312px;
    height: 498px;
    padding-top: 82px;
    padding-right: 23px;
    padding-left: 23px;
    padding-bottom: 40px;
  }

  @media (min-width: 768px) {
    width: 583px;
    padding-top: 82px;
    padding-right: 54px;
    padding-left: 54px;
    padding-bottom: 72px;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  color: #003031;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 21px;
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 34px;
  }
`;

export const ChooseImg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 252px;
    height: 184px;
    margin-bottom: 78px;
  }
  @media (min-width: 768px) {
    width: 350px;
    height: 250px;
    margin-bottom: 50px;
  }
`;

export const BoxIcon = styled(GlobalButton)`
  position: absolute;
  top: 116px;
  right: 33px;
  width: 44px;
  height: 43px;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  border: transparent;

  & :hover {
    fill: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    background-color: ${p => p.theme.colors.accent};
    position: absolute;
    top: 519px;
    left: 93px;
  }
`;

export const Icon = styled(BsArrowClockwise)`
  width: 40px;
  height: 40px;
  fill: ${p => p.theme.colors.accent};
  @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
    fill: #ffffff;
  }
`;

export const ModalClosed = styled.button`
  margin-left: auto;
  cursor: pointer;
  position: absolute;

  @media (min-width: 320px) and (max-width: 767px) {
    top: 18px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }
  @media (min-width: 768px) {
    top: 42px;
    right: 54px;
  }
`;

export const Close = styled(GoX)`
  fill: ${p => p.theme.colors.main};

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.l};
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const FormCheckBox = styled(CheckboxContainer)`
  margin-bottom: 15px;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const BtnUse = styled(GlobalButton)`
  width: 288px;
  height: 44px;
  font-size: 16px;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: none;
  background-color: rgb(99, 71, 137);
  color: rgb(255, 255, 255);
  --merchant-button-color: #634789;
`;
