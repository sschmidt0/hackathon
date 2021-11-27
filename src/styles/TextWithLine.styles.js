import styled from 'styled-components';

export const StyledTextWithLine = styled.div`
  position: relative;
  margin: 40px 0 0;
  color: #8792A2;
  border: 1px solid rgba(60, 66, 87, 0.12);

  p {
    position: absolute;
    top: -28px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 121px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    background-color: #fff;
  }
`;
