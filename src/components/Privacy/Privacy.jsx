import { createPortal } from 'react-dom';

import { Section, Content, Closed, Close, HeaderBox, Text, Description, PreTitle } from "./Privacy.styled"

const privacyRoot = document.querySelector('#privacy--root');

const Privacy = ({ isOpenPrivacy, handleTogglePrivacy }) => {
  
  if (isOpenPrivacy) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  };
  return createPortal(
    <Section>
      <Content>
        <Closed>
          <Close onClick={handleTogglePrivacy} />
        </Closed>
        <HeaderBox>
          <img src="https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049746/String%20World/Group_128_4_wtjeu8.png"
            width="100"
            height="75"
            alt="logo" />
          <Text>Privacy Policy:</Text>
        </HeaderBox>
        <div>
          <Description>At String World, we respect your privacy and are committed to protecting your personal information. We use your information only to provide and improve our services. By using our website, you agree to the collection and use of your information in accordance with this policy.</Description>
          <Description><PreTitle>Information Collection and Use:</PreTitle>
            We collect your personal information to provide and improve our services to you. This includes your name, email address, and shipping information, as well as the photos that you provide for creating portraits. We may also collect non-personal information such as browser type, IP address, and device information for analytics purposes.</Description>
          <Description><PreTitle>Information Sharing:</PreTitle>
            We do not sell or share your personal information with any third parties except to comply with legal requirements or to protect our rights.
          </Description>
          <Description><PreTitle>Stripe Payment:</PreTitle>
            For secure payment processing, we use Visa and Mastercard payment methods by Stripe link. Stripe ensures that your payment information is handled securely and in compliance with the highest industry standards.
          </Description>
          <Description>
            <PreTitle>Security: </PreTitle> We take reasonable precautions to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure.
          </Description>
          <Description>
            <PreTitle>Legal Information:</PreTitle> String World is a legally registered business in the United Kingdom. We operate in accordance with all applicable laws and regulations, including tax laws. As a responsible business, we fulfil all our tax obligations, contributing to the community and the country's economy.
          </Description>
          <Description>
            <PreTitle>Updates to Privacy Policy:</PreTitle> At String World, we strive to ensure the privacy and security of our customers' information. As part of our commitment to transparency, we may update our privacy policy from time to time to reflect any changes in our data practices or legal requirements.
          </Description>
          <Description>
            <PreTitle></PreTitle>Please note that we will not individually notify customers of these policy changes. Instead, any updates will be posted directly on this page. Therefore, we encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your personal information.
          </Description>
          <Description>
            <PreTitle>Shipping Policy:</PreTitle>We offer free shipping on all orders within the UK. We use standard shipping, and delivery times vary depending on your location. Orders typically take 3-5 business days to arrive.
          </Description>

        </div>
      </Content>
    </Section>, privacyRoot
  );
};

export { Privacy }