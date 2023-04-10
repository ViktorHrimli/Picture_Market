import {
  CardForm,
  CardText,
  CardTitle,
  ConteinerDeskribe,
  ConteinerImgCard,
  ConteinerInfoCard,
  ImgDeskribe,
  TextDeskribe,
  ArrowIcons,
} from 'components/Cards/Card.styled';

import { useMediaQuery } from 'react-responsive';

const Card = () => {
  const isDesktopScreen = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  return (
    <CardForm>
      <CardTitle>Choose a photo</CardTitle>
      <ConteinerInfoCard>
        <CardText>
          Upload a clear portrait photo with visible faces for your
          one-of-a-kind art piece.
        </CardText>
        {isDesktopScreen && <ArrowIcons />}
        <ConteinerImgCard>
          <img
            src="https://res.cloudinary.com/djoprd9i4/image/upload/v1680381246/samples/picture_market/mpvfnv1glphomfqcwisd.jpg"
            alt="phot"
            width={80}
            height={80}
          />
        </ConteinerImgCard>
      </ConteinerInfoCard>
      <ConteinerDeskribe>
        <ImgDeskribe>
          <img
            src="https://res.cloudinary.com/djoprd9i4/image/upload/v1680553749/samples/picture_market/unsplash_52H5Nfi5WiE_dmsqyf.png"
            alt="mobile"
            width={100}
            height={100}
          />
        </ImgDeskribe>
        <TextDeskribe>
          <p>more information about format photo</p>
        </TextDeskribe>
      </ConteinerDeskribe>
    </CardForm>
  );
};

export { Card };
