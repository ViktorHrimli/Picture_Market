import styled, { keyframes } from 'styled-components';
import { GlobalPostition, GlobalTitleText } from 'styles/GlobalStyles.styled';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

import cardBack from 'assets/card_photo_background.png';

const slideInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const CardForm = styled(GlobalPostition)`
  justify-content: flex-start;

  width: 100%;
  height: 380px;

  padding: 30px 20px;

  background-image: linear-gradient(
      90deg,
      #634789 0%,
      rgba(99, 71, 137, 0) 100%
    ),
    url(${cardBack});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: ${p => p.theme.radii.normal};

  box-shadow: 0px 8px 20px rgba(41, 10, 39, 0.1);

  animation: ${slideInAnimation} 1s;
  animation-delay: 0;

  @media screen and (max-width: 767px) {
    width: 300px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    position: relative;
  }

  @media screen and (min-width: 1440px) {
    position: relative;

    align-items: start;

    padding: 80px 53px 58px 48px;

    animation: none;
  }
`;

export const ArrowWay = styled(MdOutlineKeyboardDoubleArrowRight)`
  position: absolute;

  top: 42%;
  left: -17%;

  color: ${p => p.theme.colors.main};
  &:is(:hover) {
    cursor: pointer;
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    width: 0px;
    height: 0px;

    top: 109%;
    left: 43%;

    rotate: 90deg;
  }

  @media screen and (min-width: 1024px) {
    width: 40px;
    height: 40px;

    top: 42%;
    left: -15%;

    rotate: 0deg;
  }

  @media screen and (min-width: 1440px) {
    width: 60px;
    height: 60px;

    top: 42%;
    left: -17%;

    rotate: 0deg;
  }
`;

export const CardTitle = styled(GlobalTitleText)`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.keks};

  text-align: center;
  text-transform: none;

  color: ${p => p.theme.colors.white};

  ::after {
    content: '';
    display: block;

    width: 100%;

    margin-top: 2px;
    margin-bottom: 32px;

    border-bottom: 3px solid #f9fcfc;

    @media screen and (min-width: 1440px) {
      margin-bottom: 40px;
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.lineHeights.keks};

    margin: 0;
  }
`;

export const ConteinerInfoCard = styled(GlobalPostition)`
  width: 100%;
  align-items: flex-start;
`;

export const CardText = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.mines};
  font-weight: 400;

  width: 140px;

  text-align: start;

  color: ${p => p.theme.colors.white};

  @media screen and (min-width: 1440px) {
    width: 232px;
  }
`;

export const FakeFormCard = styled(GlobalPostition)`
  width: 170px;
  height: 160px;

  margin-left: auto;
  margin-top: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const DesktopAnimated = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  left: 0;
  top: 0;

  text-align: center;
  text-transform: uppercase;

  color: #003031;
  background: #f9fcfc;

  border: 3px solid #634789;
  border-radius: 8px;

  box-shadow: 68px 152px 67px rgba(83, 59, 121, 0.01),
    38px 85px 56px rgba(83, 59, 121, 0.05),
    17px 38px 42px rgba(83, 59, 121, 0.09), 4px 9px 23px rgba(83, 59, 121, 0.1),
    0px 0px 0px rgba(83, 59, 121, 0.1);

  z-index: 2;

  opacity: ${({ isShow }) => (isShow ? 0 : 1)};

  transition: opacity 1s ease-in 4s;

  @media screen and (min-width: 768px) {
    font-size: 70px;
    line-height: 100px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 100px;
    line-height: 124px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 134px;
    line-height: 162px;
  }
`;
