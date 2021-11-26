import styled from 'styled-components';

export const StyledFooter = styled.footer`
  grid-area: footer;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #697387;

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
      border-left: 1px solid #697387;
    }
  }

  .icon-img-container {
    margin-top: 6px;
    width: 70px;
  }
`;
