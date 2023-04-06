import {
  CardForm,
  CardText,
  CardTitle,
  ConteinerInfoCard,
  FakeFormCard,
} from 'components/Cards/CardFill/CardFill.styled';

const CardFill = () => {
  return (
    <CardForm>
      <CardTitle>Make payment</CardTitle>
      <ConteinerInfoCard>
        <CardText>
          Make a payment, and our assistant can contact you to approve the
          layout before we start creating your string art portrait.
        </CardText>
      </ConteinerInfoCard>
      <FakeFormCard>
        <img
          src="https://res.cloudinary.com/djoprd9i4/image/upload/v1680727208/payment_q69xzm.png"
          alt="payment"
        />
      </FakeFormCard>
    </CardForm>
  );
};

export { CardFill };
