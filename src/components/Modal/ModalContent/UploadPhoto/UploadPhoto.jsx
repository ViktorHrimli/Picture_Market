import { useContext, useState, useRef } from 'react';

import { contentTypes } from '../../modal.constants';
import { ModalStrategyContext } from '../../ModalStrategyContext';

import { Section, Text, ModalClosed, Close, ChooseImg, BoxIcon, Icon, BtnBox, BtnUse } from './UploadPhoto.styles';
import { GlobalButton } from 'styles/GlobalStyles.styled';
import IMG from './Img/chooseImg.png'



export function UploadPhoto() {
  const { setStrategy } = useContext(ModalStrategyContext);
  const [imageUrl, setImageUrl] = useState(IMG);

  const fileInput = useRef(null);

  function handleButtonClick() {
    fileInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event) => {
      setImageUrl(event.target.result);
    });

    reader.readAsDataURL(file);
  }


  if (imageUrl === IMG) {
    return (
      <Section>
        <ModalClosed>
          <Close />
        </ModalClosed>
        <Text>Please, upload your photo</Text>
        <ChooseImg>
          <img onClick={handleButtonClick} src={imageUrl} alt="UserPhoto" style={{ cursor: 'pointer' }} width='100%' height='100%'/>
        </ChooseImg>
      
        <GlobalButton onClick={handleButtonClick}>choose image</GlobalButton>
        <input type="file" ref={fileInput} style={{ display: 'none' }} onChange={handleImageChange} />
      
      </Section>
    )
  } else {
    return (
      <Section>
        <ModalClosed>
          <Close />
        </ModalClosed>
        <Text>Please, upload your photo</Text>
        <ChooseImg>
          <img onClick={handleButtonClick} src={imageUrl} alt="UserPhoto" style={{ cursor: 'pointer'}} width='100%' height='100%' />
        </ChooseImg> 
        <input type="file" ref={fileInput} style={{ display: 'none' }} onChange={handleImageChange} />
        <BtnBox>
          <BoxIcon>
            <Icon onClick={handleButtonClick} />
          </BoxIcon>
          <BtnUse onClick={() => setStrategy(contentTypes.FillTheForm)}>use this photo</BtnUse>
        </BtnBox>
      </Section>
    )
  }
}
