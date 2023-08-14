import styled from 'styled-components';

export const FooterSection = styled.section`
  background-color: ${p => p.theme.colors.main};
  display: flex;
  width: 100vw;

  @media (min-width: 320px) and (max-width: 767px) {
    height: 570px;
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 450px;
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    height: 320px;
  }

  @media (min-width: 1440px) {
    height: 320px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 320px) and (max-width: 767px) {
    height: 476px;
    flex-direction: column;
    padding-top: ${p => p.theme.space[8]};
    padding-bottom: ${p => p.theme.space[8]};
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 768px;

    padding-top: ${p => p.theme.space[8]};
    padding-left: ${p => p.theme.space[8]};
    padding-right: ${p => p.theme.space[8]};
    margin: 0 auto;
    justify-content: space-between;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 1024px;

    padding-top: ${p => p.theme.space[11]};
    padding-bottom: ${p => p.theme.space[11]};

    padding-left: ${p => p.theme.space[14]};
    padding-right: ${p => p.theme.space[14]};

    justify-content: space-between;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    width: 1440px;

    padding-top: ${p => p.theme.space[11]};
    padding-bottom: ${p => p.theme.space[11]};

    padding-left: ${p => p.theme.space[14]};
    padding-right: ${p => p.theme.space[15]};

    justify-content: space-between;
    margin: 0 auto;
  }
`;

//  + address
export const BoxAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

export const FooterLogo = styled.img`
  @media (min-width: 320px) and (max-width: 767px) {
    width: 202px;
    height: 152px;
    margin-bottom: ${p => p.theme.space[8]};
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 202px;
    height: 152px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 202px;
    height: 152px;
  }

  @media (min-width: 1440px) {
    width: 224px;
    height: 175px;
  }
`;

export const FooterAdress = styled.p`
  width: 220px;
  line-height: ${p => p.theme.lineHeights.min};
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  margin-bottom: 30px;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.ms};
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 245px;
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media (min-width: 1440px) {
    width: 350px;
    font-size: ${p => p.theme.fontSizes.s};
    margin-bottom: 0;
  }
`;

export const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterListContacts = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 767px) {
    justify-content: center;
    align-items: center;
    gap: 18px;
    margin-bottom: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    justify-content: center;
    align-items: center;
    gap: 18px;
    margin-bottom: 55px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 55px;
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

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.ms};
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const FooterListText = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 100px;
  justify-content: center;
  align-items: center;

  @media (min-width: 320px) and (max-width: 767px) {
    /* gap: 5px; */
    width: 300px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    /* gap: ${p => p.theme.space[10]}; */
    width: 300px;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    /* gap: ${p => p.theme.space[8]}; */
    width: 300px;
  }
  @media (min-width: 1440px) {
    gap: ${p => p.theme.space[10]};
    width: 400px;
  }
`;
export const FooterLink = styled.li`
  margin-right: 44px;
`;

export const FooterLinkText = styled.a`
  line-height: ${p => p.theme.lineHeights.min};
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};

  cursor: pointer;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.xs};
  }
  @media (min-width: 768px) and (max-width: 1439px) {
    font-size: ${p => p.theme.fontSizes.xs};
  }
  @media (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.ms};
  }

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const FooterPaymant = styled.li`
  width: 90px;
  display: flex;
`;

export const FooterPaymantBox = styled.div`
  width: 70px;
  height: 15px;
`;
