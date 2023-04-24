import { useContext, useState } from 'react';

import { contentTypes } from '../../modal.constants';
import { ModalStrategyContext } from '../../ModalStrategyContext';

import { Privacy } from 'components/Modal/ModalContent/FillTheForm/Privacy/Privacy';

import {
  Section,
  Text,
  Form,
  Input,
  CheckboxContainer,
  Label,
  LabelColor,
  ModalBack,
  Back,
  Close,
  ModalClosed,
  ButtonForm,
} from './FillTheForm.styles';

export function FillTheForm({ label, ...rest }) {
  const { setStrategy, setGlobalModalState } = useContext(ModalStrategyContext);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const [isOpenPrivacy, setIsOpenPrivacy] = useState(false);

  function handleTogglePrivacy () {
    setIsOpenPrivacy(!isOpenPrivacy);
  }

  const handleSubmit = event => {
    event.preventDefault();

    setGlobalModalState(prev => ({
      ...prev,
      name,
      email,
      phone,
      surname,
    }));

    setStrategy(contentTypes.Discount);
  };

  return (
    <Section>
      <ModalBack onClick={() => setStrategy(contentTypes.UploadPhoto)}>
        <Back />
      </ModalBack>
      <ModalClosed>
        <Close />
      </ModalClosed>
      <Text>Please fill the form</Text>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          required
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />

        <Input
          type="text"
          id="surname"
          name="surname"
          value={surname}
          placeholder="Surname"
          onChange={e => setSurname(e.target.value)}
        />

        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          required
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          required
          placeholder="Phone number"
          onChange={e => setPhone(e.target.value)}
        />
        <CheckboxContainer>
          {label}
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={isChecked}
            required
            onChange={() => setIsChecked(!isChecked)}
            {...rest}
          />
          <span className="checkmark"></span>
          <Label id="checkbox">
            I have read and agree to the{' '}
            <LabelColor onClick={handleTogglePrivacy}>Privacy Policy</LabelColor>
          </Label>
        </CheckboxContainer>

        <ButtonForm type="submit">confirm</ButtonForm>
      </Form>
      {isOpenPrivacy && <Privacy handleTogglePrivacy={handleTogglePrivacy} />}
    </Section>
  );
}
