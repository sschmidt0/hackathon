import { StyledCardDetailsDiv } from '../styles/CardDetailsInputBlock.styles';
import Cleave from "cleave.js/react";
import { FaCcVisa, FaCcMastercard, FaCcDiscover } from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';
import { BsCreditCard2BackFill } from 'react-icons/bs';

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
        <Cleave
          options={{ creditCard: true }}
          name="cardNumber"
          className="cardInput"
          value={ cardNumber }
          onChange={ (e) => setCardNumber(e.target.rawValue) }
          placeholder="1234 1234 1234 1234"
        />
        { errors.cardNumber !== undefined && <span className="error-span error-span-top">{ errors.cardNumber }</span> }
        <span className="card-icons">
          <FaCcVisa className="span-card-icons" /> {' '}
          <FaCcMastercard className="span-card-icons" /> {' '}
          <SiAmericanexpress className="span-card-icons" /> {' '}
          <FaCcDiscover className="span-card-icons" />
        </span>
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
            <span><BsCreditCard2BackFill className="span-card-icons" /></span>
          </div>
        </div>
      </div>
  </StyledCardDetailsDiv>
);
