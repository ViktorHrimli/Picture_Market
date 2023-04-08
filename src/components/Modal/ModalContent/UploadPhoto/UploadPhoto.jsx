import { useContext } from 'react';

import { contentTypes } from '../../modal.constants';
import { ModalStrategyContext } from '../../ModalStrategyContext';

import { Section, Text, ModalClosed, Close, ChooseImg } from './UploadPhoto.styles';
import { GlobalButton } from 'styles/GlobalStyles.styled';

export function UploadPhoto() {
  const { setStrategy } = useContext(ModalStrategyContext);

  return (
    <Section>
      <ModalClosed>
            <Close />
        </ModalClosed>
      <Text>Please, upload your photo</Text>
      <ChooseImg>

      </ChooseImg>
      <GlobalButton onClick={() => setStrategy(contentTypes.FillTheForm)}>choose image</GlobalButton>
    </Section>
  )
}
