import { Section, TextBox, TextHeader, TextSpanColor, TextAfter, TextAfterArt, Text, } from "./Hero.styled"

const Hero = () => {
    return (
        <Section>
            <TextBox>
                <TextHeader>PERSONALIZ<TextSpanColor>ED</TextSpanColor></TextHeader>
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