import {
  CardForm,
  CardText,
  CardTitle,
  ConteinerInfoCard,
} from 'components/Cards/CardDelivery/CardDelivery.styled';

const CardDilevery = () => {
  return (
    <CardForm>
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
