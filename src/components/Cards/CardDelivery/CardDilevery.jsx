import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  CardForm,
  CardText,
  CardTitle,
  ConteinerInfoCard,
  DesktopAnimated,
  ArrowWay,
} from 'components/Cards/CardDelivery/CardDelivery.styled';

import { CardContextState } from 'components/CardConteiner/CardContextState';

const CardDilevery = () => {
  const isDesktopScreen = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const isVisible = useContext(CardContextState);
  return (
    <CardForm>
      {isDesktopScreen && (
        <DesktopAnimated isShow={isVisible}>Work?</DesktopAnimated>
      )}

      {isDesktopScreen && <ArrowWay />}

      <CardTitle>Wait for delivery</CardTitle>
      <ConteinerInfoCard>
        <CardText>
          Production typically takes around 2 days, and we offer free delivery
          throughout the UK. We also offer worldwide shipping for an additional
          free.
        </CardText>
      </ConteinerInfoCard>
    </CardForm>
  );
};

export { CardDilevery };
