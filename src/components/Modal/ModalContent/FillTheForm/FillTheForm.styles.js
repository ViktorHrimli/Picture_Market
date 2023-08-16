import styled from 'styled-components';
import { GlobalPostition, GlobalButton } from 'styles/GlobalStyles.styled';
import { GoX } from 'react-icons/go';
import { ImArrowLeft2 } from 'react-icons/im';

export const ModalSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.blackLight};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.space[2]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 312px;
  }
  @media (min-width: 768px) {
    width: 583px;
  }
`;

export const Section = styled(GlobalPostition)`
  @media (min-width: 320px) and (max-width: 767px) {
    width: 312px;
    height: 498px;
    padding-top: 82px;
    padding-right: 23px;
    padding-left: 23px;
    padding-bottom: 40px;
    position: relative;
  }

  @media (min-width: 768px) {
    width: 583px;
    padding-top: 42px;
    padding-right: 54px;
    padding-left: 54px;
    padding-bottom: 72px;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  color: #003031;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 21px;
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 34px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 320px) and (max-width: 767px) {
    gap: 12px;
  }

  @media (min-width: 768px) {
    gap: 20px;
    width: 100%;
  }
`;

export const Input = styled.input`
  background-color: rgba(99, 71, 137, 0.1);
  border: 1px solid #003031;
  border-radius: 8px;

  @media (min-width: 320px) and (max-width: 767px) {
    height: 36px;
    padding-left: 8px;

    ::placeholder {
      color: #634789;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
    }
  }
  @media (min-width: 768px) {
    height: 50px;
    padding-left: 20px;

    ::placeholder {
      color: #634789;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 50px;
  }

  @media (min-width: 768px) {
    margin-bottom: 90px;
  }
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  color: #003031;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 12px;
    margin-right: 60px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    margin-right: 70px;
  }
`;

export const ModalBack = styled.button`
  margin-left: auto;
  cursor: pointer;
  position: absolute;

  @media (min-width: 320px) and (max-width: 767px) {
    top: 18px;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }
  @media (min-width: 768px) {
    top: 42px;
    left: 54px;
  }
`;

export const Back = styled(ImArrowLeft2)`
  fill: ${p => p.theme.colors.main};

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.l};
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const ModalClosed = styled.button`
  margin-left: auto;
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    top: 18px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }
`;

export const Close = styled(GoX)`
  fill: ${p => p.theme.colors.main};

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.l};
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const LabelColor = styled.a`
  color: #634789;
  text-decoration: underline;
  cursor: pointer;
`;
//----------------- checkbox ---------

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 30px;
  font-size: 18px;
  user-select: none;
  position: relative;

  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 25px;
  }

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }

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
    border: 1px solid #634789;
    background-color: #fff;
    border-radius: 3px;
    margin-top: 2px;

    @media (min-width: 320px) and (max-width: 767px) {
      height: 15px;
      width: 15px;
    }
    @media (min-width: 768px) {
      height: 18px;
      width: 18px;
    }
  }

  /* Стилізуємо галочку */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);

    @media (min-width: 320px) and (max-width: 767px) {
      left: 4px;
      top: 0px;
    }
    @media (min-width: 768px) {
      left: 5px;
      top: 2px;
    }
  }

  /* Показуємо галочку при виборі */
  input:checked ~ .checkmark:after {
    display: block;
  }

  input:checked ~ .checkmark {
    background-color: #634789;
  }
`;

export const ButtonForm = styled(GlobalButton)`
  margin-left: auto;
  margin-right: auto;
`;

export const ErrorBox = styled.div`
  position: absolute;

  @media (min-width: 320px) and (max-width: 767px) {
    bottom: 155px;
    left: 67px;
  }

  @media (min-width: 768px) {
    bottom: 194px;
    left: 160px;
  }
`;

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: red;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
