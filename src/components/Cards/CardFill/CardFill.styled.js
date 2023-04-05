import styled, { keyframes } from 'styled-components';
import { GlobalPostition, GlobalTitleText } from 'styles/GlobalStyles.styled';

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
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

  animation: ${slideInAnimation} 0.6s;
`;

export const CardTitle = styled(GlobalTitleText)`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;

  text-align: center;
  text-transform: none;

  color: #f9fcfc;

  ::after {
    content: '';
    display: block;

    width: 100%;

    margin-top: 2px;
    margin-bottom: 32px;

    border-bottom: 3px solid #f9fcfc;
  }
`;

export const ConteinerInfoCard = styled(GlobalPostition)`
  width: 100%;
  align-items: flex-start;
`;

export const CardText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  width: 156px;

  text-align: start;

  color: #f9fcfc;
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
