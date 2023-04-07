import styled from 'styled-components';
import {
  GlobalPostition,
  GlobalText,
  GlobalTitleText,
  GlobalSection,
} from 'styles/GlobalStyles.styled';

export const SectionAbout = styled(GlobalSection)`
  height: 530px;
`;

export const ConteinerImg = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const TextImgConteiner = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: linear-gradient(270deg, #634789 0%, rgba(99, 71, 137, 0) 100%);
`;

export const TextConteiner = styled(GlobalPostition)`
  flex-direction: row;

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

export const ParagraphAbout = styled(GlobalText)`
  width: 167px;
`;

export const HederAboutText = styled(GlobalTitleText)`
  position: absolute;
  font-weight: 400;

  width: 280px;

  top: 55px;
  left: 50%;
  transform: translateX(-50%);

  text-align: center;

  color: ${p => p.theme.colors.backgroundWhite};
`;
