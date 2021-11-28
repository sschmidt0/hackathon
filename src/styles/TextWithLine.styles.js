import styled from 'styled-components';
import { theme } from '../assets/theme';

export const StyledTextWithLine = styled.div`
  position: relative;
  margin: 40px 0 0;
  color: ${theme.textLine};
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
    background-color: ${theme.white};
  }
`;
