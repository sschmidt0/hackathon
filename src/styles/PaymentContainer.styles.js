import styled from 'styled-components';

export const StyledPaymentContainer = styled.article`
  grid-area: payment;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin-top: -30px;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.08);
  }

  div:first-child {
    @media screen and (min-width: 768px) {
      width: 70%;
      margin-left: 80px;
    }
  }

  .error-span {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: red;
  }
`;
