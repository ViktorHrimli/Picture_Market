import styled from 'styled-components';
import { GoX } from 'react-icons/go';

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
  border-radius: 8px;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 583px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.space[2]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ModalClosed = styled.button`
  position: absolute;
  top: 48px;
  right: 60px;
  width: 29px;
  height: 27px;
  margin-left: auto;
  cursor: pointer;
`;
