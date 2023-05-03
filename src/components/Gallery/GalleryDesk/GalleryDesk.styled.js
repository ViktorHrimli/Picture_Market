import styled from 'styled-components';

export const ButtonPagination = styled.button`
  width: 10px;
  height: 10px;

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

  scroll-behavior: smooth;
`;

export const ListScroll = styled.ul`
  position: relative;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;

  scroll-behavior: smooth;

  width: ${({ isWidth }) => {
    return isWidth ? '1250px' : '980px';
  }};

  ::-webkit-scrollbar {
    visibility: hidden;
    scroll-behavior: smooth;
  }

  gap: 20px;
`;

export const ConteinerContorol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  grid-gap: 5px;
`;

export const ConteinerList = styled.li`
  width: ${({ isWidth }) => {
    return isWidth ? '700px' : '620px';
  }};
  height: 450px;
  flex-shrink: 0;

  border: 4px solid #634789;
  border-radius: 8px;
`;
