import React, { useState, useEffect, useContext } from 'react';
import { ModalStateContext } from "components/ModalStateContext"

import {
  HeaderConteiner,
  Section,
  HeaderLogo,
  HeaderBtn,
  HeaderBtnLin,
  ListLayout,
  LinkLayout,
  LinkBorder,
} from 'components/Header/Header.styled';

import { HeaderMenu } from 'components/HeaderMenu/HeaderMenu';

export function Header() {
  const [isClosedSection, setIsClosedSection] = useState(true);
  const [isOpenedNavigation, setIsOpenedNavigation] = useState(false);

  const { openModal } = useContext(ModalStateContext)


  const handleClick = () => {
    setIsOpenedNavigation(true);
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
          src="https://res.cloudinary.com/djoprd9i4/image/upload/v1680452464/samples/picture_market/Group_128_4_zvenh9.png"
          width="100"
          height="75"
          alt="logo"
        />
        <HeaderBtn onClick={handleClick}>
          <HeaderBtnLin />
          <HeaderBtnLin />
        </HeaderBtn>
        <ListLayout>
          <li>
            <LinkLayout>About Us</LinkLayout>
          </li>
          <li>
            <LinkLayout>Gallery</LinkLayout>
          </li>
          <li>
            <LinkLayout onClick={() => openModal()}>Order</LinkLayout>
          </li>
        </ListLayout>
        <LinkBorder />
      </Section>
    </HeaderConteiner>
  );
}
