import styled from 'styled-components';
import { GlobalPostition } from 'styles/GlobalStyles.styled';
import { GoX } from 'react-icons/go';

export const Section = styled(GlobalPostition)`
  position: relative;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 312px;
    height: 498px;
    padding-top: 82px;
    padding-right: 23px;
    padding-left: 23px;
    padding-bottom: 40px;
  }

  @media (min-width: 1440px) {
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

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 21px;
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 34px;
  }
`;

export const ChooseImg = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    width: 252px;
    height: 184px;
    border: 1px solid red;
    margin-bottom: 78px;
  }
  @media (min-width: 1440px) {
    width: 350px;
    height: 250px;
    margin-bottom: 150px;
    border: 1px solid red;
  }
`;

export const ModalClosed = styled.button`
  margin-left: auto;
  cursor: pointer;
  position: absolute;

  @media (min-width: 320px) and (max-width: 480px) {
    top: 18px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }
  @media (min-width: 1440px) {
    top: 42px;
    right: 54px;
  }
`;

export const Close = styled(GoX)`
  fill: ${p => p.theme.colors.main};

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: ${p => p.theme.fontSizes.l};
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;
