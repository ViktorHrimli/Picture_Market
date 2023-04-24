import styled from 'styled-components';
import { GlobalSection } from 'styles/GlobalStyles.styled';
import { GoX } from 'react-icons/go';

export const Section = styled(GlobalSection)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Content = styled.div`
  overflow: auto;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.space[2]};
  display: flex;
  flex-direction: column;
  padding: 0px 30px 30px 30px;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 312px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 583px;
  }
  @media (min-width: 1024px) {
    width: 1000px;
    height: 700px;
  }
`;

export const Closed = styled.button`
  margin-left: auto;
  cursor: pointer;
  position: relative;
  z-index: 10;

  @media (min-width: 320px) and (max-width: 767px) {
    top: 18px;
    right: 20px;
    width: 20px;
    height: 20px;
  }
  @media (min-width: 768px) {
    top: 48px;
    right: 22px;
    width: 29px;
    height: 27px;
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

export const HeaderBox = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 320px) and (max-width: 767px) {
    display: block;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  color: #003031;
  text-align: center;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 21px;
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 34px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-top: 40px;
`;

export const PreTitle = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  color: ${p => p.theme.colors.accent};
`;
