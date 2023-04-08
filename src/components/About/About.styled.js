import styled from 'styled-components';
import {
  GlobalPostition,
  GlobalText,
  GlobalTitleText,
  GlobalSection,
} from 'styles/GlobalStyles.styled';

export const SectionAbout = styled(GlobalSection)`
  @media (min-width: 320px) and (max-width: 480px) {
    height: 530px;
  }

  @media (min-width: 1440px) {
    height: 881px;
  }
`;

export const ConteinerImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media (min-width: 320px) and (max-width: 480px) {
    background-image: url(https://res.cloudinary.com/djoprd9i4/image/upload/v1680452464/samples/picture_market/Rectangle_119-min_hnzudp.png);
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 100%;
  }
  @media (min-width: 1440px) {
    background-image: url(https://res.cloudinary.com/djoprd9i4/image/upload/v1680881828/andrysha_special_jvnphu.jpg);
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 100%;
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

  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 140px;
    grid-gap: 40px;
    width: inherit;
  }

  @media (min-width: 1440px) {
    margin-left: 518px;
  }
`;

export const ParagraphConteiner = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    margin-left: 80px;
  }
  @media (min-width: 1440px) {
    margin-left: 80px;
    margin-top: 460px;
  }
`;

export const TitleAboutConteiner = styled.div`
  position: relative;
  @media (min-width: 320px) and (max-width: 480px) {
    rotate: 270deg;
  }

  @media (min-width: 1440px) {
  }
`;

export const ParagraphAbout = styled(GlobalText)`
  width: 167px;

  @media (min-width: 1440px) {
    width: 539px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const HederAboutText = styled(GlobalTitleText)`
  position: absolute;
  color: ${p => p.theme.colors.backgroundWhite};

  @media (min-width: 320px) and (max-width: 480px) {
    transform: translateX(-50%);
    text-align: center;

    font-weight: 400;
    width: 280px;
    top: 55px;
    left: 50%;
  }

  @media (min-width: 1440px) {
    transform: translateX(-51%);

    font-weight: 400;
    font-size: 48px;
    width: 524px;
    top: 20px;
    left: 345px;
  }
`;
