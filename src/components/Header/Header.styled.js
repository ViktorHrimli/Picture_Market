import styled, { keyframes } from 'styled-components';
import { GlobalLayout, GlobalButton } from 'styles/GlobalStyles.styled';

const slideIn = keyframes`
  from {
    transform: translateY(-70%);
  }
  to {
    transform: translateY(0);
  }
`;

const shrinkBackgroundTablet = keyframes`
  from {
    transform: scale(10%); 
  }

  to {
    transform: scale(100%); 
  }
`;

export const HeaderConteiner = styled.header`
  width: 100vw;
  height: 0;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  @media (min-width: 1024px) and (max-width: 1439px) {
    top: -20px;
  }
`;

export const Section = styled(GlobalLayout)`
  display: flex;
  justify-content: space-between;
  animation: ${slideIn} 2s forwards;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 100vw;
    padding-top: 24px;
    padding-left: 36px;
    padding-right: 33px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
    padding-top: 34px;
    padding-left: 60px;
    padding-right: 60px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 1024px;
    padding-top: 38px;
    padding-left: 80px;
    padding-right: 80px;
    align-items: center;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-top: 58px;
    padding-left: 110px;
    padding-right: 110px;
    align-items: center;
    margin: 0 auto;
  }
`;

export const HeaderLogo = styled.img`
  @media (min-width: 320px) and (max-width: 1023px) {
    width: 100px;
    height: 74px;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 127px;
    height: 94px;
    display: block;
  }
  @media (min-width: 1440px) {
    width: 127px;
    height: 94px;
    display: block;
  }
`;

export const HeaderBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 320px) and (max-width: 1024px) {
    width: 13px;
    height: 50px;
    cursor: pointer;

    @media (min-width: 1024px) and (max-width: 1440px) {
      display: none;
    }

    @media (min-width: 1440px) {
      display: none;
    }
  }
`;

export const HeaderBtnLin = styled.span`
  @media (min-width: 320px) and (max-width: 1023px) {
    padding-top: 50px;
    border-left: ${p => p.theme.borders.big}${p => p.theme.colors.main};
    border-radius: ${p => p.theme.space[11]};
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ListLayout = styled.ul`
  @media (min-width: 320px) and (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    display: flex;
    gap: ${p => p.theme.space[13]};
    margin-right: 9px;
  }
  @media (min-width: 1440px) {
    display: flex;
    gap: ${p => p.theme.space[13]};
    margin-right: 9px;
  }
`;

export const LinkLayout = styled.a`
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    color: ${p => p.theme.colors.textColor};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.normal};
    font-weight: ${p => p.theme.fontWeights.medium};
  }

  @media (min-width: 1440px) {
    color: ${p => p.theme.colors.textColor};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.normal};
    font-weight: ${p => p.theme.fontWeights.medium};
  }
`;

export const LinkBorder = styled.span`
  @media (min-width: 320px) and (max-width: 1023px) {
    display: none;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 1024px;
    position: absolute;
    right: 77px;
    top: 99px;
    border-bottom: 3px solid;
    width: 68px;
    color: ${p => p.theme.colors.accent};
  }

  @media (min-width: 1440px) {
    position: absolute;
    right: 110px;
    top: 118px;
    border-bottom: 3px solid;
    width: 68px;
    color: ${p => p.theme.colors.accent};
  }
`;

export const BtnHeroBox = styled.div`
  position: absolute;

  @media (min-width: 320px) and (max-width: 767px) {
    top: 640px;
    left: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    top: 550px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 301px;
    height: 49px;
    font-size: ${p => p.theme.fontSizes.s};
    left: 80px;
    top: 600px;
  }

  @media (min-width: 1440px) {
    width: 334px;
    height: 61px;
    font-size: ${p => p.theme.fontSizes.m};
    margin-left: 950px;
    left: -840px;
    top: 820px;
  }
`;

export const BtnHero = styled(GlobalButton)`
  /* position: absolute; */
  cursor: pointer;
  z-index: 10;
  visibility: visible;
  animation: ${shrinkBackgroundTablet} 2s ease forwards;

  @media (min-width: 320px) and (max-width: 360px) {
    width: 301px;
    height: 49px;
    font-size: ${p => p.theme.fontSizes.s};
    top: 640px;
    left: 10px;
  }
  @media (min-width: 361px) and (max-width: 479px) {
    width: 301px;
    height: 49px;
    font-size: ${p => p.theme.fontSizes.s};
    left: 10px;
    top: 640px;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    top: 650px;
    left: 10px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    top: 550px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 301px;
    height: 49px;
    font-size: ${p => p.theme.fontSizes.s};
    left: 80px;
    top: 600px;
  }

  @media (min-width: 1440px) {
    width: 334px;
    height: 61px;
    font-size: ${p => p.theme.fontSizes.m};
    margin-left: 950px;
    left: -840px;
    top: 820px;
  }
`;
