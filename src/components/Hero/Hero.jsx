import { Section, TextBox, TextHeader, TextAfter, TextAfterArt, Text, } from "./Hero.styled"

const Hero = () => {
    return (
        <Section>
            <TextBox>
                <TextHeader>PERSONALIZ<span>ED</span></TextHeader>
                <TextAfter>STRING</TextAfter>
                <TextAfterArt>ART</TextAfterArt>
            </TextBox>
            <div>
                <Text>Unique string art pieces from your favourite photos</Text>
            </div>
        </Section>
    )
}

export { Hero }