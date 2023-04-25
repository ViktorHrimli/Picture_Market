import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (strategy === contentTypes.Discount) {
      const formData = new FormData();

      const { email, name, phone, photo, surname } = globalModalState;

      formData.append('name', name);
      formData.append('surname', surname);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('photo', photo);

      axios
        .post('https://postapi.onrender.com/api/send', formData)
        .then(res => console.log(res.data));
    }
  }, [globalModalState, strategy]);
  return (
    <ModalStrategyContext.Provider
      value={{ strategy, setStrategy, setGlobalModalState }}
    >
      <ModalSection>
        <ModalContent>
          <ModalClosed onClick={closeModal}></ModalClosed>
          <div>{modalStrategies[strategy]}</div>
        </ModalContent>
      </ModalSection>
    </ModalStrategyContext.Provider>
  );
}
// E284088F4D5DBD751BF67C6AEDF25FF9EC81CD9F1326E484C11FF93BC4E25E8297C9093F09CDA079ED1D6396C302E3DA
// passw 01821B672D65F785D544B35EF93DC7A45B97
