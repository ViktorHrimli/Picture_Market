import React, { useState } from 'react';
import { HeaderConteiner, Section, HeaderLogo, HeaderBtn, HeaderBtnLin } from 'components/Header/Header.styled';
import { HeaderMenu } from 'components/HeaderMenu/HeaderMenu';
  
const Header = () => {
  const [showSection, setShowSection] = useState(false);

  const handleClick = () => {
    setShowSection(!showSection);
  };
  return (
    <HeaderConteiner>
    {showSection && (
        <HeaderMenu handleClick={handleClick} showSection={showSection}/>
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
