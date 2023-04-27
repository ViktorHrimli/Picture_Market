import { useMediaQuery } from 'react-responsive';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

import {
  SectionGallery,
  GalleryTitle,
  GallerySliderWrapper,
  ConteierPaper,
} from 'components/Gallery/Gallery.styled';

import { GalleryDesktop } from 'components/Gallery/GalleryDesktop/GalleryDesktop';

const images = [
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/pwaxxvjwcei307vrmlgc.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/kqadxz06vw94mbg5v4di.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381245/samples/picture_market/sgeb4hruuzibctbpu1cb.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381247/samples/picture_market/duenoy7svntgbtqwxljj.jpg',
];
function Item({ item }) {
  return (
    <Paper
      sx={{
        boxShadow: 'none',
        border: 'none',
        background: 'transparent',
      }}
    >
      <ConteierPaper>
        <img src={item} alt="becouse error happend you read that text" />
      </ConteierPaper>
    </Paper>
  );
}

const Gallery = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const isMobile = useMediaQuery({
    query: '(min-width: 320px) and (max-width: 767px)',
  });

  return (
    <SectionGallery>
      {/* mobile */}
      {isMobile && (
        <>
          <GalleryTitle>Enjoy our Gallerry</GalleryTitle>
          <GallerySliderWrapper>
            <Carousel
              animation="slide"
              duration={1000}
              stopAutoPlayOnHover={true}
              swipe={true}
            >
              {images.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </GallerySliderWrapper>
        </>
      )}
      {/* mobile end */}

      {isDesktop && <GalleryDesktop />}
    </SectionGallery>
  );
};

export { Gallery };
