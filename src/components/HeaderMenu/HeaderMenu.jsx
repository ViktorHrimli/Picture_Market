import { useContext } from 'react';
import { ModalStateContext } from 'components/ModalStateContext';

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
          <LinkIcons>
            <a href="mailto:sales.stringworld@gmail.com">
              <Email />
            </a>
          </LinkIcons>
          <LinkIcons>
            <span>
              <Shop />
            </span>
          </LinkIcons>
        </ListContacts>
      </BtnBox>
    </MenuSection>
  );
}
