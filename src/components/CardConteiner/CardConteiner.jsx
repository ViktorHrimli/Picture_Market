import { useState } from 'react';

import {
  SectionCard,
  SectionCardTitle,
  ConteinerCard,
  Slider,
  ButtonCard,
} from 'components/CardConteiner/CardConteiner.styled';

import { Card } from 'components/Cards/Card';
import { CardPay } from 'components/Cards/CardPay/CardPay';

const payloadCard = [<Card />, <CardPay />, <Card />, <CardPay />];

const CardConteiner = () => {
  const [isChangeCard, setIsChangeCard] = useState(false);
  const [card, setCard] = useState(1);

  const hadnleChange = () => {
    if (card < 4) {
      setCard(prev => prev + 1);
      setIsChangeCard(prev => !prev);
    } else {
      setCard(prev => prev - 1);
      setIsChangeCard(prev => !prev);
    }
  };

  return (
    <SectionCard isisChangeCard={isChangeCard}>
      <ConteinerCard>
        <SectionCardTitle>Make your own portrait</SectionCardTitle>
        <Slider>
          {payloadCard.find((item, id) => (id === card ? item : ''))}
        </Slider>
      </ConteinerCard>
      <ButtonCard onClick={hadnleChange}>Buy now</ButtonCard>
    </SectionCard>
  );
};

export { CardConteiner };
