import { useState, useEffect } from 'react';
import { getCountries } from '../api/getCountries';

export const SelectInput = ({ country, setCountry }) => {
  const [countries, setCountries] = useState('');
  useEffect(() => {
    getCountries(setCountries);
  }, []);

  return (
    <>
      <label htmlFor="country">Country or region</label>
      <select name="country" id="country" value={ country } onChange={ (e) => setCountry(e.target.value) }>
        <option value={ null }>Select a country</option>
        { countries !== '' && countries.map( (country, id) => <option key={ id } value={ country.name }>{ country.name }</option>) }
      </select>
    </>
  );
};