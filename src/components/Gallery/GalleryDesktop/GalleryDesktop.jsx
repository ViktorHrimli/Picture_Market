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

// import ImgOne from 'components/Gallery/ImgGallery/gallery1.jpg';
// import ImgTwo from 'components/Gallery/ImgGallery/gallery2.jpg';
// import ImgThree from 'components/Gallery/ImgGallery/gallery3.jpg';
// import ImgFour from 'components/Gallery/ImgGallery/gallery4.jpg';
// import ImgFive from 'components/Gallery/ImgGallery/gallery5.jpg';

const images = [
  // ImgOne, ImgTwo, ImgThree, ImgFour, ImgFive, ImgOne,
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/pwaxxvjwcei307vrmlgc.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/kqadxz06vw94mbg5v4di.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381247/samples/picture_market/je6xpfzu25j78lzh4si1.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680881828/andrysha_special_jvnphu.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381245/samples/picture_market/sgeb4hruuzibctbpu1cb.jpg',
  'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381247/samples/picture_market/duenoy7svntgbtqwxljj.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
];

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
    setGalleryState(prev => prev.concat(images));
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
