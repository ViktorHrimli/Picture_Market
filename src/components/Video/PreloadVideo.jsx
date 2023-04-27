import { Player, Iphone } from "./PreloadVideo.styles";
import Video from 'components/Video/Video/Video.mp4';
import Img from 'components/Video/Video/heroPhotoIphone.png'


const VIDEO = Video;
const IMG = Img;

const PreloadVideo = (props) => {

  const isiPhone = /iPhone/i.test(navigator.userAgent);
  const mediaQuery = window.matchMedia('(min-width: 319px) and (max-width: 767px)');
  console.log(isiPhone);

  if (isiPhone) {
    props.handleCloseVideo()
    return (
      <Iphone src={IMG} alt="picture"/>
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