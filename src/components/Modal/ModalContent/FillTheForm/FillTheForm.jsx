import { useContext, useState } from 'react';

import { contentTypes } from '../../modal.constants';
import { ModalStrategyContext } from '../../ModalStrategyContext';

import { Section, Text, Form, Input, CheckboxContainer, Label, LabelColor, ModalBack, Back, Close, ModalClosed  } from './FillTheForm.styles'
import { GlobalButton } from 'styles/GlobalStyles.styled';

export function FillTheForm({ label, ...rest }) {
  const { setStrategy } = useContext(ModalStrategyContext);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Surname: ${surname}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`IsChecked: ${isChecked}`);
  };

  return (
    <Section>
      <ModalBack onClick={() => setStrategy(contentTypes.UploadPhoto)}>
        <Back />
      </ModalBack>
      <ModalClosed >
        <Close />
        </ModalClosed>
      <Text>Please fill the form</Text>
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
            type="text"
            id="surname"
            name="surname"
          value={surname}
          placeholder='Surname'
            onChange={(e) => setSurname(e.target.value)}
          />

          <Input
            type="email"
            id="email"
            name="email"
          value={email}
          placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="tel"
            id="phone"
            name="phone"
          value={phone}
          placeholder='Phone number'
            onChange={(e) => setPhone(e.target.value)}
          />
        <CheckboxContainer>
          {label}
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            {...rest}
          />
            <span className="checkmark"></span>
            <Label id="checkbox">I have read and agree to the <LabelColor href="#">Privacy Policy</LabelColor></Label>
          </CheckboxContainer>
      </Form>
      <GlobalButton onClick={() => setStrategy(contentTypes.Discount)}>confirm</GlobalButton>
    </Section>
  );
}