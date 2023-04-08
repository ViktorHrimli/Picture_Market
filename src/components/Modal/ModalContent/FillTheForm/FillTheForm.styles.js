import styled from 'styled-components';
import { GlobalPostition } from 'styles/GlobalStyles.styled';
import { GoX } from 'react-icons/go';

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
  margin-bottom: 58px;
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

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 90px;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #003031;
`;

export const ModalClosed = styled.button`
  margin-left: auto;
  cursor: pointer;
`;

export const Close = styled(GoX)`
  fill: ${p => p.theme.colors.main};
  font-size: ${p => p.theme.fontSizes.xl};
`;

export const LabelColor = styled.a`
  color: #634789;
`;
//----------------- checkbox ---------

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 90px;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 18px;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Стилізуємо кастомний чекбокс */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border: 1px solid #634789;
    background-color: #fff;
    border-radius: 3px;
    margin-top: 2px;
  }

  /* Стилізуємо галочку */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Показуємо галочку при виборі */
  input:checked ~ .checkmark:after {
    display: block;
  }

  input:checked ~ .checkmark {
    background-color: #634789;
  }

  /* Стилізуємо галочку */
  .checkmark:after {
    left: 5px;
    top: 2px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
