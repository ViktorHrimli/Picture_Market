import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import axios from 'axios';

import { ModalSection, ModalContent, ModalClosed } from './Modal.styled';

import { contentTypes } from './modal.constants';
import { ModalStrategyContext } from './ModalStrategyContext';

import { UploadPhoto } from './ModalContent/UploadPhoto/UploadPhoto';
import { FillTheForm } from './ModalContent/FillTheForm/FillTheForm';
import { Discount } from './ModalContent/Discount/Discount';
import { AddYourReview } from './ModalContent/AddYourReview/AddYourReview';
import { ModalContentText } from './ModalContent/ModalContent/ModalContent';
import { Privacy } from 'components/Privacy/Privacy';

const modalRoot = document.querySelector('#modal--root');

const initialGlobalState = {
  photo: null,
  name: '',
  surname: '',
  email: '',
  phone: '',
  nameMsg: '',
  emailMsg: '',
  msg: '',
};

window.globalState = {};

export function Modal({ closeModal }) {
  const [strategy, setStrategy] = useState(contentTypes.UploadPhoto);
  const [globalModalState, setGlobalModalState] = useState(initialGlobalState);

  const modalStrategies = {
    [contentTypes.UploadPhoto]: <UploadPhoto />,
    [contentTypes.FillTheForm]: <FillTheForm />,
    [contentTypes.Discount]: <Discount />,
    [contentTypes.AddYourReview]: <AddYourReview />,
    [contentTypes.ModalContentText]: <ModalContentText />,
    [contentTypes.Privacy]: <Privacy />,
  };
  console.log(window.globalState);

  useEffect(() => {
    if (strategy === contentTypes.Discount) {
      const formData = new FormData();

      const { email, name, phone, photo, surname } = globalModalState;

      formData.append('name', name);
      formData.append('surname', surname);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('photo', photo);

      window.globalState.file = null;
      window.globalState.name = null;
      window.globalState.surname = null;
      window.globalState.email = null;
      window.globalState.phone = null;

      axios
        .post('https://postapi.onrender.com/api/send', formData)
        .then(res => console.log(res.data));
    }
  }, [globalModalState, strategy]);

  return createPortal(
    <ModalStrategyContext.Provider
      value={{ strategy, setStrategy, setGlobalModalState }}
    >
      <ModalSection>
        <ModalContent>
          <ModalClosed onClick={closeModal}></ModalClosed>
          <div>{modalStrategies[strategy]}</div>
        </ModalContent>
      </ModalSection>
    </ModalStrategyContext.Provider>,
    modalRoot
  );
}
