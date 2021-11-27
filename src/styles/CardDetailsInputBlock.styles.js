import styled from 'styled-components';

export const StyledCardDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    border-radius: 0;
  }

  .cardInput {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .expireInput {
    border-bottom-left-radius: 8px;
  }

  .cvcInput {
    border-bottom-right-radius: 8px;
  }

  .card-group-second-row {
    display: flex;

    div {
      width: 50%;
      margin: 0;
    }
  }

  span {
    display: block;
  }
`;
