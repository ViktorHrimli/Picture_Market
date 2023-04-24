import { FooterSection, Container, FooterLogo, FooterList, FooterListContacts, FooterLinkContacts, FooterListText, FooterLinkText } from "./Footer.styles"


const Footer = (props) => {
    return (
        <FooterSection>
            <Container>
                <FooterLogo src="https://res.cloudinary.com/djoprd9i4/image/upload/v1680381246/samples/picture_market/rbqw9bjjlsupml6mnhfu.png" alt="logo" />
                <FooterList>
                    <FooterListContacts>
                        <li><FooterLinkContacts href="mailto:test@test.com">Email: sales.stringworld@gmail.com</FooterLinkContacts></li>
                        <li><FooterLinkContacts href="tel:+447455871180">Telephone: +447455871180</FooterLinkContacts></li>
                    </FooterListContacts>
                    <FooterListText>
                        <li><FooterLinkText onClick={props.handleToggleImprint}>Imprint</FooterLinkText></li>
                        <li><FooterLinkText onClick={props.handleTogglePrivacy}>Privacy police</FooterLinkText></li>
                        <li><FooterLinkText>Cookies</FooterLinkText></li>
                    </FooterListText>
                </FooterList>
            </Container>
        </FooterSection>
    )
}

export { Footer }