import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import { Privacy } from 'components/Privacy/Privacy';
import { Imprint } from 'components/Imprint/Imprint';
// import PaymentPolicy from 'components/PaymentPolicy/PaymentPolicy';

import {
  Section,
  Text,
  ModalClosed,
  Close,
  ChooseImg,
  BoxIcon,
  Icon,
  BtnBox,
  BtnUse,
  FormCheckBox,
} from './UploadPhoto.styles';

import {
  Label,
  LabelColor,
  ErrorMessage,
  ErrorBox,
} from '../FillTheForm/FillTheForm.styles';

import { GlobalButton } from 'styles/GlobalStyles.styled';
import IMG from './Img/chooseImg.png';

export function UploadPhoto() {
  const [imageUrl, setImageUrl] = useState(window.globalState?.file ?? IMG);
  const [file, setFile] = useState(null);

  const [isOpenPrivacy, setIsOpenPrivacy] = useState(false);
  const [isOpenImprint, setIsOpenImprint] = useState(false);
  // const [isOpenPayment, setIsOpenPayment] = useState(false);

  const [isChecked, setisChecked] = useState(false);
  const [isError, setIsError] = useState(false);

  const fileInput = useRef(null);

  function handleButtonClick() {
    fileInput.current.click();
  }

  function handleTogglePrivacy() {
    setIsOpenPrivacy(!isOpenPrivacy);
  }

  function handleToggleImprint() {
    setIsOpenImprint(!isOpenImprint);
  }

  // function handleTogglePayment() {
  //   setIsOpenPayment(!isOpenPayment);
  // }

  function handleNextModal() {
    if (isChecked) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    const url = URL.createObjectURL(file);

    window.globalState['file'] = url;

    reader.addEventListener('load', event => {
      setImageUrl(event.target.result);
    });

    setFile(file);

    reader.readAsDataURL(file);
  }

  useEffect(() => {
    if (file && isChecked) {
      const formData = new FormData();

      formData.append('photo', file);

      window.globalState.file = null;

      axios
        .post('https://postapi.onrender.com/api/sendphoto', formData)
        .then(res => console.log(res.data));
    }
  }, [file, isChecked]);

  if (imageUrl === IMG) {
    return (
      <Section>
        <ModalClosed>
          <Close />
        </ModalClosed>
        <Text>Please, upload your photo</Text>
        <ChooseImg>
          <img
            onClick={handleButtonClick}
            src={imageUrl}
            alt="UserPhoto"
            style={{ cursor: 'pointer' }}
            width="100%"
            height="100%"
          />
        </ChooseImg>

        <GlobalButton onClick={handleButtonClick}>choose image</GlobalButton>
        <input
          type="file"
          name="photo"
          ref={fileInput}
          style={{ display: 'none' }}
          multiple
          accept=".jpeg, .png, .jpg"
          onChange={handleImageChange}
        />
      </Section>
    );
  } else {
    return (
      <Section>
        <ModalClosed>
          <Close />
        </ModalClosed>
        <Text>Please, upload your photo</Text>
        <ChooseImg>
          <img
            onClick={handleButtonClick}
            src={imageUrl}
            alt="UserPhoto"
            style={{
              cursor: 'pointer',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
            }}
          />
        </ChooseImg>
        <input
          type="file"
          name="photo"
          ref={fileInput}
          multiple
          accept=".jpeg, .png, .jpg"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <BtnBox>
          <FormCheckBox>
            <input
              type="checkbox"
              id="checkbox"
              onClick={() => setisChecked(!isChecked)}
              value={isChecked}
              name="checkbox"
              required
            />
            <span className="checkmark"></span>
            <Label id="checkbox">
              I am agree to the <span></span>
              <LabelColor onClick={handleTogglePrivacy}>
                Privacy Policy
              </LabelColor>
              <span> and </span>
              <br />
              <LabelColor onClick={handleToggleImprint}>
                Terms and Conditions
              </LabelColor>
              {/* <span> and </span>
              <LabelColor onClick={handleTogglePayment}>
                Payment Policy
              </LabelColor> */}
            </Label>
          </FormCheckBox>

          {isError && !isChecked && (
            <ErrorBox>
              <ErrorMessage>Please agree with Privacy Policy</ErrorMessage>
            </ErrorBox>
          )}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BoxIcon>
              <Icon onClick={handleButtonClick} type="button" />
            </BoxIcon>

            <script async src="https://js.stripe.com/v3/buy-button.js"></script>
            {isChecked ? (
              <stripe-buy-button
                buy-button-id="buy_btn_1NWKedBvsSffaihHlkNwDr5v"
                publishable-key="pk_live_51NTPQmBvsSffaihHutVQGNFakDGH0b8Yeqb5qgVW7X1xgge8YRucsJlxLmOVNtr0xGzlRaKk2lsT7vfSL2J2ZZ0800vVyTZ1UY"
              ></stripe-buy-button>
            ) : (
              <BtnUse type="button" onClick={handleNextModal}>
                Buy for £69
              </BtnUse>
            )}
          </div>
        </BtnBox>

        {isOpenPrivacy && <Privacy handleTogglePrivacy={handleTogglePrivacy} />}
        {isOpenImprint && <Imprint handleToggleImprint={handleToggleImprint} />}
        {/* {isOpenPayment && (
          <PaymentPolicy handleTogglePayment={handleTogglePayment} />
        )} */}
      </Section>
    );
  }
}
