import { MenuSection, MenuSectionBtn, Close, BtnBox, ListLayout, LinkLayout, ListContacts, LinkIcons, Email, Shop } from "components/HeaderMenu/HeaderMenu.styles";


const HeaderMenu = (props) => {
    return (
        <MenuSection isClosed={!props.closeSection}>
            <BtnBox>
                <MenuSectionBtn  onClick={() => props.setcloseSection(!props.closeSection)}>
                    <Close />
                </MenuSectionBtn>
            </BtnBox>
            <div>
                <ListLayout>
                    <li><LinkLayout href="">Home</LinkLayout></li>
                    <li><LinkLayout href="">About Us</LinkLayout></li>
                    <li><LinkLayout href="">Order</LinkLayout></li>
                    <li><LinkLayout href="">Reviews</LinkLayout></li>
                    <li><LinkLayout href="">Gallery</LinkLayout></li>
                </ListLayout>
            </div>
            <BtnBox>
                <ListContacts>
                    <LinkIcons>
                        <a href="mailto:test@test.com">
                            <Email />
                        </a>
                    </LinkIcons>
                    <LinkIcons>
                        <span>
                            <Shop />
                        </span>
                    </LinkIcons>
                </ListContacts>
            </BtnBox>
        </MenuSection>
    )
};

export { HeaderMenu }


// onClick={props.handleClick}