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

  padding: 30px 20px 30px 16px;

  background-color: ${p => p.theme.colors.main};

  border-radius: ${p => p.theme.radii.normal};

  box-shadow: 0px 8px 20px rgba(41, 10, 39, 0.1);

  animation: ${slideInAnimation} 1s;
  animation-delay: 0;
`;

export const CardTitle = styled(GlobalTitleText)`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;

  margin-right: 15px;

  text-transform: none;

  color: white;

  ::after {
    content: '';
    display: block;
    margin-top: 2px;
    width: 100%;
    border-bottom: 3px solid #634789;
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
  font-size: 15px;
  line-height: 18px;

  width: 156px;

  color: #f9fcfc;
`;

export const ConteinerImgCard = styled.div`
  width: 80px;
  height: 80px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const ConteinerDeskribe = styled(GlobalPostition)`
  position: relative;

  flex-direction: row;

  height: auto;
`;

export const TextDeskribe = styled.div`
  rotate: 270deg;

  width: 130px;

  margin-left: -235px;
  margin-top: 50px;

  p {
    position: relative;

    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: white;

    ::after {
      content: '';
      position: absolute;

      display: block;

      top: 3px;
      left: -10px;

      width: 5px;
      height: 5px;

      background-color: ${p => p.theme.colors.accent};
    }
  }
`;

export const ImgDeskribe = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-6%, -18%);

  width: 180px;
  height: 178px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
