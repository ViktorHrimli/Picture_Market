import { Player } from "./PreloadVideo.styles";


const VIDEO = 'https://res.cloudinary.com/djoprd9i4/video/upload/v1681488446/Untitled_sghyfq.mp4'

const PreloadVideo = (props) => {
  
  const mediaQuery = window.matchMedia('(min-width: 319px) and (max-width: 767px)');

  if (mediaQuery.matches) {
    return (
      <Player
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