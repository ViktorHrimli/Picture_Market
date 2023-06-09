import styled from 'styled-components';
import { GlobalPostition, GlobalButton } from 'styles/GlobalStyles.styled';
import { GoX } from 'react-icons/go';
import { BsArrowClockwise } from 'react-icons/bs';

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
    margin-bottom: 150px;
  }
`;

export const BoxIcon = styled(GlobalButton)`
  width: 48px;
  height: 48px;
  background-color: ${p => p.theme.colors.accent};
  border-radius: 8px;
  cursor: pointer;
  & :hover {
    fill: ${p => p.theme.colors.accent};
  }
`;

export const Icon = styled(BsArrowClockwise)`
  width: 25px;
  height: 25px;
  fill: ${p => p.theme.colors.white};
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

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const BtnUse = styled(GlobalButton)`
  width: 240px;
`;
