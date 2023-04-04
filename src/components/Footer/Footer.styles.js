import styled from 'styled-components';

export const FooterSection = styled.section`
  width: 360px;
  height: 476px;
  background-color: ${p => p.theme.colors.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${p => p.theme.space[8]};
`;

export const FooterLogo = styled.img`
  width: 202px;
  height: 152px;
  margin-bottom: ${p => p.theme.space[8]};
`;

export const FooterListContacts = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 110px;
`;

export const FooterLinkContacts = styled.a`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.normal};
  color: ${p => p.theme.colors.white};
`;

export const FooterListText = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[9]};
`;

export const FooterLinkText = styled.a`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.min};
  color: ${p => p.theme.colors.accent};
`;
