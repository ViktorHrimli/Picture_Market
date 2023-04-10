import styled from 'styled-components';

export const FooterSection = styled.section`
  background-color: ${p => p.theme.colors.main};
  display: flex;
  align-items: center;
  width: 100vw;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 476px;
    flex-direction: column;
    padding-top: ${p => p.theme.space[8]};
  }

  @media (min-width: 1440px) {
    height: 300px;
    padding-top: ${p => p.theme.space[11]};
    padding-left: ${p => p.theme.space[14]};
    padding-right: ${p => p.theme.space[15]};
    justify-content: space-between;
  }
`;

export const FooterLogo = styled.img`
  @media (min-width: 320px) and (max-width: 480px) {
    width: 202px;
    height: 152px;
    margin-bottom: ${p => p.theme.space[8]};
  }

  @media (min-width: 1440px) {
    width: 224px;
    height: 175px;
  }
`;

export const FooterListContacts = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 480px) {
    justify-content: center;
    align-items: center;
    gap: 18px;
    margin-bottom: 110px;
  }

  @media (min-width: 1440px) {
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 55px;
  }
`;

export const FooterLinkContacts = styled.a`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.normal};
  color: ${p => p.theme.colors.white};

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.f};
  }
`;

export const FooterListText = styled.ul`
  display: flex;

  @media (min-width: 320px) and (max-width: 480px) {
    gap: ${p => p.theme.space[9]};
  }

  @media (min-width: 1440px) {
    gap: ${p => p.theme.space[10]};
  }
`;

export const FooterLinkText = styled.a`
  line-height: ${p => p.theme.lineHeights.min};
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: ${p => p.theme.fontSizes.xxs};
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.ms};
  }
`;
