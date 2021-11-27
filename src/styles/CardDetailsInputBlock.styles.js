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
    position: relative;
    display: flex;

    div {
      width: 50%;
      margin: 0;
    }

    span {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  .card-group {
    position: relative;
  }

  .card-icons {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  span {
    display: block;
  }

`;
