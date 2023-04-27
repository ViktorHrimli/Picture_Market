import { Player, Iphone } from "./PreloadVideo.styles";
import Video from 'components/Video/VideoIphone.mp4'

// 'https://res.cloudinary.com/djoprd9i4/video/upload/v1681488446/Untitled_sghyfq.mp4'
const VIDEO = Video;

const PreloadVideo = (props) => {

  const isiPhone = /iPhone/i.test(navigator.userAgent);
  const mediaQuery = window.matchMedia('(min-width: 319px) and (max-width: 767px)');
  console.log(isiPhone);

  if (isiPhone) {
    props.handleCloseVideo()
    return (
      <Iphone src="https://res.cloudinary.com/djoprd9i4/image/upload/v1680452465/samples/picture_market/hero%D1%84_u5gxtw.png" alt="picture"/>
    )
  };

  if (mediaQuery.matches) {
    return (
      <Player
        playsinline   // playning iphone
        autoPlay   // playning iphone
        preload='auto' // playning iphone
        url={VIDEO}
        muted={true}
        playing={true}
        onEnded={props.handleCloseVideo}
        loop={false}
        controls={false}
        width='100vw'
        />
    );
  } else {
    return (
    <Player
        url={VIDEO}
        muted={true}
        playing={true}
        onEnded={props.handleCloseVideo}
        loop={false}
        controls={false}
        width='70vw'
        height='70vh'
      />
    )
  }
};

export {PreloadVideo}