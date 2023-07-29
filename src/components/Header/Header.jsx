import React, { useState, useEffect, useContext } from 'react';
import { ModalStateContext } from 'components/ModalStateContext';

import {
  HeaderConteiner,
  Section,
  HeaderLogo,
  HeaderBtn,
  HeaderBtnLin,
  ListLayout,
  LinkLayout,
  LinkBorder,
  BtnHero,
} from 'components/Header/Header.styled';

import { HeaderMenu } from 'components/HeaderMenu/HeaderMenu';

export function Header() {
  const [isClosedSection, setIsClosedSection] = useState(true);
  const [isOpenedNavigation, setIsOpenedNavigation] = useState(false);

  const { openModal } = useContext(ModalStateContext);

  const handleClick = () => {
    setIsOpenedNavigation(true);
    document.body.classList.add('menu-open');
  };

  useEffect(() => {
    if (isClosedSection) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setIsClosedSection(true);
      setIsOpenedNavigation(false);
    }, 600);

    return () => clearTimeout(timeoutId);
  }, [isClosedSection]);

  const handleClickScroll = e => {
    const element = document.getElementById(e.currentTarget.id + '1');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderConteiner>
      {isOpenedNavigation && (
        <HeaderMenu
          isClosed={isClosedSection}
          setIsClosed={setIsClosedSection}
        />
      )}
      <Section>
        <HeaderLogo
          src="https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049746/String%20World/Group_128_4_wtjeu8.png"
          width="100"
          height="75"
          alt="logo"
        />
        <HeaderBtn onClick={handleClick}>
          <HeaderBtnLin />
          <HeaderBtnLin />
        </HeaderBtn>
        <ListLayout>
          <li id="about" onClick={handleClickScroll}>
            <LinkLayout>About Us</LinkLayout>
          </li>
          <li id="gallery" onClick={handleClickScroll}>
            <LinkLayout>Gallery</LinkLayout>
          </li>
          <li>
            <LinkLayout onClick={() => openModal()}>Order</LinkLayout>
          </li>
        </ListLayout>
        <LinkBorder />
        <BtnHero onClick={() => openModal()}>Buy for £ 69</BtnHero>

      </Section>
    </HeaderConteiner>
  );
}
