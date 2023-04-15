import styled from 'styled-components';

export const WrapperConteiner = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: start;

    grid-row-gap: 120px;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-row-gap: 120px;
    grid-column-gap: 80px;
  }

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-row-gap: 227px;
    grid-column-gap: 126px;
  }
`;
