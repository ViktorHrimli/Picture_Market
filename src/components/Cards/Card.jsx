import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

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
  DesktopAnimated,
  ArrowWay,
} from 'components/Cards/Card.styled';

import { CardContextState } from 'components/CardConteiner/CardContextState';

import cardPhoto from 'assets/card_photo_mobile.png';
import cardPicture from 'assets/card_photo.png';

const Card = () => {
  const isDesktopScreen = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const isVisible = useContext(CardContextState);

  return (
    <CardForm>
      {isDesktopScreen && (
        <DesktopAnimated isShow={isVisible}>How</DesktopAnimated>
      )}
      <CardTitle>Choose a photo</CardTitle>
      <ConteinerInfoCard>
        <CardText>
          Upload a clear portrait photo with visible faces for your
          one-of-a-kind art piece.
        </CardText>
        {isDesktopScreen && <ArrowWay />}
        {isDesktopScreen && <ArrowIcons />}

        <ConteinerImgCard>
          <img src={cardPicture} alt="phot" width={80} height={80} />
        </ConteinerImgCard>
      </ConteinerInfoCard>
      <ConteinerDeskribe>
        <ImgDeskribe>
          <img src={cardPhoto} alt="mobile" width={100} height={100} />
        </ImgDeskribe>
        <TextDeskribe>
          <p>more information about format photo</p>
        </TextDeskribe>
      </ConteinerDeskribe>
    </CardForm>
  );
};

export { Card };
