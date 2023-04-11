import { useMediaQuery } from 'react-responsive';

import {
  CardForm,
  CardText,
  CardTitle,
  ConteinerInfoCard,
  DesktopAnimated,
} from 'components/Cards/CardDelivery/CardDelivery.styled';

const CardDilevery = () => {
  const isDesktopScreen = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  return (
    <CardForm>
      {isDesktopScreen && <DesktopAnimated>Work?</DesktopAnimated>}

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
