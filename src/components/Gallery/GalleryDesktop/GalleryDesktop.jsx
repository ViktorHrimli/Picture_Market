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

const images = [
    'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-468-pa-8138-04-mockup_hmlmm4.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-468-ak-8795-04-mockup_eus3qt.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-438-td-2422-teddy-jing_wgonqj.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-438-pa-2615-pa-01_mjcuv3.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049747/String%20World/rm355-418-card-tong-room-mockup_2_etosdv.jpg',
    'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-468-pa-8138-04-mockup_hmlmm4.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-468-ak-8795-04-mockup_eus3qt.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-438-td-2422-teddy-jing_wgonqj.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-438-pa-2615-pa-01_mjcuv3.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049747/String%20World/rm355-418-card-tong-room-mockup_2_etosdv.jpg',
    'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-468-pa-8138-04-mockup_hmlmm4.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-468-ak-8795-04-mockup_eus3qt.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-438-td-2422-teddy-jing_wgonqj.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-438-pa-2615-pa-01_mjcuv3.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049747/String%20World/rm355-418-card-tong-room-mockup_2_etosdv.jpg',
    'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-468-pa-8138-04-mockup_hmlmm4.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-468-ak-8795-04-mockup_eus3qt.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-438-td-2422-teddy-jing_wgonqj.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049748/String%20World/p-438-pa-2615-pa-01_mjcuv3.jpg',
  'https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049747/String%20World/rm355-418-card-tong-room-mockup_2_etosdv.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/pwaxxvjwcei307vrmlgc.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/kqadxz06vw94mbg5v4di.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381245/samples/picture_market/sgeb4hruuzibctbpu1cb.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381247/samples/picture_market/duenoy7svntgbtqwxljj.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/pwaxxvjwcei307vrmlgc.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/kqadxz06vw94mbg5v4di.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381245/samples/picture_market/sgeb4hruuzibctbpu1cb.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381247/samples/picture_market/duenoy7svntgbtqwxljj.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/pwaxxvjwcei307vrmlgc.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/kqadxz06vw94mbg5v4di.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381245/samples/picture_market/sgeb4hruuzibctbpu1cb.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381247/samples/picture_market/duenoy7svntgbtqwxljj.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/pwaxxvjwcei307vrmlgc.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/kqadxz06vw94mbg5v4di.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381248/samples/picture_market/yz2hyoladx5bbdciqbqr.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381245/samples/picture_market/sgeb4hruuzibctbpu1cb.jpg',
  // 'https://res.cloudinary.com/djoprd9i4/image/upload/v1680381247/samples/picture_market/duenoy7svntgbtqwxljj.jpg',
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
