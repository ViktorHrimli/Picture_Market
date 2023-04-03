import React, { useState } from 'react';
import { HeaderConteiner, Section, HeaderLogo, HeaderBtn, HeaderBtnLin } from 'components/Header/Header.styled';
import { HeaderMenu } from 'components/HeaderMenu/HeaderMenu';
  
const Header = () => {
  const [showSection, setShowSection] = useState(false);
  const [closeSection, setcloseSection] = useState(false);



  const handleClick = () => {
    setShowSection(!showSection);
  };

  if (closeSection) {
      const id = setTimeout(() => {
          setShowSection(false);
          setcloseSection(false);
          clearTimeout(id);
      }, 600);
  }

  return (
    <HeaderConteiner>
    {showSection && (
        <HeaderMenu closeSection={closeSection} setcloseSection={setcloseSection} />
          )}
      <Section>
          <HeaderLogo src="https://res.cloudinary.com/djoprd9i4/image/upload/v1680452464/samples/picture_market/Group_128_4_zvenh9.png" width="100" height="75" alt="logo" />
          <HeaderBtn onClick={handleClick}>
            <HeaderBtnLin />
            <HeaderBtnLin />
          </HeaderBtn>
      </Section>
    </HeaderConteiner>
  );
};

export { Header };
