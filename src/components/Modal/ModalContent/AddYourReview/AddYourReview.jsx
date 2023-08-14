import { useState } from 'react';

import {
  Section,
  ModalBack,
  Back,
  ModalClosed,
  Close,
  Text,
  Form,
  Input,
  Message,
  // IconPhoto,
  ButtonForm,
} from './AddYourReview.styles';

export function AddYourReview({ closeModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <Section>
      <ModalBack>
        <Back />
      </ModalBack>
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
  );
}
