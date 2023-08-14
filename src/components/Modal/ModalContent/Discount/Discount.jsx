import { useState } from 'react';

// import { contentTypes } from '../../modal.constants';
// import { ModalStrategyContext } from '../../ModalStrategyContext';

import { AddYourReview } from '../AddYourReview/AddYourReview';

import { Section,  ModalSection, ModalContent, ModalClosed, Close, TextBox, Text, TextUp, BoxBtn, Btn, Email } from './Discount.styles';


export function Discount({handleToggleDiscont}) {
    // const { setStrategy } = useContext(ModalStrategyContext);

    const [isOpenedForm, setIsOpenedForm] = useState(false);


    function handleToggleForm () {
    setIsOpenedForm(!isOpenedForm);
    }
  
    return (
        <>
        <ModalSection>
        <ModalContent>
        <Section>
            {/* <ModalBack onClick={() => setStrategy(contentTypes.FillTheForm)}>
                <Back />
            </ModalBack> */}
            <ModalClosed  onClick={handleToggleDiscont}>
                <Close />
            </ModalClosed>
            <TextBox>
                <Text>Thank you for your order!</Text>
                        <TextUp>Our designer will contact you shortly to discuss and approve the layout for your unique string art portrait. If you have any questions, feel free to reach out to us at
                                <Email onClick={handleToggleForm}> designer@string-world.com.</Email>
                                We can't wait to create a special piece of art for you!
                    </TextUp>
                    <TextUp>Best regards</TextUp>
                        </TextBox>
                    <BoxBtn>
                        <Btn onClick={handleToggleForm}>contact us</Btn>
                        <Btn onClick={handleToggleDiscont}>home page</Btn>
                    </BoxBtn>
                </Section>
            </ModalContent>
            </ModalSection>
            {isOpenedForm && <AddYourReview handleToggleForm={handleToggleForm} /> }
            </>
    )
}
