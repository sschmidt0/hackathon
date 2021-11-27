import { useState } from 'react';
import { ContainedButton } from './ContainedButton';
import { CardDetailsInputBlock } from './CardDetailsInputBlock';
import { SelectInput } from './SelectInput';
import { validateInput } from '../assets/validateInput';

export const Formulary = () => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvcNumber, setCvcNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      cardNumber,
      expireDate,
      cvcNumber,
      fullName,
      country,
      zip
    };

    const errorChecking = validateInput(data);
    if (!errorChecking.isValid) setErrors(errorChecking.errors);
    if (errorChecking.isValid) {
      setErrors({});
      console.log('paid successfully');
    }
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
      { errors.email !== undefined && <span className="error-span">{ errors.email }</span> }

      <CardDetailsInputBlock
        cardNumber={ cardNumber }
        setCardNumber={ setCardNumber }
        expireDate={ expireDate }
        setExpireDate={ setExpireDate }
        cvcNumber={ cvcNumber }
        setCvcNumber={ setCvcNumber }
        errors={ errors }
      />

      <label htmlFor="fullName">Name on card</label>
      <input
        type="text"
        name="fullName"
        value={ fullName }
        onChange={ (e) => setFullName(e.target.value) }
      />
      { errors.fullName !== undefined && <span className="error-span">{ errors.fullName }</span> }

      <SelectInput setCountry={ setCountry } error={ errors.country } />
      <input
        type="text"
        maxLength="9"
        name="country"
        value={ zip }
        onChange={ (e) => setZip(e.target.value) }
        placeholder="ZIP"
      />
      { errors.zip !== undefined && <span className="error-span">{ errors.zip }</span> }

      <ContainedButton
        // isDisabled={ email === '' || cardNumber === '' || expireDate === '' || cvcNumber === '' || fullName === '' || country  === '' || zip === '' }
        text="Pay $899.00"
        method={ handleSubmit }
      />
    </form>
  );
};
