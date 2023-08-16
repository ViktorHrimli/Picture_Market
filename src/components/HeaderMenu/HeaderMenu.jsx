import { useContext, useState } from 'react';
import { ModalStateContext } from 'components/ModalStateContext';

import { AddYourReview } from "components/Modal/ModalContent/AddYourReview/AddYourReview";


import {
  MenuSection,
  MenuSectionBtn,
  Close,
  BtnBox,
  ListLayout,
  LinkLayout,
  ListContacts,
  LinkIcons,
  Email,
  Shop,
} from 'components/HeaderMenu/HeaderMenu.styles';

export function HeaderMenu({ isClosed, setIsClosed }) {
  const { openModal } = useContext(ModalStateContext);
  const [isOpenedForm, setIsOpenedForm] = useState(false);
  
  

    function handleToggleForm () {
    setIsOpenedForm(!isOpenedForm);
    }

  const handleClose = () => {
    setIsClosed(false);
    document.body.classList.remove('menu-open');
  };

  const handleCloseAutoIsModal = () => {
    handleClose();

    const timeoutId = setTimeout(() => {
      openModal();
    }, 600);
    return () => clearTimeout(timeoutId);
  };

  const handleClickScroll = e => {
    const element = document.getElementById(e.currentTarget.id + '1');
    if (element) {
      handleClose();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MenuSection isClosed={isClosed}>
      <BtnBox>
        <MenuSectionBtn onClick={handleClose}>
          <Close />
        </MenuSectionBtn>
      </BtnBox>
      <div>
        <ListLayout>
          <li>
            <LinkLayout>Home</LinkLayout>
          </li>
          <li id="about" onClick={handleClickScroll}>
            <LinkLayout>About Us</LinkLayout>
          </li>
          <li>
            <LinkLayout onClick={handleCloseAutoIsModal}>Order</LinkLayout>
          </li>
          {/* <li><LinkLayout>Reviews</LinkLayout></li> */}
          <li id="gallery" onClick={handleClickScroll}>
            <LinkLayout>Gallery</LinkLayout>
          </li>
        </ListLayout>
      </div>
      <BtnBox>
        <ListContacts>
          <LinkIcons onClick={handleToggleForm}>
              <Email />
          </LinkIcons>
          <LinkIcons>
            <span>
              <Shop />
            </span>
          </LinkIcons>
        </ListContacts>
      </BtnBox>
      {isOpenedForm && <AddYourReview handleToggleForm={handleToggleForm} /> }
    </MenuSection>
  );
}
