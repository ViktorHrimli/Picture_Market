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
import photoSecond from 'components/Gallery/ImgGallery/gallery2.jpg';
import photoThird from 'components/Gallery/ImgGallery/gallery3.jpg';
import photoFourth from 'components/Gallery/ImgGallery/gallery4.jpg';
import photoFift from 'components/Gallery/ImgGallery/gallery5.jpg';

const images = [
  photoFift,
  photoFirst,
  photoFourth,
  photoSecond,
  photoThird,
  photoFift,
  photoFirst,
  photoFourth,
  photoSecond,
  photoThird,
  // 'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-468-pa-8138-04-mockup_hmlmm4.jpg',
  // 'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-468-ak-8795-04-mockup_eus3qt.jpg',
  // 'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-438-td-2422-teddy-jing_wgonqj.jpg',
  // 'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-438-pa-2615-pa-01_mjcuv3.jpg',
  // 'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049747/String%20World/rm355-418-card-tong-room-mockup_2_etosdv.jpg',
  // 'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-468-pa-8138-04-mockup_hmlmm4.jpg',
  // 'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-468-ak-8795-04-mockup_eus3qt.jpg',
  // 'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-438-td-2422-teddy-jing_wgonqj.jpg',
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
    query: '(min-width: 1024px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 1023px)',
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
              {isMobile &&
                images.map((item, i, arr) => <Item key={i} item={item} />)}
            </Carousel>
          </GallerySliderWrapper>
        </>
      )}

      {isDesktop && (
        <NewCarusel
          items={images}
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
