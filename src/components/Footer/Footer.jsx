import { FooterSection, FooterLogo, FooterList, FooterListContacts, FooterLinkContacts, FooterListText, FooterLinkText} from "./Footer.styles"

const Footer = () => {
    return (
        <FooterSection>
                <FooterLogo src="https://res.cloudinary.com/djoprd9i4/image/upload/v1680381246/samples/picture_market/rbqw9bjjlsupml6mnhfu.png" alt="logo" />
                <FooterList>
                    <FooterListContacts>
                        <li><FooterLinkContacts href="mailto:test@test.com">Email: sales.stringworld@gmail.com</FooterLinkContacts></li>
                        <li><FooterLinkContacts href="tel:+447455871180">Telephone: +447455871180</FooterLinkContacts></li>
                    </FooterListContacts>
                    <FooterListText>
                        <li><FooterLinkText href="#">Imprint</FooterLinkText></li>
                        <li><FooterLinkText href="#">Privacy police</FooterLinkText></li>
                        <li><FooterLinkText href="#">Cookies</FooterLinkText></li>
                    </FooterListText>
                </FooterList>
        </FooterSection>
    )
}

export { Footer }