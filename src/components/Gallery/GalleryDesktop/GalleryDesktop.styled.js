import styled from 'styled-components';

import { GlobalPostition } from 'styles/GlobalStyles.styled';

export const Conteiner = styled.div`
  position: relative;

  height: 100%;
  max-width: 1440px;

  padding-left: 110px;
  overflow: hidden;
`;

export const ConteinerImgCenter = styled.div`
  position: absolute;
  width: 565px;
  height: 763px;

  margin-right: 23px;

  object-fit: cover;

  background-color: black;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

export const ConteinerImgRight = styled.div`
  position: absolute;
  width: 479px;
  height: 475px;

  margin-left: 53px;

  object-fit: cover;

  background-color: black;
  border-radius: 8px;

  background: linear-gradient(
    360deg,
    #634789 -4.78%,
    rgba(99, 71, 137, 0) 100%
  );

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;
