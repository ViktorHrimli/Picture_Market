import { useContext, useState } from 'react';

import { contentTypes } from '../../modal.constants';
import { ModalStrategyContext } from '../../ModalStrategyContext';

import { Privacy } from 'components/Privacy/Privacy';
import { Imprint } from 'components/Imprint/Imprint';
import  PaymentPolicy  from 'components/PaymentPolicy/PaymentPolicy';


import {
  ModalSection,
  ModalContent,
  Section,
  Text,
  Form,
  Input,
  CheckboxContainer,
  Label,
  LabelColor,
  // ModalBack,
  // Back,
  Close,
  ModalClosed,
  ButtonForm,
  ErrorBox,
  ErrorMessage,
} from './FillTheForm.styles';

export function FillTheForm({handleToggleForm, label, ...rest }) {
  const { setStrategy, setGlobalModalState } = useContext(ModalStrategyContext);

  const [name, setName] = useState(window.globalState['name'] ?? '');
  const [surname, setSurname] = useState(window.globalState['surname'] ?? '');
  const [email, setEmail] = useState(window.globalState['email'] ?? '');
  const [phone, setPhone] = useState(window.globalState['phone'] ?? '');
  const [isChecked, setIsChecked] = useState(false);

  const [isOpenPrivacy, setIsOpenPrivacy] = useState(false);
  const [isOpenImprint, setIsOpenImprint] = useState(false);
  const [isOpenPayment, setIsOpenPayment] = useState(false);


  const [errorMessage, setErrorMessage] = useState(false);

  function handleErrorMessage() {
    if (!isChecked) {
      setErrorMessage(!errorMessage);
    }
  }

  function checkedMessage() {
    setErrorMessage(false);
  }

  function handleTogglePrivacy() {
    setIsOpenPrivacy(!isOpenPrivacy);
  }

  function handleToggleImprint() {
  setIsOpenImprint(!isOpenImprint);
  }

  function handleTogglePayment() {
  setIsOpenPayment(!isOpenPayment);
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
    <ModalSection>
      <ModalContent>
    <Section>
      {/* <ModalBack onClick={() => setStrategy(contentTypes.UploadPhoto)}>
        <Back />
      </ModalBack> */}
      <ModalClosed onClick={handleToggleForm}>
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
          onChange={e => {
            window.globalState['name'] = e.target.value;
            setName(e.target.value);
          }}
        />

        <Input
          type="text"
          id="surname"
          name="surname"
          value={surname}
          placeholder="Surname"
          onChange={e => {
            setSurname(e.target.value);
            window.globalState['surname'] = e.target.value;
          }}
        />

        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          required
          placeholder="Email"
          onChange={e => {
            setEmail(e.target.value);
            window.globalState['email'] = e.target.value;
          }}
        />

        <Input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          required
          placeholder="Phone number"
          onChange={e => {
            setPhone(e.target.value);
            window.globalState['phone'] = e.target.value;
          }}
        />
        <CheckboxContainer>
          {label}
          <input
            onClick={checkedMessage}
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
            I have read and agree to the
            <LabelColor onClick={handleTogglePrivacy}>
                Privacy Policy
              </LabelColor>
              <span> and </span>
              <br />
              <LabelColor onClick={handleToggleImprint}>Terms and Conditions</LabelColor>
              <span> and </span>
              <LabelColor onClick={handleTogglePayment}>Payment Policy</LabelColor>
          </Label>
        </CheckboxContainer>
        {errorMessage && (
          <ErrorBox>
            <ErrorMessage>Please agree with Privacy Policy</ErrorMessage>
          </ErrorBox>
        )}
        <ButtonForm type="submit" onClick={handleErrorMessage}>
          confirm
        </ButtonForm>
      </Form>
        {isOpenPrivacy && <Privacy handleTogglePrivacy={handleTogglePrivacy} />}
        {isOpenImprint && <Imprint handleToggleImprint={handleToggleImprint} />}
        {isOpenPayment && <PaymentPolicy handleTogglePayment={handleTogglePayment} />}
        </Section>
        </ModalContent>
      </ModalSection>
  );
}
