import styled from 'styled-components';
import {
  GlobalPostition,
  GlobalText,
  GlobalTitleText,
  GlobalSection,
} from 'styles/GlobalStyles.styled';

export const SectionAbout = styled(GlobalSection)`
  width: 100vw;
  position: relative;
  z-index: -5;

  @media (min-width: 320px) and (max-width: 479px) {
    background-image: url(https://res.cloudinary.com/djoprd9i4/image/upload/v1680452464/samples/picture_market/Rectangle_119-min_hnzudp.png);
    background-repeat: no-repeat;
    background-position: left;
    /* background-size: 100%; */
    /* background-size: cover; */
    height: 530px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    background-image: url(https://res.cloudinary.com/djoprd9i4/image/upload/v1680881828/andrysha_special_jvnphu.jpg);
    background-repeat: no-repeat;
    background-position: left;
    background-size: 100% 530px;
    height: 530px;
    background-size: cover;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
    background-image: url(https://res.cloudinary.com/djoprd9i4/image/upload/v1680881828/andrysha_special_jvnphu.jpg);
    background-repeat: no-repeat;
    background-position: left;
    background-size: 100% 530px;
    height: 440px;
    background-size: cover;
    margin-bottom: 178px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 1024px;
    height: 574px;
    background-image: url(https://res.cloudinary.com/djoprd9i4/image/upload/v1680881828/andrysha_special_jvnphu.jpg);
    background-repeat: no-repeat;
    background-position: left;
    background-size: 100% 574px;
    background-size: cover;
    margin: 0 auto;
    margin-bottom: 178px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    background-image: url(https://res.cloudinary.com/djoprd9i4/image/upload/v1680881828/andrysha_special_jvnphu.jpg);
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 100%;
    height: 881px;
    margin: 0 auto;
    margin-bottom: 340px;
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

  @media (min-width: 320px) and (max-width: 479px) {
    justify-content: space-between;
    margin-top: 140px;
    grid-gap: 40px;
    width: inherit;
    padding-left: 35px;
    padding-right: 43px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    margin-top: 210px;
    margin-left: auto;
    justify-content: end;
    padding-right: 32px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    margin-left: 490px;
  }
  @media (min-width: 1440px) {
    margin-left: 518px;
  }
`;

export const ParagraphConteiner = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    margin-left: 66px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 413px;
    margin-top: 154px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    margin-top: 186px;
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

  @media (min-width: 769px) and (max-width: 1023px) {
    /* rotate: 270deg; */
  }
`;

export const ParagraphAbout = styled(GlobalText)`
  width: 167px;

  @media (min-width: 480px) and (max-width: 767px) {
    width: 295px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 295px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 400px;
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 29px;
  }

  @media (min-width: 1440px) {
    width: 539px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const HederAboutText = styled(GlobalTitleText)`
  color: ${p => p.theme.colors.backgroundWhite};
  position: absolute;

  @media (min-width: 320px) and (max-width: 479px) {
    transform: translateX(-50%);
    text-align: center;

    font-weight: 400;
    width: 280px;
    top: 55px;
    left: 50%;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    transform: translateX(-51%);
    font-weight: 400;
    font-size: 28px;
    width: 306px;
    top: -198px;
    left: 152px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
    transform: translateX(-51%);
    font-size: 28px;
    width: 524px;
    top: -100px;
    left: 677px;
    margin: 0 auto;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 1024px;
    transform: translateX(-51%);
    font-size: 38px;
    width: 524px;
    top: -150px;
    left: 259px;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    transform: translateX(-51%);
    font-weight: 400;
    font-size: 48px;
    width: 524px;
    top: 20px;
    left: 345px;
    margin: 0 auto;
  }
`;
