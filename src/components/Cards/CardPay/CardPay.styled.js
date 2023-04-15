import styled, { keyframes } from 'styled-components';
import { GlobalPostition, GlobalTitleText } from 'styles/GlobalStyles.styled';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

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

  width: 346px;
  height: 380px;

  background-image: url(https://res.cloudinary.com/djoprd9i4/image/upload/v1680381245/samples/picture_market/wentg8b2a0vro5funxje.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: ${p => p.theme.radii.normal};

  box-shadow: 0px 8px 20px rgba(41, 10, 39, 0.1);

  animation: ${slideInAnimation} 1s;
  animation-delay: 0;

  @media screen and (min-width: 768px) {
    width: 410px;
  }

  @media screen and (min-width: 1440px) {
    position: relative;
    width: 547px;
    animation: none;
  }
`;

export const ArrowWay = styled(MdOutlineKeyboardDoubleArrowRight)`
  position: absolute;

  top: 42%;
  right: -17%;

  width: 60px;
  height: 60px;

  color: ${p => p.theme.colors.main};
  &:is(:hover) {
    cursor: pointer;
    color: ${p => p.theme.colors.accent};
  }
`;

export const ConteinerImgBackground = styled(GlobalPostition)`
  justify-content: start;

  width: 100%;
  height: 100%;

  padding: 30px 22px 20px 22px;

  border-radius: ${p => p.theme.radii.normal};

  background: rgba(99, 71, 137, 0.8);

  @media screen and (min-width: 1440px) {
    position: relative;

    align-items: start;

    padding: 80px 53px 58px 48px;
  }
`;

export const CardTitle = styled(GlobalTitleText)`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.keks};

  text-align: center;
  text-transform: none;

  color: ${p => p.theme.colors.white};

  @media screen and (min-width: 1440px) {
    align-items: start;
    font-size: ${p => p.theme.fontSizes.l};
    line-height: ${p => p.theme.lineHeights.keks};
  }

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
`;

export const ConteinerInfoCard = styled(GlobalPostition)`
  flex-direction: row;

  margin-top: 32px;
  margin-bottom: 34px;

  gap: 28px;
`;

export const CardText = styled.p`
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.mines};

  color: ${p => p.theme.colors.white};

  @media screen and (min-width: 1440px) {
    width: 232px;
  }
`;

export const FakeFormCard = styled(GlobalPostition)`
  width: 120px;
  height: 150px;

  margin-left: auto;
  margin-top: auto;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;

    top: 66px;
    right: 20px;

    width: 190px;
    height: 226px;

    margin: 0;
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

  font-size: 135px;
  line-height: 162px;

  text-align: center;
  text-transform: uppercase;

  color: #f9fcfc;
  background: #003031;

  border: 3px solid #634789;
  border-radius: 8px;

  box-shadow: 68px 152px 67px rgba(83, 59, 121, 0.01),
    38px 85px 56px rgba(83, 59, 121, 0.05),
    17px 38px 42px rgba(83, 59, 121, 0.09), 4px 9px 23px rgba(83, 59, 121, 0.1),
    0px 0px 0px rgba(83, 59, 121, 0.1);

  z-index: 2;

  transition: opacity 1s ease-in 2s;

  opacity: ${({ isShow }) => (isShow ? 0 : 1)};
`;
