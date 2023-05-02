import { Player, Iphone } from "./PreloadVideo.styles";
import Video from 'components/Video/Video/Video.mp4';
import Img from 'components/Video/Video/heroPhotoIphone.png'


const VIDEO = Video;
const IMG = Img;

const PreloadVideo = ({handleCloseVideo}) => {

  const isiPhone = /iPhone/i.test(navigator.userAgent);
  const mediaQuery = window.matchMedia('(min-width: 319px) and (max-width: 767px)');

  if (isiPhone) {
    handleCloseVideo()
    return (
      <Iphone src={IMG}
        alt="picture"
        width='555px'
        height='555px'
        preload='auto'
      />
    ) 
  } else if (mediaQuery.matches) {
    return (
      <Player
        playsinline   // playning iphone
        autoPlay   // playning iphone
        preload='auto' // playning iphone
        url={VIDEO}
        muted={true}
        playing={true}
        onEnded={handleCloseVideo}
        loop={false}
        controls={false}
        width='100vw'
        />
    );
  } else {
    return (
    <Player
        url={VIDEO}
        preload='auto'
        muted={true}
        playing={true}
        onEnded={handleCloseVideo}
        loop={false}
        controls={false}
        width='70vw'
        height='70vh'
      />
    )
  }
};

export {PreloadVideo}