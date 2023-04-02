import styled from 'styled-components';

export const HeaderConteiner = styled.header`
  background-color: ${p => p.theme.colors.backgroundWhite};
`;

export const Section = styled.section`
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    width: 360px;
    height: 143px;
    padding-top: 24px;
    padding-left: 36px;
    padding-right: 33px;
  }
`;

export const HeaderLogo = styled.img`
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100px;
    height: 74px;
  }
`;

export const HeaderBtn = styled.button`
  @media (min-width: 320px) and (max-width: 480px) {
    width: 13px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
`;

export const HeaderBtnLin = styled.span`
  @media (min-width: 320px) and (max-width: 480px) {
    padding-top: 50px; //???
    border-left: ${p => p.theme.borders.big}${p => p.theme.colors.main};
    border-radius: ${p => p.theme.space[11]};
  }
`;
