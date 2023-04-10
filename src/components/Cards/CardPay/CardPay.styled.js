import styled, { keyframes } from 'styled-components';
import { GlobalPostition, GlobalTitleText } from 'styles/GlobalStyles.styled';

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

  background-image: url(https://res.cloudinary.com/djoprd9i4/image/upload/v1680381245/samples/picture_market/wentg8b2a0vro5funxje.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: ${p => p.theme.radii.normal};

  box-shadow: 0px 8px 20px rgba(41, 10, 39, 0.1);

  animation: ${slideInAnimation} 1s;
  animation-delay: 0;

  @media screen and (min-width: 1440px) {
    width: 547px;
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
