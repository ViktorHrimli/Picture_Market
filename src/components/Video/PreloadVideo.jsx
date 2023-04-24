import { Player } from "./PreloadVideo.styles";
import Video from 'components/Video/Video.mp4'


const VIDEO = Video;

const PreloadVideo = (props) => {
  
  const mediaQuery = window.matchMedia('(min-width: 319px) and (max-width: 767px)');

  if (mediaQuery.matches) {
    return (
      <Player
        playsinline   // playning iphone
        autoPlay   // playning iphone
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