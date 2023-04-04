import { useState } from 'react';

import {
  SectionCard,
  SectionCardTitle,
  ConteinerCard,
  Slider,
  ButtonCard,
} from 'components/CardConteiner/CardConteiner.styled';

import { Card } from 'components/Card/Card';

const payloadCard = [<Card />, <Card />, <Card />, <Card />];

const CardConteiner = () => {
  const [isChangeCard, setIsChangeCard] = useState(false);
  const [card, setCard] = useState(0);

  const hadnleChange = () => {
    if (card < 4) {
      setCard(prev => prev + 1);
    } else {
      setCard(prev => prev - 1);
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
      <ButtonCard>Buy now</ButtonCard>
    </SectionCard>
  );
};

export { CardConteiner };
