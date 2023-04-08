import styled from 'styled-components';
import { GlobalPostition } from 'styles/GlobalStyles.styled';
import { GoX } from 'react-icons/go';
import { MdAddAPhoto } from 'react-icons/md';

export const Section = styled(GlobalPostition)`
  width: 583px;
  padding-top: 42px;
  padding-right: 54px;
  padding-left: 54px;
  padding-bottom: 72px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  color: #003031;
  margin-bottom: 40px;
`;

export const ModalClosed = styled.button`
  margin-left: auto;
  cursor: pointer;
`;

export const Close = styled(GoX)`
  fill: ${p => p.theme.colors.main};
  font-size: ${p => p.theme.fontSizes.xl};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const Input = styled.input`
  height: 50px;
  background-color: rgba(99, 71, 137, 0.1);
  border: 1px solid #003031;
  border-radius: 8px;
  padding-left: 20px;

  ::placeholder {
    color: #634789;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Message = styled.textarea`
  position: relative;
  width: 100%;
  height: 193px;
  border-radius: 8px;
  border: 1px solid #003031;
  background-color: rgba(99, 71, 137, 0.1);
  margin-bottom: 65px;
  padding-top: 13px;
  padding-left: 20px;

  ::placeholder {
    color: #634789;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    resize: none;
  }
`;

export const IconPhoto = styled(MdAddAPhoto)`
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 202px;
  right: 71px;
  color: #003031;
  transform: scaleX(-1);
`;
