import { PreloadVideo } from 'components/Video/PreloadVideo';
import {
  Section,
  TextBox,
  TextHeader,
  TextSpanColor,
  TextAfter,
  TextAfterArt,
  Text,
  // BoxVideo,
} from './Hero.styled';

const Hero = (props) => {
  return (
    
    <Section>
        {/* <BoxVideo> */}
          <PreloadVideo handleCloseVideo={props.handleCloseVideo} />
        {/* </BoxVideo> */}
      {!props.showVideo && <TextBox>
        <TextHeader>
          PERSONALIZ<TextSpanColor>ED</TextSpanColor>
        </TextHeader>
        <TextAfter>STRING</TextAfter>
        <TextAfterArt>ART</TextAfterArt>
      </TextBox>}
      {!props.showVideo && <div>
        <Text>Unique string art pieces from your favourite photos</Text>
      </div>}
    </Section>
);
};

export { Hero };
