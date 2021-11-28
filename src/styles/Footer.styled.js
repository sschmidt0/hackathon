import styled from 'styled-components';
import { theme } from '../assets/theme';

export const StyledFooter = styled.footer`
  grid-area: footer;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.015em;
  color: ${theme.iconGrey};

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  .footer-first-row {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }

  .footer-second-row {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    padding: 0 20px;

    @media screen and (min-width: 768px) {
      border-left: 1px solid ${theme.iconGrey};
    }
  }

  .icon-img-container {
    margin-top: 6px;
    width: 49.54px;
    height: 20px;
    background: url(redsys.png);
  }
`;
