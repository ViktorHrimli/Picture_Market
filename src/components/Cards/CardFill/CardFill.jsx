import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  CardForm,
  CardText,
  CardTitle,
  ConteinerInfoCard,
  FakeFormCard,
  DesktopAnimated,
  ArrowWay,
} from 'components/Cards/CardFill/CardFill.styled';

import { CardContextState } from 'components/CardConteiner/CardContextState';

import payment from 'assets/card_photo_card.png';

const CardFill = () => {
  const isDesktopScreen = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const isVisible = useContext(CardContextState);
  return (
    <CardForm>
      {isDesktopScreen && (
        <DesktopAnimated isShow={isVisible}>It</DesktopAnimated>
      )}

      {isDesktopScreen && <ArrowWay />}
      <CardTitle>Make payment</CardTitle>
      <ConteinerInfoCard>
        <CardText>
          Make a payment, and our assistant can contact you to approve the
          layout before we start creating your string art portrait.
        </CardText>
      </ConteinerInfoCard>
      <FakeFormCard>
        <img src={payment} alt="payment" />
      </FakeFormCard>
    </CardForm>
  );
};

export { CardFill };
