import { useState } from "react";
import { FooterSection, Container, BoxAddress, FooterLogo, FooterAdress, FooterList, FooterListContacts, FooterLink, FooterLinkContacts, FooterListText, FooterLinkText, FooterPaymant } from "./Footer.styles"

import Payment from './img/payment.png';

import { AddYourReview } from "components/Modal/ModalContent/AddYourReview/AddYourReview";


const Footer = ({ handleToggleImprint, handleTogglePrivacy, handleTogglePayment }) => {   
    const [isOpenedForm, setIsOpenedForm] = useState(false);
    
    function handleToggleForm () {
    setIsOpenedForm(!isOpenedForm);
    }

    if (isOpenedForm) {
        document.body.classList.add('modal-open');
    } else {
        document.body.classList.remove('modal-open');
    }
    
    return (
        <FooterSection>
            <Container>
                <BoxAddress>
                    <FooterLogo src="https://res.cloudinary.com/de0iwhqf4/image/upload/v1683049747/String%20World/Group_166_1_mmzt5a.png" alt="logo" />
                    <FooterAdress>
                        48 Epstein Road
                        SE28 8EJ
                        London United Kingdom
                    </FooterAdress>
                </BoxAddress>
                <FooterList>
                    <FooterListContacts>
                        <li><FooterLinkContacts onClick={handleToggleForm}>Email: designer@string-world.com</FooterLinkContacts></li>
                        <li><FooterLinkContacts href="tel:+447455871180">Telephone: +447455871180</FooterLinkContacts></li>
                    </FooterListContacts>
                    <FooterListText>
                        <FooterLink><FooterLinkText onClick={handleToggleImprint}>Terms and Conditions</FooterLinkText></FooterLink>
                            <li><FooterLinkText onClick={handleTogglePrivacy}>Privacy Policy</FooterLinkText></li>
                            <FooterLink><FooterLinkText onClick={handleTogglePayment}>Payment Policy</FooterLinkText></FooterLink>
                        <FooterPaymant>
                                <img src={Payment} width={110} height={60} alt="Payment" />
                            </FooterPaymant>
                    </FooterListText>
                </FooterList>
                {isOpenedForm && <AddYourReview handleToggleForm={handleToggleForm} /> }
            </Container>
        </FooterSection>
    )
}

export { Footer }