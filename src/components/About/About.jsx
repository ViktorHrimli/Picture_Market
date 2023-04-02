import {
  ConteinerImg,
  SectionAbout,
  TextImgConteiner,
  TextConteiner,
  ParagraphAbout,
  HederAboutText,
  ParagraphConteiner,
  TitleAboutConteiner,
} from 'components/About/About.styled';

const About = () => {
  return (
    <SectionAbout>
      <ConteinerImg>
        <img
          src="https://res.cloudinary.com/djoprd9i4/image/upload/v1680452464/samples/picture_market/Rectangle_119-min_hnzudp.png"
          alt="Girl face"
          width={360}
          height={530}
        />
        <TextImgConteiner>
          <TextConteiner>
            <TitleAboutConteiner>
              <HederAboutText>What is string art?</HederAboutText>
            </TitleAboutConteiner>
            <ParagraphConteiner>
              <ParagraphAbout>
                String World creates stunning, one-of-a-kind string art
                portraits based on your photo, crafted by crossing a single
                continuous black thread over 15 million times. We capture the
                details and nuances of your image, resulting in a truly unique
                and striking piece of art. Perfect as a unique gift or addition
                to your home decor.
              </ParagraphAbout>
            </ParagraphConteiner>
          </TextConteiner>
        </TextImgConteiner>
      </ConteinerImg>
    </SectionAbout>
  );
};

export { About };
