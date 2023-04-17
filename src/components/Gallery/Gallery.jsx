import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  SectionGallery,
  GalleryTitle,
  GallerySliderWrapper,
  GalleryImgCenter,
  GalleryImgRight,
} from 'components/Gallery/Gallery.styled';

import { GalleryDesktop } from 'components/Gallery/GalleryDesktop/GalleryDesktop';

const images = [
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/pwaxxvjwcei307vrmlgc.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/kqadxz06vw94mbg5v4di.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381247/samples/picture_market/je6xpfzu25j78lzh4si1.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680881828/andrysha_special_jvnphu.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381245/samples/picture_market/sgeb4hruuzibctbpu1cb.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381247/samples/picture_market/duenoy7svntgbtqwxljj.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
];
const Gallery = () => {
  const [count, setCount] = useState(0);

  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const isMobile = useMediaQuery({
    query: '(min-width: 320px) and (max-width: 767px)',
  });

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
      {/* mobile */}
      {isMobile && (
        <>
          <GalleryTitle>Enjoy our Gallerry</GalleryTitle>
          <GallerySliderWrapper>
            {images.map((item, id, arr) => {
              if (id === count && count + 1 === id + 1) {
                return (
                  <div key={id}>
                    <GalleryImgCenter>
                      <img
                        src={arr[count]}
                        alt="card"
                        width={150}
                        height={280}
                      />
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
        </>
      )}
      {/* mobile end */}

      {isDesktop && <GalleryDesktop />}
    </SectionGallery>
  );
};

export { Gallery };
