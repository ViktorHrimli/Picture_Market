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

export const ConteinerContorol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  grid-gap: 5px;
`;

export const ConteinerList = styled.li`
  border: 4px solid #634789;
  border-radius: 8px;
`;
