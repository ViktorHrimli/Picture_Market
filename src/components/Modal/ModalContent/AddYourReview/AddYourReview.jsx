import { useState } from 'react';

import {
  ModalSection,
  ModalContent,
  Section,
  // ModalBack,
  // Back,
  ModalClosed,
  Close,
  Text,
  Form,
  Input,
  Message,
  // IconPhoto,
  ButtonForm,
} from './AddYourReview.styles';

// <<<<<<< HEAD


export function AddYourReview({handleToggleForm }) {
//   const { setStrategy, setGlobalModalState } = useContext(ModalStrategyContext);

// =======
// export function AddYourReview({ closeModal }) {
// >>>>>>> e43587d99ee7c2c2a2f3d61aea700cd7c3cbe8fb
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <ModalSection>
    <ModalContent>
    <Section>

      {/* <ModalBack onClick={() => setStrategy(contentTypes.Discount)}>

      <ModalBack>

        <Back />
      </ModalBack> */}
      <ModalClosed onClick={handleToggleForm}>
        <Close />
      </ModalClosed>

      <Text>Please add your review</Text>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />

        <Input
          type="email"
          id="email"
          name="Email"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <Message
          onChange={e => setMessage(e.target.value)}
          value={message}
          name="textarea"
          id="textarea"
          placeholder="Message"
        ></Message>
        {/* <IconPhoto /> */}

        <ButtonForm type="submit">send</ButtonForm>
      </Form>
        </Section>
      </ModalContent>
    </ModalSection>
  );
}
