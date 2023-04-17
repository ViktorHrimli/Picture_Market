import styled, { keyframes } from 'styled-components';
import { GlobalLayout } from 'styles/GlobalStyles.styled';

import { GoX } from 'react-icons/go';
import { TfiEmail } from 'react-icons/tfi';
import { AiOutlineShopping } from 'react-icons/ai';

const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const MenuSection = styled(GlobalLayout)`
  animation: ${slideInAnimation} 0.5s ease-out;
  transition: transform 0.5s ease-in-out;
  transform: ${({ isClosed }) =>
    isClosed ? 'translateX(0)' : 'translateX(100%)'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.colors.accent};
  background: ${p => p.theme.colors.gradientMenu};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 44px 28px 68px 28px;
  margin: 0 auto;
  z-index: 5;

  @media (min-width: 769px) and (max-width: 1042px) {
    padding: 44px 60px 68px 60px;
    z-index: 10;
  }
`;

export const BtnBox = styled.div`
  margin-left: auto;
`;

export const ListLayout = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[7]};
`;

export const LinkLayout = styled.a`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.normal};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const MenuSectionBtn = styled.button`
  cursor: pointer;
`;

export const ListContacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[6]};
`;

export const LinkIcons = styled.li`
  width: ${p => p.theme.space[8]};
  height: ${p => p.theme.space[8]};
  background: ${p => p.theme.colors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Close = styled(GoX)`
  fill: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xl};
`;

export const Email = styled(TfiEmail)`
  fill: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Shop = styled(AiOutlineShopping)`
  fill: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};
`;
