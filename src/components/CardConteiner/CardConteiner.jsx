import { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

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

import { CardConteinerDesktop } from 'components/CardConteiner/CardConteinerDesktop/CardConteinerDesktop';

import { CardContextState } from 'components/CardConteiner/CardContextState';

const payloadCard = [<Card />, <CardPay />, <CardFill />, <CardDilevery />];

const CardConteiner = () => {
  const [isChangeCard, setIsChangeCard] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [card, setCard] = useState(0);
  const elementRef = useRef(null);

  // HOOKS MEDIA SCREEN
  const isMobileScreen = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const isDesktopScreen = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  const hadnleChange = () => {
    if (card < 3) {
      setCard(prev => prev + 1);
      setIsChangeCard(prev => !prev);
    } else {
      setCard(0);
      setIsChangeCard(prev => !prev);
    }
  };

  const handleIntersection = entries => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(elementRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <SectionCard isisChangeCard={isChangeCard} ref={elementRef}>
      <ConteinerCard>
        <SectionCardTitle>Make your own portrait</SectionCardTitle>
        {isMobileScreen && (
          <>
            <Slider>
              {payloadCard.find((item, id) => (id === card ? item : ''))}
            </Slider>

            {card < 3 ? (
              <ArrowRight onClick={hadnleChange} />
            ) : (
              <ArrowLeft onClick={hadnleChange} />
            )}
          </>
        )}

        {isDesktopScreen && (
          <CardContextState.Provider value={isVisible}>
            <CardConteinerDesktop>
              {payloadCard.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </CardConteinerDesktop>
          </CardContextState.Provider>
        )}
      </ConteinerCard>

      <ButtonCard>Buy for £ 149</ButtonCard>
    </SectionCard>
  );
};

export { CardConteiner };
