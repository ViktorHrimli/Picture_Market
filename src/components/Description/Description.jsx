import { useContext } from "react"
import { ModalStateContext } from "components/ModalStateContext"
import { DescriptionSection, Text, TextBox, TextColor, DescriptionBtn } from "./Description.styles"

const Description = () => {
    const { openModal } = useContext(ModalStateContext)
    return (
        <DescriptionSection>
            <TextBox>
                <Text>Whether you're looking for a <TextColor>unique gift</TextColor> or a beautiful addition to your home decor, String World has you covered.</Text>
            </TextBox>
            <DescriptionBtn onClick={() => openModal()}>Buy for £ 149</DescriptionBtn>
        </DescriptionSection>
    )
}

export {Description}