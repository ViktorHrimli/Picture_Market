import { FooterSection, Container, FooterLogo, FooterList, FooterListContacts, FooterLink, FooterLinkContacts, FooterListText, FooterLinkText } from "./Footer.styles"


const Footer = ({handleToggleImprint, handleTogglePrivacy}) => {    
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
                        <li><FooterLinkText onClick={handleTogglePrivacy}>Privacy police</FooterLinkText></li>
                    </FooterListText>
                </FooterList>
            </Container>
        </FooterSection>
    )
}

export { Footer }