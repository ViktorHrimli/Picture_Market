import { Player } from "./PreloadVideo.styles";
import Video from 'components/Video/VideoIphone.mp4'

// 'https://res.cloudinary.com/djoprd9i4/video/upload/v1681488446/Untitled_sghyfq.mp4'
const VIDEO = Video;

const PreloadVideo = (props) => {

  const isiPhone = /iPhone/i.test(navigator.userAgent);
  const mediaQuery = window.matchMedia('(min-width: 319px) and (max-width: 767px)');

  if (isiPhone) {
    return props.handleCloseVideo()
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