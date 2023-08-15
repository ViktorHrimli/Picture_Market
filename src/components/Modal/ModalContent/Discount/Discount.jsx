import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { contentTypes } from '../../modal.constants';
// import { ModalStrategyContext } from '../../ModalStrategyContext';

import { AddYourReview } from '../AddYourReview/AddYourReview';

import {
  Section,
  ModalSection,
  ModalContent,
  ModalClosed,
  Close,
  TextBox,
  Text,
  TextUp,
  BoxBtn,
  Btn,
  Email,
} from './Discount.styles';

export function Discount({ handleToggleDiscont }) {
  // const { setStrategy } = useContext(ModalStrategyContext);

  const [isOpenedForm, setIsOpenedForm] = useState(false);
  // const navigate = useNavigate();

  function handleToggleForm() {
    setIsOpenedForm(!isOpenedForm);
  }

  // const handleClickOnHome = () => {
  //   navigate('');
  // };

  return (
    <>
      <ModalSection>
        <ModalContent>
          <Section>
            {/* <ModalBack onClick={() => setStrategy(contentTypes.FillTheForm)}>
                <Back />
            </ModalBack> */}
            <ModalClosed>
              <Link to={'https://string-world.com/'}>
                <Close />
              </Link>
            </ModalClosed>
            <TextBox>
              <Text>Thank you for your order!</Text>
              <TextUp>
                Our designer will contact you shortly to discuss and approve the
                layout for your unique string art portrait. If you have any
                questions, feel free to reach out to us at
                <Email onClick={handleToggleForm}>
                  {' '}
                  designer@string-world.com.
                </Email>
                We can't wait to create a special piece of art for you!
              </TextUp>
              <TextUp>Best regards</TextUp>
            </TextBox>
            <BoxBtn>
              <Btn onClick={handleToggleForm}>contact us</Btn>
              <Btn>
                <Link to={'https://string-world.com/'}>home page</Link>
              </Btn>
            </BoxBtn>
          </Section>
        </ModalContent>
      </ModalSection>
      {isOpenedForm && <AddYourReview handleToggleForm={handleToggleForm} />}
    </>
  );
}
