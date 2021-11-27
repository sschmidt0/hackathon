import { StyledCardDetailsDiv } from '../styles/CardDetailsInputBlock.styles';
import Cleave from "cleave.js/react";

export const CardDetailsInputBlock = ({
  cardNumber,
  setCardNumber,
  expireDate,
  setExpireDate,
  cvcNumber,
  setCvcNumber,
  errors
}) => (
  <StyledCardDetailsDiv>
    <label htmlFor="cardDetails">Card details</label>
      <div className="card-group">
        { errors.cardNumber !== undefined && <span className="error-span">{ errors.cardNumber }</span> }
        <Cleave
          options={{ creditCard: true }}
          name="cardNumber"
          className="cardInput"
          value={ cardNumber }
          onChange={ (e) => setCardNumber(e.target.value) }
          placeholder="1234 1234 1234 1234"
        />
        <div className="card-group-second-row">
          <div>
            <Cleave
              options={{ date: true, datePattern: ["m", "d"] }}
              name="expireDate"
              className="expireInput"
              value={ expireDate }
              onChange={ (e) => setExpireDate(e.target.value) }
              placeholder="MM / YY"
            />
            { errors.expireDate !== undefined && <span className="error-span">{ errors.expireDate }</span> }
          </div>
          <div>
            <Cleave
              options={{ blocks: [4], numericOnly: true }}
              name="cvcNumber"
              className="cvcInput"
              value={ cvcNumber }
              onChange={ (e) => setCvcNumber(e.target.value) }
              placeholder="CVC"
            />
            { errors.cvcNumber !== undefined && <span className="error-span">{ errors.cvcNumber }</span> }
          </div>
        </div>
      </div>
  </StyledCardDetailsDiv>
);
