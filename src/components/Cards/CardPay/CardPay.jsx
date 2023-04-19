import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  CardForm,
  ConteinerImgBackground,
  CardTitle,
  CardText,
  FakeFormCard,
  DesktopAnimated,
  ArrowWay,
} from 'components/Cards/CardPay/CardPay.styled';

import { CardContextState } from 'components/CardConteiner/CardContextState';

const CardPay = () => {
  const isDesktopScreen = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const isVisible = useContext(CardContextState);

  return (
    <CardForm>
      {isDesktopScreen && (
        <DesktopAnimated isShow={isVisible}>Does</DesktopAnimated>
      )}

      {isDesktopScreen && <ArrowWay />}

      <ConteinerImgBackground>
        <CardTitle>Fill the form</CardTitle>
        <CardText>
          Please leave your contact details so that our assistant can get in
          touch with you to approve the layout before we start creating your
          string art portrait.
        </CardText>

        <FakeFormCard>
          <img
            src="https://res.cloudinary.com/djoprd9i4/image/upload/v1680644940/FakeForm_gcjw0v.png"
            alt="form"
            width={120}
            height={150}
          />
        </FakeFormCard>
      </ConteinerImgBackground>
    </CardForm>
  );
};

export { CardPay };
