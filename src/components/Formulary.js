import { useState } from 'react';
import { ContainedButton } from './ContainedButton';
import { CardDetailsInputBlock } from './CardDetailsInputBlock';
import { SelectInput } from './SelectInput';

export const Formulary = () => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvcNumber, setCvcNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked submit');
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

      <CardDetailsInputBlock
        cardNumber={ cardNumber }
        setCardNumber={ setCardNumber }
        expireDate={ expireDate }
        setExpireDate={ setExpireDate }
        cvcNumber={ cvcNumber }
        setCvcNumber={ setCvcNumber }
      />

      <label htmlFor="fullName">Name on card</label>
      <input
        type="text"
        name="fullName"
        value={ fullName }
        onChange={ (e) => setFullName(e.target.value) }
      />
      {/* { error !== '' && <span className="error-span">{ error }</span> } */}

      <SelectInput setCountry={ setCountry } />
      <input
        type="text"
        maxlength="9"
        name="country"
        value={ zip }
        onChange={ (e) => setZip(e.target.value) }
        placeholder="ZIP"
      />
      {/* { error !== '' && <span className="error-span">{ error }</span> } */}

      <ContainedButton
        isDisabled={ email === '' || cardNumber === '' || expireDate === '' || cvcNumber === '' || fullName === '' || country  === '' || zip === '' }
        text="Pay $899.00"
        method={ handleSubmit }
      />
    </form>
  );
};
