import styled from 'styled-components';
import { GlobalLayout } from 'styles/GlobalStyles.styled';

export const HeaderConteiner = styled.header`
  background-color: ${p => p.theme.colors.backgroundWhite};
`;

export const Section = styled(GlobalLayout)`
  display: flex;
  justify-content: space-between;
  width: 100vw;

  @media (min-width: 320px) and (max-width: 768px) {
    justify-content: space-between;
    height: 143px;
    padding-top: 24px;
    padding-left: 36px;
    padding-right: 33px;
  }

  @media (min-width: 1440px) {
    width: 100vw;
    height: 219px;
    padding-top: 58px;
    padding-left: 110px;
    padding-right: 110px;
    padding-bottom: 67px;
    align-items: center;
    position: relative;
  }
`;

export const HeaderLogo = styled.img`
  @media (min-width: 320px) and (max-width: 768px) {
    width: 100px;
    height: 74px;
  }
  @media (min-width: 1440px) {
    width: 127px;
    height: 94px;
    display: block;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100px;
    height: 74px;
  }
`;

export const HeaderBtn = styled.button`
  @media (min-width: 320px) and (max-width: 768px) {
    width: 13px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    @media (min-width: 1440px) {
      display: none;
    }
  }
`;

export const HeaderBtnLin = styled.span`
  @media (min-width: 320px) and (max-width: 768px) {
    padding-top: 50px;
    border-left: ${p => p.theme.borders.big}${p => p.theme.colors.main};
    border-radius: ${p => p.theme.space[11]};
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const ListLayout = styled.ul`
  @media (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 1440px) {
    display: flex;
    gap: ${p => p.theme.space[13]};
    margin-right: 9px;
  }
`;

export const LinkLayout = styled.a`
  @media (min-width: 320px) and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 1440px) {
    color: ${p => p.theme.colors.textColor};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.normal};
    font-weight: ${p => p.theme.fontWeights.medium};
  }
`;

export const LinkBorder = styled.span`
  @media (min-width: 320px) and (max-width: 768px) {
    display: none;
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
