import { useState } from 'react';
import { ContainedButton } from './ContainedButton';

export const Formulary = () => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvcNumber, setCvcNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form noValidate onSubmit={ handleSubmit }>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      {/* { error !== '' && <span className="error-span">{ error }</span> } */}

      <label htmlFor="cardDetails">Card details</label>
      <div className="card-group">
        <input
          type="text"
          name="cardNumber"
          value={ cardNumber }
          onChange={ (e) => setCardNumber(e.target.value) }
          placeholder="1234 1234 1234 1234"
        />
        {/* { error !== '' && <span className="error-span">{ error }</span> } */}
        <input
          type="text"
          name="expireDate"
          value={ expireDate }
          onChange={ (e) => setExpireDate(e.target.value) }
          placeholder="MM / YY"
        />
        {/* { error !== '' && <span className="error-span">{ error }</span> } */}
        <input
          type="text"
          name="cvcNumber"
          value={ cvcNumber }
          onChange={ (e) => setCvcNumber(e.target.value) }
          placeholder="CVC"
        />
        {/* { error !== '' && <span className="error-span">{ error }</span> } */}
      </div>

      <label htmlFor="fullName">Name on card</label>
      <input
        type="text"
        name="fullName"
        value={ fullName }
        onChange={ (e) => setFullName(e.target.value) }
      />
      {/* { error !== '' && <span className="error-span">{ error }</span> } */}

      <label htmlFor="country">Country or region</label>
      <select name="country" id="country">
        <option value="germany">Germany</option>
        <option value="spain">Spain</option>
        <option value="england">England</option>
        <option value="italy">Italy</option>
      </select>
      <input
        type="text"
        name="country"
        value={ country }
        onChange={ (e) => setCountry(e.target.value) }
        placeholder="ZIP"
      />
      {/* { error !== '' && <span className="error-span">{ error }</span> } */}

      <ContainedButton isDisabled={ isDisabled } text="Pay $899.00" method={ handleSubmit } />

    </form>
  );
};
