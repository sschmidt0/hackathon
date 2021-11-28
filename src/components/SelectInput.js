import { useState, useEffect } from 'react';
import { getCountries } from '../assets/api/getCountries';

export const SelectInput = ({ country, setCountry, error }) => {
  const [countries, setCountries] = useState('');
  useEffect(() => {
    getCountries(setCountries);
  }, []);

  return (
    <>
      <label htmlFor="country">Country or region</label>
      { error !== undefined && <span className="error-span">{ error }</span> }
      <select name="country" id="country" value={ country } onChange={ (e) => setCountry(e.target.value) }>
        <option value={ null }>Select a country</option>
        { countries !== '' && countries.map( (countryItem, id) => <option key={ id } value={ countryItem.name }>{ countryItem.name }</option>) }
      </select>
    </>
  );
};
