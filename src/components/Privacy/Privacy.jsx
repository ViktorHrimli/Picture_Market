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
          <img src="https://res.cloudinary.com/djoprd9i4/image/upload/v1680452464/samples/picture_market/Group_128_4_zvenh9.png"
            width="100"
            height="75"
            alt="logo" />
          <Text>Privacy Policy:</Text>
        </HeaderBox>
        <div>
          <Description>At String World, we respect your privacy and are committed to protecting your personal information. We use your information only to provide and improve our services. By using our website, you agree to the collection and use of your information in accordance with this policy.</Description>
          <Description><PreTitle>Information Collection and Use: </PreTitle>
            We collect your personal information to provide and improve our services to you. This includes your name, email address, and shipping information. We may also collect non-personal information such as browser type, IP address, and device information for analytics purposes.</Description>
          <Description><PreTitle>Information Sharing: </PreTitle>
            We do not sell or share your personal information with any third parties except to comply with legal requirements or to protect our rights.
          </Description>
          <Description><PreTitle>Security: </PreTitle>
            We take reasonable precautions to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.
          </Description>
          <Description>
            <PreTitle>Changes to Policy: </PreTitle> We may update our privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </Description>

        </div>
      </Content>
    </Section>, privacyRoot
  );
};

export { Privacy }