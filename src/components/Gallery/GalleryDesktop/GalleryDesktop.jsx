import { useEffect, useState } from 'react';

import {
  ConteinerImgCenter,
  ConteinerImgRight,
  ConteinerImgLeft,
  Conteiner,
  GalleryTitleDesktop,
} from 'components/Gallery/GalleryDesktop/GalleryDesktop.styled';

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

const GalleryDesktop = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const timeOut = () => {
  //     setInterval(() => {
  //       setCount(prev => prev + 1);
  //     }, 4000);
  //   };
  //   timeOut();
  // });

  if (count >= images.length) {
    setCount(0);
  }

  return (
    <>
      <GalleryTitleDesktop>
        Enjoy our <br /> <span>Gallerry</span>
      </GalleryTitleDesktop>
      {images.map((item, id, arr) => {
        if (id === count && count + 2 === id + 2) {
          return (
            <Conteiner key={item}>
              <ConteinerImgCenter key={1}>
                <img src={arr[id]} alt="keks" />
              </ConteinerImgCenter>

              <ConteinerImgRight key={2}>
                <img src={arr[id + 1]} alt="keks" />
              </ConteinerImgRight>

              <ConteinerImgLeft key={3}>
                <img src={arr[id + 2]} alt="keks" />
              </ConteinerImgLeft>
            </Conteiner>
          );
        } else {
          return '';
        }
      })}
    </>
  );
};

export { GalleryDesktop };
