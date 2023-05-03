import styled from 'styled-components';
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from 'react-icons/io';

export const ButtonPagination = styled.button`
  width: 15px;
  height: 15px;

  border-radius: 50%;

  background-color: ${({ flag }) => {
    return flag ? '#634789' : 'rgba(99, 71, 137, 0.25)';
  }};

  :is(:hover) {
    background-color: #634789;

    cursor: pointer;
  }
`;

export const Root = styled.div`
  padding: 50px;
  width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

export const ListScroll = styled.ul`
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  overflow-x: scroll;

  scroll-behavior: smooth;

  width: ${({ isWidth }) => {
    return isWidth ? '1250px' : '900px';
  }};

  ::-webkit-scrollbar {
    visibility: visible;
    scroll-behavior: smooth;
  }

  gap: 60px;
`;

export const ConteinerContorol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  grid-gap: 10px;
`;

export const ConteinerList = styled.li`
  width: ${({ isWidth }) => {
    return isWidth ? '700px' : '570px';
  }};
  height: 450px;
  flex-shrink: 0;

  border: 4px solid #634789;
  border-radius: 8px;
`;

export const ButtonNext = styled(IoIosArrowDroprightCircle)`
  width: 40px;
  height: 40px;

  margin-right: auto;
  margin-left: auto;

  :hover {
    cursor: pointer;
    color: #634789;
  }
`;
export const ButtonPrev = styled(IoIosArrowDropleftCircle)`
  width: 40px;
  height: 40px;

  margin-right: auto;
  margin-left: auto;

  :hover {
    cursor: pointer;
    color: #634789;
  }
`;
