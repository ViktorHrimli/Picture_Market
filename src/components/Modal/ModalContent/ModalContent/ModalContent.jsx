import { Section, Text, ModalClosed, Close } from "./ModalContent.styles";

export function ModalContentText () {
  return (
    <Section>
        <ModalClosed >
            <Close />
        </ModalClosed>
      <Text> Thank you, we will send you email to confirm, that you are our customer.</Text>
    </Section>
  );
}
