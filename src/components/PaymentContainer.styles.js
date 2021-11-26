import styled from 'styled-components';

export const StyledPaymentContainer = styled.article`
  grid-area: payment;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin-top: -30px;
    padding: 0 60px 0 30px;
  }

  .error-span {
    position: absolute;
    bottom: -20px;
    padding-top: 3px;
    color: red;
  }
`;
