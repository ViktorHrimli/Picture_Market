import { useContext } from 'react';

import { contentTypes } from '../../modal.constants';
import { ModalStrategyContext } from '../../ModalStrategyContext';

import { Section, ModalClosed, Close, TextBox, Text, TextUp, Btn } from './Discount.styles';


export function Discount() {
    const { setStrategy } = useContext(ModalStrategyContext);
  
    return (
        <Section>
            <ModalClosed>
                <Close />
            </ModalClosed>
            <TextBox>
                <Text>We're currently testing our string art portraits and preparing to launch in the UK. We'll keep you updated and offer a 30% discount on our portraits when we launch. Your feedback is valuable to us as we strive to meet your expectations.</Text>
                <TextUp>Thanks for considering String World!</TextUp>
            </TextBox>
            <Btn onClick={() => setStrategy(contentTypes.AddYourReview)}>send feedback</Btn>
        </Section>
    )
}
