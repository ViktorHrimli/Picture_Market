import { PreloadVideo } from 'components/Video/PreloadVideo';
import {
  Section,
  TextBox,
  TextHeader,
  TextSpanColor,
  TextAfter,
  TextAfterArt,
  TextMob,
  Text,
  VideoBox,
} from './Hero.styled';

const Hero = (props) => {
  return (
    
    <Section>
      <VideoBox>
        <PreloadVideo handleCloseVideo={props.handleCloseVideo} />
      </VideoBox>
      {!props.showVideo && <TextBox>
        <TextHeader>
          PERSONALIZ<TextSpanColor>ED</TextSpanColor>
        </TextHeader>
        <TextAfter>STRING</TextAfter>
        <TextAfterArt>ART</TextAfterArt>
      </TextBox>}
      {!props.showVideo && <div>
        <TextMob><span>Unique </span>
                <span>string art </span>
                <span>from your photo </span>
        </TextMob>
        <Text>Unique string art from your photo</Text>
      </div>}
    </Section>
);
};

export { Hero };
