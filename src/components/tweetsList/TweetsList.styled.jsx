import styled from 'styled-components';

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 336px);
    gap: 32px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 330px);
    gap: 19px;
  }
`;
