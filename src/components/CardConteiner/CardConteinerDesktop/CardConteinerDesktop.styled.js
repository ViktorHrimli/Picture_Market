import styled from 'styled-components';

import { GlobalPostition } from 'styles/GlobalStyles.styled';

export const WrapperConteiner = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 126px;
`;
