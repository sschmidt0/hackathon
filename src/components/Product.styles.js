import styled from 'styled-components';

export const StyledProductContainer = styled.article`
  display: flex;
  flex-direction: column;
  grid-area: product;

  div {
    width: 60%;
    margin: 70px auto 10px;

    @media screen and (min-width: 768px) {
      order: 1;
      width: 80%;
      margin-top: 30px;
    }
  }
`;
