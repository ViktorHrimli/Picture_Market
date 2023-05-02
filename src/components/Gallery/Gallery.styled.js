import styled from 'styled-components';
import { GlobalTitleText, GlobalSection } from 'styles/GlobalStyles.styled';

export const SectionGallery = styled(GlobalSection)`
  padding: 0px;
  overflow: hidden;

  margin-bottom: 0px;
  @media screen and (min-width: 320px) {
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1024px) {
    position: relative;

    overflow: hidden;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 200px;
    margin-bottom: 50px;

    overflow: hidden;
  }
`;

export const GallerySliderWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 380px;

  @media screen and (min-width: 768px) {
    height: 500px;
  }

  @media screen and (min-width: 1024px) {
    height: 700px;
  }

  @media screen and (min-width: 1440px) {
    height: 750px;
  }
`;

export const ConteierPaper = styled.div`
  width: 90vw;
  height: 350px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    height: 470px;
  }

  @media screen and (min-width: 1024px) {
    height: 620px;
  }

  @media screen and (min-width: 1024px) {
    height: 650px;
  }

  @media screen and (min-width: 1440px) {
    height: 700px;
  }

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 8px;
  }
`;

export const GalleryTitle = styled(GlobalTitleText)`
  font-size: 24px;
  line-height: 24px;
  font-weight: 400;

  margin-bottom: 32px;
  margin-right: auto;
  margin-left: auto;

  color: ${p => p.theme.colors.main};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.keks};
  }

  @media screen and (min-width: 1024px) {
    font-size: 48px;
    line-height: 58px;
  }
`;
