import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  SectionGallery,
  GalleryTitle,
  GallerySliderWrapper,
  GalleryImgCenter,
  GalleryImgRight,
  GalleryImgLeft,
  ConteinerBackgroundGradient,
  ConteinerFakeCenterImg,
} from 'components/Gallery/Gallery.styled';

import { GalleryDesktop } from 'components/Gallery/GalleryDesktop/GalleryDesktop';

import ImgOne from 'components/Gallery/ImgGallery/gallery1.jpg';
import ImgTwo from 'components/Gallery/ImgGallery/gallery2.jpg';
import ImgThree from 'components/Gallery/ImgGallery/gallery3.jpg';
import ImgFour from 'components/Gallery/ImgGallery/gallery4.jpg';
import ImgFive from 'components/Gallery/ImgGallery/gallery5.jpg';

const images = [ImgOne, ImgTwo, ImgThree, ImgFour, ImgFive];
const Gallery = () => {
  const [count, setCount] = useState(1);
  const [galleryState, setGalleryState] = useState(images);

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
      }, 5000);
    };
    timeOut();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (count >= images.length - 2) {
    setCount(1);
    setGalleryState(prev => prev.concat(images));
  }

  return (
    <SectionGallery>
      {/* mobile */}
      {isMobile && (
        <>
          <GalleryTitle>Enjoy our Gallerry</GalleryTitle>
          <GallerySliderWrapper>
            {galleryState.map((item, id, arr) => {
              if (id === count && count + 1 === id + 1) {
                return (
                  <div key={id}>
                    <GalleryImgLeft>
                      <ConteinerBackgroundGradient></ConteinerBackgroundGradient>
                      <img
                        src={galleryState[count - 1]}
                        alt="card"
                        width={280}
                        height={240}
                      />
                    </GalleryImgLeft>
                    <ConteinerFakeCenterImg key={14}>
                      <img src={galleryState[count - 1]} alt="keks" />
                    </ConteinerFakeCenterImg>
                    <GalleryImgCenter>
                      <img
                        src={galleryState[count]}
                        alt="card"
                        width={220}
                        height={350}
                      />
                    </GalleryImgCenter>
                    <GalleryImgRight>
                      <ConteinerBackgroundGradient></ConteinerBackgroundGradient>
                      <img
                        src={galleryState[count + 1]}
                        alt="card"
                        width={280}
                        height={240}
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
