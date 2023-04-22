import { useContext } from 'react';
import {
  Section,
  Text,
  ModalBack,
  Back,
  ModalClosed,
  Close,
} from './ModalContent.styles';

import { contentTypes } from '../../modal.constants';
import { ModalStrategyContext } from '../../ModalStrategyContext';

export function ModalContentText() {
  const { setStrategy } = useContext(ModalStrategyContext);

  return (
    <Section>
      <ModalBack onClick={() => setStrategy(contentTypes.AddYourReview)}>
        <Back />
      </ModalBack>
      <ModalClosed>
        <Close />
      </ModalClosed>
      <Text>
        Thank you, we will send you email to confirm, that you are our customer.
      </Text>
    </Section>
  );
}
