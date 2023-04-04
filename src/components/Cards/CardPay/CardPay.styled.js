import styled from 'styled-components';
import { GlobalPostition, GlobalTitleText } from 'styles/GlobalStyles.styled';

export const CardForm = styled(GlobalPostition)`
  justify-content: flex-start;

  width: 100%;
  height: 380px;

  background-image: url(https://res.cloudinary.com/djoprd9i4/image/upload/v1680381245/samples/picture_market/wentg8b2a0vro5funxje.png);

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  box-shadow: 0px 8px 20px rgba(41, 10, 39, 0.1);
`;

export const ConteinerImgBackground = styled(GlobalPostition)`
  justify-content: start;

  width: 100%;
  height: 100%;

  padding: 30px 22px 20px 22px;

  border-radius: 8px;

  background: rgba(99, 71, 137, 0.8);
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
  flex-direction: row;

  margin-top: 32px;
  margin-bottom: 34px;

  gap: 28px;
`;

export const CardText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #f9fcfc;
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
`;
