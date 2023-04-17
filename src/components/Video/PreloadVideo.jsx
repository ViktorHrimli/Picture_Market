import { Player } from "./PreloadVideo.styles";


const VIDEO = 'https://res.cloudinary.com/djoprd9i4/video/upload/v1681488446/Untitled_sghyfq.mp4'

const PreloadVideo = (props) => {
  return (
    <Player
      url={VIDEO}
      muted={true}
      playing={true}
      onEnded={props.handleCloseVideo}
      loop={false}
      controls={false}
      width='95vw'
      />
  );
};

export {PreloadVideo}