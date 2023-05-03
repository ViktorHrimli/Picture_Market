import { useMediaQuery } from 'react-responsive';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

import {
  SectionGallery,
  GalleryTitle,
  GallerySliderWrapper,
  ConteierPaper,
} from 'components/Gallery/Gallery.styled';

import {
  CarouselItem,
  Carousel as NewCarusel,
} from 'components/Gallery/GalleryDesk/GalleryDesk';

import photoFirst from 'components/Gallery/ImgGallery/gallery1.jpg';
import photoSecond from 'components/Gallery/ImgGalleryDesk/gallery3.jpeg';
import photoThird from 'components/Gallery/ImgGalleryDesk/gallery2.jpeg';
import photoFourth from 'components/Gallery/ImgGallery/gallery14.jpeg';
import photoFift from 'components/Gallery/ImgGallery/gallery5.jpg';

// imagesTabDesk
import photoFirstDesk from 'components/Gallery/ImgGalleryDesk/gallery1.jpeg';
import photoSecondDesk from 'components/Gallery/ImgGalleryDesk/gallery2.jpeg';
import photoThirdDesk from 'components/Gallery/ImgGalleryDesk/gallery3.jpeg';
import photoFourthDesk from 'components/Gallery/ImgGalleryDesk/gallery4.jpg';
import photoFiftDesk from 'components/Gallery/ImgGalleryDesk/gallery5.jpeg';

const images = [photoFift, photoFirst, photoFourth, photoSecond, photoThird];

// imagesDesk

const imagesDesk = [
  photoFirstDesk,
  photoSecondDesk,
  photoThirdDesk,
  photoFourthDesk,
  photoFiftDesk,
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
  const isBigDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const isLaptop = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1023px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <SectionGallery>
      <GalleryTitle>Enjoy Gallery</GalleryTitle>
      {isMobile && (
        <>
          <GallerySliderWrapper>
            <Carousel
              animation="slide"
              duration={1000}
              stopAutoPlayOnHover={true}
              swipe={true}
              autoPlay={false}
              sx={{}}
            >
              {images.map((item, i, arr) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </GallerySliderWrapper>
        </>
      )}

      {isLaptop && (
        <GallerySliderWrapper>
          <Carousel
            animation="slide"
            duration={1000}
            stopAutoPlayOnHover={true}
            swipe={true}
            autoPlay={false}
            sx={{}}
          >
            {imagesDesk.map((item, i, arr) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </GallerySliderWrapper>
      )}

      {isDesktop && (
        <NewCarusel
          items={imagesDesk}
          isBigDesktop={isBigDesktop}
          renderItem={({ item, isSnapPoint }) => (
            <CarouselItem key={item} isSnapPoint={isSnapPoint}>
              <img
                src={item}
                width="400"
                height="600"
                alt="Placeholder"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </CarouselItem>
          )}
        />
      )}
    </SectionGallery>
  );
};

export { Gallery };
