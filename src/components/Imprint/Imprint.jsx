import { useState } from "react";

import { Section, Content, Closed, Close, HeaderBox, Text, Description, PreTitle, DescriptionEmail } from "./Imprint.styled"

import { AddYourReview } from "components/Modal/ModalContent/AddYourReview/AddYourReview";

const Imprint = ({isOpenImprint, handleToggleImprint}) => {
 const [isOpenedForm, setIsOpenedForm] = useState(false);
    
  function handleToggleForm () {
    setIsOpenedForm(!isOpenedForm);
  }
  
  if (isOpenImprint) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  };
  return (
    <Section>
      <Content>
        <Closed>
          <Close onClick={handleToggleImprint}/>
        </Closed>
        <HeaderBox>
          <img src="https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049746/String%20World/Group_128_4_wtjeu8.png"
          width="100"
          height="75"
          alt="logo" />
          <Text>Terms and Conditions of Use</Text>
        </HeaderBox>
        <div>
          <Description><PreTitle>Introduction</PreTitle>
          Welcome to our website, where we (String World) offer string art portraits created from your photos. By accessing and using our website, you agree to comply with and be bound by these terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website.
          </Description>
          <Description><PreTitle>Intellectual Property</PreTitle>
          All content and materials available on this website, including but not limited to text, graphics, images, videos, logos, and software, are the property of String World and are protected by applicable copyright, trademark, and other intellectual property laws. You may not use, copy, reproduce, distribute, transmit, or modify any content or materials on this website without our prior written consent.
          </Description>
          <Description><PreTitle>Use of Our Services</PreTitle>
          We offer string art portrait services that are subject to our approval. We reserve the right to refuse service to anyone at any time without notice. You agree to provide accurate, current, and complete information about yourself and your photo when using our services.
          </Description>
          <Description><PreTitle>Pricing and Payment</PreTitle>
          We offer competitive pricing for our string art portrait services. All prices are subject to change without notice. Payment is required in advance and can be made through our website using our secure payment system.
          </Description>
          <Description><PreTitle>Delivery</PreTitle>
          We offer free delivery of our string art portraits throughout the UK. We aim to complete production within 2-3 days of receiving your order and will provide you with an estimated delivery date when your order is confirmed. We are not responsible for any delays or damages caused by third-party delivery services.
          </Description>
          <Description><PreTitle>Refunds and Returns</PreTitle>
          We take pride in the quality of our string art portraits and strive to ensure that you are completely satisfied with your purchase. If you are not satisfied with your portrait for any reason, please contact us within 14 days of receipt to arrange for a refund or exchange. We are not responsible for any damages caused by mishandling or misuse of our products.
          </Description>
          <Description><PreTitle>Shipping of Product Returns</PreTitle>
          If you decide to return your string art portrait, the shipping costs for the return will be the responsibility of the customer. We recommend using a trackable shipping service to ensure that the return is safely delivered to us.
          </Description>
          <Description><PreTitle>Limitation of Liability</PreTitle>
          We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of our website or the information, products, services, or related graphics contained on our website. In no event will we be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of our website.
          </Description>
          <Description><PreTitle>Changes to These Terms and Conditions of Use</PreTitle>We reserve the right to modify these terms and conditions of use at any time without notice. By continuing to use our website after such modifications are made, you agree to be bound by the revised terms and conditions of use.
          </Description>
          <Description><PreTitle>Contact Information</PreTitle>If you have any questions or concerns about these terms and conditions of use, please do not hesitate to contact us at <DescriptionEmail onClick={handleToggleForm}>designer@string-world.com</DescriptionEmail>.
          </Description>
          <Description>Date of Last Update: 25.07.2023</Description>
        </div>
      </Content>
        {isOpenedForm && <AddYourReview handleToggleForm={handleToggleForm} /> }
  </Section>
  ) 
}

export { Imprint }