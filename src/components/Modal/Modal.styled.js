import styled from 'styled-components';

export const ModalSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.blackLight};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
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

export const ModalBack = styled.button`
  cursor: pointer;
  position: absolute;
  z-index: 10;
  border: 1px solid red;

  @media (min-width: 320px) and (max-width: 767px) {
    top: 18px;
    left: 20px;
    width: 20px;
    height: 20px;
  }
  @media (min-width: 768px) {
    top: 48px;
    left: 60px;
    width: 29px;
    height: 27px;
  }
`;

export const ModalClosed = styled.button`
  margin-left: auto;
  cursor: pointer;
  position: absolute;
  z-index: 10;

  @media (min-width: 320px) and (max-width: 767px) {
    top: 18px;
    right: 20px;
    width: 20px;
    height: 20px;
  }
  @media (min-width: 768px) {
    top: 48px;
    right: 60px;
    width: 29px;
    height: 27px;
  }
`;
