import { useState } from 'react';

import {
  SectionCard,
  SectionCardTitle,
  ConteinerCard,
  Slider,
  ButtonCard,
  ArrowLeft,
  ArrowRight,
} from 'components/CardConteiner/CardConteiner.styled';

import { Card } from 'components/Cards/Card';
import { CardPay } from 'components/Cards/CardPay/CardPay';
import { CardFill } from 'components/Cards/CardFill/CardFill';
import { CardDilevery } from 'components/Cards/CardDelivery/CardDilevery';

const payloadCard = [<Card />, <CardPay />, <CardFill />, <CardDilevery />];

const CardConteiner = () => {
  const [isChangeCard, setIsChangeCard] = useState(false);
  const [card, setCard] = useState(0);

  const hadnleChange = () => {
    if (card < 3) {
      setCard(prev => prev + 1);
      setIsChangeCard(prev => !prev);
    } else {
      setCard(0);
      setIsChangeCard(prev => !prev);
    }
  };

  return (
    <SectionCard isisChangeCard={isChangeCard}>
      {card < 3 ? (
        <ArrowRight onClick={hadnleChange} />
      ) : (
        <ArrowLeft onClick={hadnleChange} />
      )}
      <ConteinerCard>
        <SectionCardTitle>Make your own portrait</SectionCardTitle>
        <Slider>
          {payloadCard.find((item, id) => (id === card ? item : ''))}
        </Slider>
      </ConteinerCard>
      <ButtonCard>Buy now</ButtonCard>
    </SectionCard>
  );
};

export { CardConteiner };
