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

  padding: 30px 20px;

  background-color: ${p => p.theme.colors.main};

  border-radius: ${p => p.theme.radii.normal};

  box-shadow: 0px 8px 20px rgba(41, 10, 39, 0.1);

  animation: ${slideInAnimation} 1s;
  animation-delay: 0;

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

  ::after {
    content: '';
    display: block;

    width: 100%;

    margin-top: 2px;
    margin-bottom: 32px;

    border-bottom: 3px solid #f9fcfc;

    @media screen and (min-width: 1440px) {
      margin-bottom: 40px;
      border-bottom: 3px solid ${p => p.theme.colors.accent};
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

  width: 156px;

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

  @media screen and (min-width: 1440px) {
    position: absolute;

    top: 50%;
    right: 50%;

    transform: translate(110%, -60%);

    width: 232px;
    height: 243px;
  }
`;
