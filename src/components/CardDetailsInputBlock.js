import { StyledCardDetailsDiv } from '../styles/CardDetailsInputBlock.styles';
import Cleave from "cleave.js/react";

export const CardDetailsInputBlock = ({
  cardNumber,
  setCardNumber,
  expireDate,
  setExpireDate,
  cvcNumber,
  setCvcNumber
}) => (
  <StyledCardDetailsDiv>
    <label htmlFor="cardDetails">Card details</label>
      <div className="card-group">
        <Cleave
          options={{ creditCard: true }}
          name="cardNumber"
          value={ cardNumber }
          onChange={ (e) => setCardNumber(e.target.value) }
          placeholder="1234 1234 1234 1234"
        />
        {/* { error !== '' && <span className="error-span">{ error }</span> } */}
        <Cleave
          options={{ date: true, datePattern: ["m", "d"] }}
          name="expireDate"
          value={ expireDate }
          onChange={ (e) => setExpireDate(e.target.value) }
          placeholder="MM / YY"
        />
        {/* { error !== '' && <span className="error-span">{ error }</span> } */}
        <Cleave
          options={{ blocks: [3], numericOnly: true }}
          name="cvcNumber"
          value={ cvcNumber }
          onChange={ (e) => setCvcNumber(e.target.value) }
          placeholder="CVC"
        />
        {/* { error !== '' && <span className="error-span">{ error }</span> } */}
      </div>
  </StyledCardDetailsDiv>
);
