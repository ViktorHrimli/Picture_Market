import { MenuSection, MenuSectionBtn, Close, BtnBox, ListLayout, LinkLayout, ListContacts, LinkIcons, Email, Shop } from "components/HeaderMenu/HeaderMenu.styles";


export function HeaderMenu({ isClosed, setIsClosed }) {
	const handleClose = () => {
		setIsClosed(false);
	};

	return (
		<MenuSection isClosed={isClosed}>
			<BtnBox>
				<MenuSectionBtn onClick={handleClose}>
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
