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

const images = [];

const GalleryDesktop = () => {
  const [count, setCount] = useState(0);
  const [galleryState, setGalleryState] = useState(images);

  useEffect(() => {
    const timeOut = () => {
      setInterval(() => {
        setCount(prev => prev + 1);
      }, 4000);
    };
    timeOut();

    return () => {};
  }, []);

  if (count >= images.length - 3) {
    setCount(0);
    setGalleryState(prev => [...prev, ...images]);
  }

  return (
    <Wrapper>
      <GalleryTitleDesktop>
        Enjoy our <br /> <span>Gallerry</span>
      </GalleryTitleDesktop>
      {galleryState.map((item, id, arr) => {
        if (id === count) {
          return (
            <Conteiner key={item}>
              <ConteinerImgCenter key={1}>
                <img src={galleryState[count + 1]} alt="keks" />
              </ConteinerImgCenter>

              <ConteinerFakeCenterImg key={14}>
                <img src={galleryState[count]} alt="keks" />
              </ConteinerFakeCenterImg>

              <ConteinerImgRight key={2}>
                <ConteinerBackgroundGradient></ConteinerBackgroundGradient>
                <img src={galleryState[count + 2]} alt="keks" />
              </ConteinerImgRight>

              <ConteinerImgLeft key={3}>
                <ConteinerBackgroundGradient></ConteinerBackgroundGradient>

                <img src={galleryState[count + 3]} alt="keks" />
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
