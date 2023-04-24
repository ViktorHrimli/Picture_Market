import { useEffect, useState } from 'react';

import {
  ConteinerImgCenter,
  ConteinerImgRight,
  ConteinerImgLeft,
  Conteiner,
  GalleryTitleDesktop,
  Wrapper,
  ConteinerFakeCenterImg,
  ConteinerBackgroundGradient,
} from 'components/Gallery/GalleryDesktop/GalleryDesktop.styled';

import ImgOne from 'components/Gallery/ImgGallery/gallery1.jpg';
import ImgTwo from 'components/Gallery/ImgGallery/gallery2.jpg';
import ImgThree from 'components/Gallery/ImgGallery/gallery3.jpg';
import ImgFour from 'components/Gallery/ImgGallery/gallery4.jpg';
import ImgFive from 'components/Gallery/ImgGallery/gallery5.jpg';

const images = [ImgOne, ImgTwo, ImgThree, ImgFour, ImgFive];

const GalleryDesktop = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeOut = () => {
      setInterval(() => {
        setCount(prev => prev + 1);
      }, 4000);
    };
    timeOut();

    return () => {};
  }, []);

  if (count >= images.length) {
    setCount(0);
  }

  return (
    <Wrapper>
      <GalleryTitleDesktop>
        Enjoy our <br /> <span>Gallerry</span>
      </GalleryTitleDesktop>
      {images.map((item, id, arr) => {
        if (id === count) {
          return (
            <Conteiner key={item}>
              <ConteinerImgCenter key={1}>
                <img src={arr[count + 1]} alt="keks" />
              </ConteinerImgCenter>

              <ConteinerFakeCenterImg key={14}>
                <img src={images[count]} alt="keks" />
              </ConteinerFakeCenterImg>

              <ConteinerImgRight key={2}>
                <ConteinerBackgroundGradient></ConteinerBackgroundGradient>
                <img src={arr[count + 2]} alt="keks" />
              </ConteinerImgRight>

              <ConteinerImgLeft key={3}>
                <ConteinerBackgroundGradient></ConteinerBackgroundGradient>

                <img src={arr[count + 3]} alt="keks" />
              </ConteinerImgLeft>
            </Conteiner>
          );
        } else {
          return '';
        }
      })}
    </Wrapper>
  );
};

export { GalleryDesktop };
