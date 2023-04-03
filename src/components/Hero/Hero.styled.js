import styled from 'styled-components';

export const Section = styled.section`
  width: 360px;
  height: 606px;
  background-color: ${p => p.theme.colors.backgroundWhite};
  background-image: url(https://res.cloudinary.com/djoprd9i4/image/upload/v1680452465/samples/picture_market/hero%D1%84_u5gxtw.png);
  background-size: cover;
  background-position: -16% 50%;
  background-repeat: no-repeat;
  padding-left: ${p => p.theme.space[3]};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  z-index: -2;
  margin-bottom: 200px;
`;

export const TextBox = styled.div`
  transform-origin: left top;
  transform: rotate(-90deg) translateY(-50%);
  position: absolute;
  left: 60px;
  bottom: 58px;
`;

export const TextHeader = styled.h1`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.ultra};
`;

export const TextAfter = styled.span`
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.ultra};
`;

export const TextAfterArt = styled.span`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.ultra};
  color: ${p => p.theme.colors.whitesmoke};
  margin-left: ${p => p.theme.space[2]};
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.min};
  color: ${p => p.theme.colors.main};
  /* width: ${p => p.theme.space[12] + [10]} px; */
  width: 148px; //???
  height: 55px;
`;
