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
`;

export const ModalContent = styled.div`
  width: 583px;
  height: 695px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.space[2]};
  padding-top: 42px;
  padding-right: 46px;
  padding-left: 46px;
  padding-bottom: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ModalClosed = styled.button`
  margin-left: auto;
  cursor: pointer;
`;

export const Close = styled(GoX)`
  fill: ${p => p.theme.colors.main};
  font-size: ${p => p.theme.fontSizes.xl};
`;
