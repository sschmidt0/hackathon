import styled from 'styled-components';
import { theme } from '../assets/theme';

export const StyledPaymentContainer = styled.article`
  grid-area: payment;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin-top: -30px;
    margin-bottom: -30px;
    margin-right: -15px;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.08);
  }

  div:first-child {
    @media screen and (min-width: 768px) {
      width: 70%;
      margin-left: 80px;
    }
  }

  label {
    display: block;
    margin: 30px 0 10px 0;
    font-weight: 900;
    font-size: 14px;
    line-height: 22px;
    color: ${theme.textGrey};
  }

  input {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 9px 12px;
    border: 1px solid rgba(60, 66, 87, 0.12);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
  }

  input:focus {
    outline: none;
  }

  select + input {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top: none;
  }

  select {
    width: 100%;
    height: 40px;
    padding: 6px;
    text-transform: capitalize;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    color: ${theme.textDark};
    background-color: ${theme.white};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 1px solid ${theme.inputBorder};
    cursor: pointer;
  }

  select:active {
    border-radius: 5px;
    border: 1px solid ${theme.inputBorder};
  }

  .error-span {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: red;
  }

  .error-span-top {
    position: absolute;
    top: -13px;
  }
`;
