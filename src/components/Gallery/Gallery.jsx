import { useState } from 'react';

import {
  SectionGallery,
  GalleryTitle,
  GallerySliderWrapper,
  GalleryImgCenter,
  GalleryImgLeft,
  GalleryImgRight,
} from 'components/Gallery/Gallery.styled';

const images = [
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680727969/mobile_delivery_1_u300vh.png',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680881828/andrysha_special_jvnphu.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
];
const Gallery = () => {
  const [count, setCount] = useState(1);

  return (
    <SectionGallery>
      <GalleryTitle>Enjoy our Gallerry</GalleryTitle>
      <GallerySliderWrapper>
        <GalleryImgLeft>
          <img src={images[0]} alt="card" width={300} height={150} />
        </GalleryImgLeft>
        <GalleryImgCenter>
          <img src={images[1]} alt="card" width={150} height={280} />
        </GalleryImgCenter>{' '}
        <GalleryImgRight>
          <img src={images[2]} alt="card" width={300} height={150} />
        </GalleryImgRight>
      </GallerySliderWrapper>
    </SectionGallery>
  );
};

export { Gallery };
