import {
  ConteinerImgCenter,
  ConteinerImgRight,
  ConteinerImgLeft,
  Conteiner,
  GalleryTitleDesktop,
} from 'components/Gallery/GalleryDesktop/GalleryDesktop.styled';

const GalleryDesktop = () => {
  return (
    <Conteiner>
      <GalleryTitleDesktop>
        Enjoy our <br /> <span>Gallerry</span>
      </GalleryTitleDesktop>
      <ConteinerImgCenter>
        <img />
      </ConteinerImgCenter>

      <ConteinerImgRight>
        <img />
      </ConteinerImgRight>

      <ConteinerImgLeft>
        <img />
      </ConteinerImgLeft>
    </Conteiner>
  );
};

export { GalleryDesktop };
