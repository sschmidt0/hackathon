import styled from 'styled-components';

export const StyledTextWithLine = styled.div`
  position: relative;
  height: 2px;
  margin: 50px 0;
  color: #697387;
  border-top: 1px solid #E8E8EB;

  p {
    position: absolute;
    top: -28px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 121px;
    text-align: center;
    background-color: #fff;
  }
`;
