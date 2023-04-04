import {
  CardForm,
  ConteinerImgBackground,
  CardTitle,
  CardText,
  FakeFormCard,
} from 'components/Cards/CardPay/CardPay.styled';

const CardPay = () => {
  return (
    <CardForm>
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
