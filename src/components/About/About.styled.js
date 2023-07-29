import styled from 'styled-components';
import {
  GlobalPostition,
  GlobalText,
  GlobalTitleText,
  GlobalSection,
} from 'styles/GlobalStyles.styled';

import girlMobileAbout from 'assets/about_girl_mob.png';

export const SectionAbout = styled(GlobalSection)`
  width: 100vw;
  position: relative;
  z-index: -5;

  @media (min-width: 320px) and (max-width: 479px) {
    background-image: url(${girlMobileAbout});
    background-repeat: no-repeat;
    /* background-position: left;
    background-size: cover; */
    height: 530px;
    margin-bottom: 100px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    background-image: url(https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049747/String%20World/Rectangle_113_1_ujttqg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 530px;
    height: 530px;
    background-size: cover;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    background-image: url(https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049747/String%20World/Rectangle_113_1_ujttqg.jpg);
    background-repeat: no-repeat;
    background-position: left;
    background-size: 100% 530px;
    height: 560px;
    background-size: cover;
    margin-bottom: 178px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    height: 681px;
    background-image: url(https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049747/String%20World/Rectangle_113_1_ujttqg.jpg);
    background-repeat: no-repeat;
    background-position: left;
    background-size: 100% 574px;
    background-size: cover;
    margin: 0 auto;
    margin-bottom: 100px;
  }

  @media (min-width: 1440px) {
    background-image: url(https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049747/String%20World/Rectangle_113_1_ujttqg.jpg);
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 100%;
    height: 881px;
    margin: 0 auto;
    margin-bottom: 150px;
  }
`;

export const TextImgConteiner = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: linear-gradient(270deg, #634789 23%, rgba(99, 71, 137, 0) 100%);
`;

export const TextConteiner = styled(GlobalPostition)`
  flex-direction: row;

  @media (min-width: 320px) and (max-width: 413px) {
    justify-content: space-between;
    margin-top: 140px;
    grid-gap: 40px;
    width: inherit;
    padding-left: 40px;
    padding-right: 43px;
  }
  @media (min-width: 414px) and (max-width: 479px) {
    justify-content: space-between;
    margin-top: 140px;
    grid-gap: 40px;
    width: inherit;
    padding-left: 40px;
    padding-right: 63px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    margin-top: 210px;
    margin-left: auto;
    justify-content: end;
    padding-right: 32px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 100%;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    margin-left: 400px;
    margin-top: 50px;
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
    margin-left: 350px;
    margin-top: 154px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    margin-top: 186px;
  }
  @media (min-width: 1440px) {
    margin-left: 38px;
    margin-top: 460px;
  }
`;

export const TitleAboutConteiner = styled.div`
  position: relative;

  @media (min-width: 320px) and (max-width: 479px) {
    /* rotate: 270deg; */
  }
  @media (min-width: 480px) and (max-width: 480px) {
    left: 64px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    /* rotate: 270deg; */
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    left: 30px;
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
    width: 402px;
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 29px;
  }

  @media (min-width: 1440px) {
    width: 529px;
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
    /* transform: translateX(-50%); */
    text-align: center;
    /* rotate: 270deg; */
    -webkit-transform: rotate(270deg);

    font-weight: 400;
    width: 310px;
    top: -15px;
    left: -87px;
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
    left: 610px;
    margin: 0 auto;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 1024px;
    transform: translateX(-51%);
    font-size: 38px;
    width: 524px;
    top: -150px;
    left: 230px;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    transform: translateX(-51%);
    font-weight: 400;
    font-size: 48px;
    width: 610px;
    top: 20px;
    left: 345px;
    margin: 0 auto;
  }
`;
