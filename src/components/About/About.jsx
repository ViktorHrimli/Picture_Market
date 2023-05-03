import {
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
    <SectionAbout id="about1">
      <TextImgConteiner>
        <TextConteiner>
          <TitleAboutConteiner>
            <HederAboutText>What is string world?</HederAboutText>
          </TitleAboutConteiner>
          <ParagraphConteiner>
            <ParagraphAbout>
              String World creates stunning, one-of-a-kind string art portraits
              based on your photo, crafted by crossing a single continuous black
              thread over 15 million times. We capture the details and nuances
              of your image, resulting in a truly unique and striking piece of
              art. Perfect as a unique gift or addition to your home decor.
              Circle diameter 50cm.
            </ParagraphAbout>
          </ParagraphConteiner>
        </TextConteiner>
      </TextImgConteiner>
    </SectionAbout>
  );
};

export { About };
