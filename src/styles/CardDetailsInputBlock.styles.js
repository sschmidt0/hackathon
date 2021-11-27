import styled from 'styled-components';

export const StyledCardDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border-radius: 0;
  }

  input:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  input:nth-child(2) {
    width: 50%;
    border-bottom-left-radius: 8px;
  }

  input:last-child {
    width: 50%;
    border-bottom-right-radius: 8px;
  }
`;
