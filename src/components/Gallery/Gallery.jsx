import { useState } from 'react';

import {
  SectionGallery,
  GalleryTitle,
  GallerySliderWrapper,
  GalleryImg,
} from 'components/Gallery/Gallery.styled';

const images = [
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680727969/mobile_delivery_1_u300vh.png',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680881828/andrysha_special_jvnphu.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
];
const Gallery = () => {
  const [isHorizontal, setIsHorizontal] = useState(false);

  const [count, setCount] = useState(1);

  return (
    <SectionGallery>
      <GalleryTitle>Enjoy our Gallerry</GalleryTitle>
      <GallerySliderWrapper>
        {images.map((item, id) => {
          if (id === count) {
            return <GalleryImg act={true} key={id} src={item} alt="men" />;
          } else {
            return <GalleryImg act={false} key={id} src={item} alt="men" />;
          }
        })}
      </GallerySliderWrapper>
    </SectionGallery>
  );
};

export { Gallery };
