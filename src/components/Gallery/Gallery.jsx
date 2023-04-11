import { useEffect, useState } from 'react';

import {
  SectionGallery,
  GalleryTitle,
  GallerySliderWrapper,
  GalleryImgCenter,
  GalleryImgRight,
} from 'components/Gallery/Gallery.styled';

const images = [
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680727969/mobile_delivery_1_u300vh.png',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680881828/andrysha_special_jvnphu.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680727969/mobile_delivery_1_u300vh.png',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680881828/andrysha_special_jvnphu.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680727969/mobile_delivery_1_u300vh.png',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680881828/andrysha_special_jvnphu.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
];
const Gallery = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeOut = () => {
      setInterval(() => {
        setCount(prev => prev + 1);
      }, 4000);
    };
    timeOut();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (count >= images.length) {
    setCount(0);
  }

  return (
    <SectionGallery>
      <GalleryTitle>Enjoy our Gallerry</GalleryTitle>
      <GallerySliderWrapper>
        {images.map((item, id, arr) => {
          if (id === count && count + 1 === id + 1) {
            return (
              <div key={id}>
                <GalleryImgCenter>
                  <img src={arr[count]} alt="card" width={150} height={280} />
                </GalleryImgCenter>
                <GalleryImgRight>
                  <img
                    src={arr[count + 1]}
                    alt="card"
                    width={300}
                    height={150}
                  />
                </GalleryImgRight>
              </div>
            );
          } else {
            return '';
          }
        })}
      </GallerySliderWrapper>
    </SectionGallery>
  );
};

export { Gallery };
