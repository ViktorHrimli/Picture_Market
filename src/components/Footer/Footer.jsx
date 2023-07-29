import { FooterSection, Container, FooterLogo, FooterList, FooterListContacts, FooterLink, FooterLinkContacts, FooterListText, FooterLinkText, FooterPaymant, FooterPaymantBox } from "./Footer.styles"

import  Visa  from './img/visa.png'
import  MasterCard  from './img/mastercard.png'


const Footer = ({handleToggleImprint, handleTogglePrivacy, handleTogglePayment}) => {    
    return (
        <FooterSection>
            <Container>
                <FooterLogo src="https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049747/String%20World/Group_166_1_mmzt5a.png" alt="logo" />
                <FooterList>
                    <FooterListContacts>
                        <li><FooterLinkContacts href="mailto:test@test.com">Email: sales.stringworld@gmail.com</FooterLinkContacts></li>
                        <li><FooterLinkContacts href="tel:+447455871180">Telephone: +447455871180</FooterLinkContacts></li>
                    </FooterListContacts>
                    <FooterListText>
                        <FooterLink><FooterLinkText onClick={handleToggleImprint}>Terms and Conditions</FooterLinkText></FooterLink>
                        <li><FooterLinkText onClick={handleTogglePrivacy}>Privacy Policy</FooterLinkText></li>
                        <li><FooterLinkText onClick={handleTogglePayment}>Payment Policy</FooterLinkText></li>
                    </FooterListText>
                    <FooterPaymant>
                        <FooterPaymantBox>
                        <img src={Visa} width={110} height={50} alt="Visa" />
                        </FooterPaymantBox>
                        <FooterPaymantBox>
                        <img src={MasterCard} width={80} height={50} alt="MasterCard" />
                        </FooterPaymantBox>
                    </FooterPaymant>
                </FooterList>
            </Container>
        </FooterSection>
    )
}

export { Footer }