import { useContext, useState } from 'react';
import { contentTypes } from '../../modal.constants';
import { ModalStrategyContext } from '../../ModalStrategyContext';
import { Section, ModalClosed, Close, Text, Form, Input, Message, IconPhoto} from './AddYourReview.styles';
import { GlobalButton } from 'styles/GlobalStyles.styled';


export function AddYourReview({closeModal}) {
    const { setStrategy } = useContext(ModalStrategyContext);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
    };
    
    return (
        <Section>
            <ModalClosed onClick={closeModal}>
                <Close />
            </ModalClosed>

            <Text>Please add your review</Text>

            <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
            />

            <Input
                type="email"
                id="email"
                name="Email"
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                />
                <Message name="textarea" id="textarea" placeholder='Message'></Message>
                <IconPhoto />
            </Form>
            <GlobalButton onClick={() => setStrategy(contentTypes.ModalContentText)}>send</GlobalButton>
        </Section>
    )
}
