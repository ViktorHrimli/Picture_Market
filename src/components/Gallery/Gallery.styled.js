import styled from 'styled-components';
import { GlobalTitleText, GlobalSection } from 'styles/GlobalStyles.styled';

export const SectionGallery = styled(GlobalSection)`
  padding: 0px;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    position: relative;

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

  @media screen and (min-width: 768px) {
    height: 650px;
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

  color: ${p => p.theme.colors.main};
`;
