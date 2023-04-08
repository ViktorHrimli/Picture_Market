import React, { useState } from 'react';
import { ModalSection, ModalContent, ModalClosed } from "./Modal.styled";

import { contentTypes } from './modal.constants';
import { ModalStrategyContext } from './ModalStrategyContext';

import { UploadPhoto } from './ModalContent/UploadPhoto/UploadPhoto';
import { FillTheForm } from './ModalContent/FillTheForm/FillTheForm';
import { Discount } from './ModalContent/Discount/Discount';
import { AddYourReview } from './ModalContent/AddYourReview/AddYourReview';
import { ModalContentText } from './ModalContent/ModalContent/ModalContent';


export function Modal ({closeModal}) {
  const [strategy, setStrategy] = useState(contentTypes.UploadPhoto);

  const modalStrategies = {
    [contentTypes.UploadPhoto]: <UploadPhoto />,
    [contentTypes.FillTheForm]: <FillTheForm />,
    [contentTypes.Discount]: <Discount />,
    [contentTypes.AddYourReview]: <AddYourReview />,
    [contentTypes.ModalContentText]: <ModalContentText />,
  }
    
  return (
    <ModalStrategyContext.Provider value={{ strategy, setStrategy }}>
      <ModalSection>
        <ModalContent>
          <ModalClosed onClick={closeModal}>
              </ModalClosed>
                <div>{modalStrategies[strategy]}</div>
          </ModalContent>
      </ModalSection>
    </ModalStrategyContext.Provider>
  );
}