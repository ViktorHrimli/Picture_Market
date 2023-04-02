import styled from 'styled-components';

export const SectionAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  height: 530px;
`;

export const ConteinerImg = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  img {
    height: 100%;
  }
`;

export const TextImgConteiner = styled.div`
  /* padding-top: 140px; */
  position: absolute;

  top: 0;
  left: 0;

  width: inherit;
  height: 100%;

  background: linear-gradient(270deg, #634789 0%, rgba(99, 71, 137, 0) 100%);
`;

export const TextConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 140px;

  grid-gap: 40px;

  width: inherit;
`;

export const ParagraphConteiner = styled.div`
  margin-left: 80px;
`;

export const TitleAboutConteiner = styled.div`
  position: relative;
  rotate: 270deg;
`;

export const ParagraphAbout = styled.p`
  font-size: 16px;
  line-height: 19px;

  width: 167px;

  color: white;
`;

export const HederAboutText = styled.h2`
  position: absolute;

  top: 55px;
  left: -130px;

  width: 280px;

  font-size: 24px;
  line-height: 29px;

  text-transform: uppercase;
  text-align: center;

  color: white;
`;
