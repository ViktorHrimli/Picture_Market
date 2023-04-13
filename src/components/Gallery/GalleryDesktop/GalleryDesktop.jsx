import {
  ConteinerImgCenter,
  ConteinerImgRight,
  Conteiner,
} from 'components/Gallery/GalleryDesktop/GalleryDesktop.styled';

const GalleryDesktop = () => {
  return (
    <Conteiner>
      <ConteinerImgCenter>
        <img />
      </ConteinerImgCenter>

      <ConteinerImgRight>
        <img />
      </ConteinerImgRight>

      <ConteinerImgRight>
        <img />
      </ConteinerImgRight>
    </Conteiner>
  );
};

export { GalleryDesktop };
